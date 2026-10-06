import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir, writeFile } from "node:fs/promises";
import assert from "node:assert/strict";
import { startStaticServer } from "./serve-static.mjs";
const { server, origin } = await startStaticServer();
const expectedSiteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://frontend-portfolio-studio.artinkarimy1385.chatgpt.site"
).replace(/\/+$/, "");

async function launchBrowser() {
  try {
    return await chromium.launch({ headless: true });
  } catch (error) {
    try {
      return await chromium.launch({ channel: "msedge", headless: true });
    } catch {
      throw new Error(
        `Unable to launch Playwright Chromium or Microsoft Edge. Run \"npx playwright install chromium\" and retry. Original error: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }
}

const browser = await launchBrowser();
const context = await browser.newContext({ reducedMotion: "reduce" });
const page = await context.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
await mkdir("artifacts", { recursive: true });
const results = [];
try {
  for (const width of [
    320, 360, 375, 390, 414, 480, 768, 820, 1024, 1280, 1440, 1536,
    1920, 2560,
  ]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(origin, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.locator("img").evaluateAll(async (images) => {
      images.forEach((image) => { image.loading = "eager"; });
      await Promise.all(images.map(async (image) => {
        if (!image.complete) {
          await new Promise((resolve) => {
            image.addEventListener("load", resolve, { once: true });
            image.addEventListener("error", resolve, { once: true });
          });
        }
      }));
    });
    const geometry = await page.evaluate(() => ({
      width: innerWidth,
      document: document.documentElement.scrollWidth,
      broken: [...document.images]
        .filter((i) => !i.complete || i.naturalWidth === 0)
        .map((i) => i.src),
    }));
    assert.ok(
      geometry.document <= geometry.width,
      `Overflow at ${width}: ${JSON.stringify(geometry)}`,
    );
    assert.deepEqual(geometry.broken, [], `Broken images at ${width}`);
    assert.equal(await page.locator("h1").count(), 1);
    results.push({ width, overflow: false, brokenImages: 0 });
    if ([375, 390, 768, 1024, 1280, 1440, 1920, 2560].includes(width))
      await page.screenshot({
        path: `artifacts/home-${width}.png`,
        fullPage: true,
      });
  }
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(origin, { waitUntil: "networkidle" });
  assert.equal(await page.locator("html.lenis").count(), 1, "Lenis root must initialize exactly once");
  await page.keyboard.press("Tab");
  assert.equal(await page.evaluate(() => document.activeElement?.textContent?.trim()), "Skip to content");
  await page.keyboard.press("Enter");
  assert.equal(new URL(page.url()).hash, "#main");
  assert.ok((await page.title()).includes("Artin Karimi — Full-Stack Developer"));
  assert.equal(await page.locator("#process .process-steps li").count(), 7);
  assert.equal(await page.locator('a[href="/resume.pdf"]').count(), 0);
  assert.ok(await page.locator('a[href="mailto:artinkarimy1385@gmail.com"]').count());
  for (const destination of [
    "https://github.com/artinkarimi-dev",
    "https://www.linkedin.com/in/artin-karimi/",
    "https://www.instagram.com/made.byartin/",
  ]) {
    assert.ok(await page.locator(`a[href="${destination}"]`).count());
  }
  assert.ok(!(await page.locator("body").innerText()).includes("[Add"));
  assert.ok(!/certificate coming soon|award verification pending|résumé coming soon/i.test(await page.locator("body").innerText()));
  const menuTarget = await page.getByRole("button", { name: "Open menu", exact: true }).boundingBox();
  assert.ok(menuTarget.width >= 44 && menuTarget.height >= 44, "Mobile menu touch target is too small");
  await page.getByRole("button", { name: "Open menu", exact: true }).click();
  assert.equal(
    await page.evaluate(() => document.body.style.overflow),
    "hidden",
  );
  assert.equal(
    await page.locator("html.lenis-stopped").count(),
    1,
    "Lenis should stop while the mobile menu is open",
  );
  await page.keyboard.press("Escape");
  assert.equal(await page.evaluate(() => document.activeElement?.getAttribute("aria-label")), "Open menu");
  await page.getByRole("button", { name: "Open menu", exact: true }).click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Stack", exact: true })
    .click();
  assert.equal(
    await page.getByRole("navigation", { name: "Mobile navigation" }).count(),
    0,
  );
  assert.equal(await page.evaluate(() => document.body.style.overflow), "");
  assert.equal(await page.locator("html.lenis-stopped").count(), 0, "Lenis did not restart after the mobile menu closed");
  // Missing contact details must never become fake links or mailto placeholders.
  const invalidLinks = await page.locator("a").evaluateAll((anchors) =>
    anchors.map((anchor) => anchor.getAttribute("href")).filter((href) => !href || href.includes("[") || href === "#"),
  );
  assert.deepEqual(invalidLinks, []);
  const missingAnchors = await page.locator('a[href^="/#"], a[href^="#"]').evaluateAll((anchors) =>
    anchors.map((anchor) => anchor.hash.slice(1)).filter((id) => id && !document.getElementById(id)),
  );
  assert.deepEqual(missingAnchors, []);
  const duplicateIds = await page.evaluate(() => {
    const counts = new Map();
    for (const element of document.querySelectorAll("[id]")) {
      counts.set(element.id, (counts.get(element.id) || 0) + 1);
    }
    return [...counts.entries()].filter(([, count]) => count > 1);
  });
  assert.deepEqual(duplicateIds, [], "Duplicate IDs found");
  assert.equal(await page.locator("html").getAttribute("lang"), "en");
  assert.equal(await page.locator("main").count(), 1);
  const smallTargets = await page.locator("a, button, summary").evaluateAll((elements) =>
    elements
      .filter((element) => {
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        return style.visibility !== "hidden" && style.display !== "none" && rect.width > 0 && rect.height > 0;
      })
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return { text: element.textContent?.trim().slice(0, 80), width: rect.width, height: rect.height };
      })
      .filter(({ width, height }) => width < 24 || height < 24),
  );
  assert.deepEqual(smallTargets, [], `Interactive target below 24px: ${JSON.stringify(smallTargets)}`);
  const internalRoutes = await page.locator("a[href]").evaluateAll((anchors) =>
    [...new Set(anchors
      .map((anchor) => anchor.getAttribute("href"))
      .filter((href) => href && !href.startsWith("#") && !href.startsWith("mailto:"))
      .map((href) => new URL(href, location.href))
      .filter((url) => url.origin === location.origin)
      .map((url) => url.pathname))],
  );
  for (const route of internalRoutes) {
    const response = await page.request.get(`${origin}${route}`);
    assert.ok(response.status() < 400, `Internal route ${route} returned ${response.status()}`);
  }
  // Disclosure works with the keyboard and does not need extra JavaScript.
  const example = page.locator(".tool-example").first();
  await example.locator("summary").focus();
  await page.keyboard.press("Enter");
  assert.equal(await example.getAttribute("open"), "");
  await page.keyboard.press("Enter");
  assert.equal(await example.getAttribute("open"), null);
  await page.setViewportSize({ width: 768, height: 1000 });
  await page.evaluate(() => { document.documentElement.style.fontSize = "200%"; });
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), "Text enlargement causes overflow");
  await page.evaluate(() => { document.documentElement.style.fontSize = ""; });
  await page.setViewportSize({ width: 1440, height: 1000 });
  const desktopAudit = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  assert.deepEqual(desktopAudit.violations.map(v => v.id), []);
  await page.setViewportSize({ width: 375, height: 812 });
  const accessibility = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  assert.deepEqual(
    accessibility.violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => n.target),
    })),
    [],
  );
  const caseStudies = [
    ["jazireh", "Jazireh — Astronomy Platform"],
    ["innoverse-viax-code-arena", "Innoverse / ViaX Code Arena"],
    ["elarven", "Elarven — Boutique Stay Experience"],
  ];
  for (const [slug, heading] of caseStudies) {
    for (const viewport of [
      ...[320, 360, 375, 390, 414, 480, 768, 820, 1024, 1280, 1440, 1536, 1920, 2560].map(
        (width) => ({ width, height: width < 768 ? 812 : 1000 }),
      ),
    ]) {
      await page.setViewportSize(viewport);
      await page.goto(`${origin}/work/${slug}/`, {
        waitUntil: "networkidle",
      });
      assert.equal(
        await page.getByRole("heading", { level: 1 }).textContent(),
        heading,
      );
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${slug} overflows at ${viewport.width}`,
      );
      assert.deepEqual(await page.locator("img").evaluateAll(images => images.filter(image => image.complete && !image.naturalWidth).map(image => image.src)), [], `${slug} has broken images`);
      assert.ok((await page.title()).includes(heading));
      assert.equal(await page.locator('link[rel="canonical"]').getAttribute("href"), `${expectedSiteUrl}/work/${slug}/`);
      if ([375, 1440].includes(viewport.width)) {
        const caseAudit = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze();
        assert.equal(caseAudit.violations.length, 0, JSON.stringify(caseAudit.violations));
        await page.screenshot({
          path: `artifacts/${slug}-${viewport.width}.png`,
          fullPage: true,
        });
      }
    }
    await page.getByRole("link", { name: /Back to selected work/ }).click();
    await page.waitForURL(/\/#work$/);
    assert.ok(await page.getByRole("heading", { name: heading }).count());
  }
  for (const viewport of [
    { width: 568, height: 320 },
    { width: 667, height: 375 },
    { width: 844, height: 390 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto(origin, { waitUntil: "networkidle" });
    assert.ok(
      await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      `Landscape homepage overflows at ${viewport.width}x${viewport.height}`,
    );
  }
  await page.goto(`${origin}/not-a-real-page/`, { waitUntil: "networkidle" });
  assert.equal(await page.getByRole("heading", { level: 1 }).textContent(), "This page isn’t here.");
  assert.ok(await page.getByRole("link", { name: /Back to home/ }).count());
  await page.goto(origin, { waitUntil: "networkidle" });
  assert.ok(await page.locator('meta[property="og:image"]').count(), "Social preview image is missing");
  assert.ok(await page.locator('meta[name="twitter:image"]').count(), "Twitter preview image is missing");
  const socialImageUrl = new URL(await page.locator('meta[property="og:image"]').getAttribute("content"));
  const socialImage = await page.request.get(`${origin}${socialImageUrl.pathname}`);
  assert.equal(socialImage.status(), 200);
  assert.ok(socialImage.headers()["content-type"].startsWith("image/png"));
  assert.equal(await page.locator('link[rel="canonical"]').getAttribute("href"), `${expectedSiteUrl}/`);
  for (const route of ["/robots.txt", "/sitemap.xml"]) {
    const response = await page.request.get(`${origin}${route}`);
    assert.equal(response.status(), 200, `${route} is unavailable`);
  }
  for (const anchor of await page.locator('a[target="_blank"]').all()) {
    const rel = (await anchor.getAttribute("rel")) || "";
    assert.ok(rel.includes("noopener") && rel.includes("noreferrer"), "External target lacks safe rel");
  }
  assert.deepEqual(errors, []);
  await writeFile(
    "artifacts/qa.json",
    JSON.stringify(
      {
        viewports: results,
        mobileMenu: "passed",
        caseStudies: caseStudies.map(([slug]) => slug),
        caseStudyWidths: [320, 360, 375, 390, 414, 480, 768, 820, 1024, 1280, 1440, 1536, 1920, 2560],
        landscape: "passed",
        notFound: "passed",
        metadata: "passed",
        placeholderLinks: "passed",
        aiDisclosureKeyboard: "passed",
        textEnlargement: "passed",
        axeViolations: 0,
        browserErrors: errors,
      },
      null,
      2,
    ),
  );
  console.log(
    JSON.stringify({
      testedWidths: results.length,
      mobileMenu: "passed",
      caseStudies: caseStudies.length,
      axeViolations: 0,
      browserErrors: 0,
    }),
  );
} finally {
  await browser.close();
  await new Promise((resolve) => server.close(resolve));
}
