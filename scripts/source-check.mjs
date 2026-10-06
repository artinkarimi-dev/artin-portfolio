import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = path.join(root, "src");
const publicRoot = path.join(root, "public");

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}

function resolveSourceImport(fromFile, specifier) {
  const base = specifier.startsWith("@/")
    ? path.join(sourceRoot, specifier.slice(2))
    : path.resolve(path.dirname(fromFile), specifier);

  const candidates = [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    `${base}.js`,
    `${base}.mjs`,
    path.join(base, "index.ts"),
    path.join(base, "index.tsx"),
  ];

  return candidates.some(existsSync);
}

const sourceFiles = walk(sourceRoot).filter((file) => /\.(?:ts|tsx|css)$/.test(file));
const codeFiles = sourceFiles.filter((file) => /\.(?:ts|tsx)$/.test(file));
const issues = [];

for (const file of codeFiles) {
  const content = readFileSync(file, "utf8");
  const relative = path.relative(root, file);

  for (const [pattern, label] of [
    [/\bdebugger\b/g, "debugger statement"],
    [/dangerouslySetInnerHTML/g, "dangerouslySetInnerHTML"],
    [/\beval\s*\(/g, "eval()"],
    [/@ts-ignore/g, "@ts-ignore"],
  ]) {
    if (pattern.test(content)) issues.push(`${relative}: ${label}`);
  }

  const importPattern = /(?:from\s+|import\s*)["']([^"']+)["']/g;
  for (const match of content.matchAll(importPattern)) {
    const specifier = match[1];
    if ((specifier.startsWith("@/") || specifier.startsWith(".")) && !resolveSourceImport(file, specifier)) {
      issues.push(`${relative}: unresolved import ${specifier}`);
    }
  }

  const assetPattern = /["'](\/(?:images|projects)\/[^"']+)["']/g;
  for (const match of content.matchAll(assetPattern)) {
    const asset = match[1];
    const target = path.resolve(publicRoot, asset.slice(1));
    if (!target.startsWith(`${publicRoot}${path.sep}`) || !existsSync(target)) {
      issues.push(`${relative}: missing public asset ${asset}`);
    }
  }
}

for (const directory of [path.join(publicRoot, "images"), path.join(publicRoot, "projects")]) {
  for (const file of walk(directory)) {
    if (/\.(?:jpe?g|png|gif|bmp|tiff)$/i.test(file)) {
      issues.push(`${path.relative(root, file)}: raster asset should be WebP`);
    }
    if (/\.webp$/i.test(file) && statSync(file).size > 500_000) {
      issues.push(`${path.relative(root, file)}: WebP exceeds 500 KB`);
    }
  }
}

const packageJson = JSON.parse(readFileSync(path.join(root, "package.json"), "utf8"));
for (const group of ["dependencies", "devDependencies"]) {
  for (const [name, version] of Object.entries(packageJson[group] ?? {})) {
    if (version === "latest" || version === "*" || version === "next") {
      issues.push(`package.json: ${name} uses non-reproducible version ${version}`);
    }
  }
}

const smoothScrollFile = path.join(sourceRoot, "components", "smooth-scroll.tsx");
const smoothScrollSource = existsSync(smoothScrollFile)
  ? readFileSync(smoothScrollFile, "utf8")
  : "";
const layoutSource = readFileSync(path.join(sourceRoot, "app", "layout.tsx"), "utf8");
const reactLenisInstances = codeFiles.reduce((count, file) => {
  const content = readFileSync(file, "utf8");
  return count + (content.match(/<ReactLenis\b/g)?.length ?? 0);
}, 0);

if (packageJson.dependencies?.lenis !== "1.3.26") {
  issues.push("package.json: lenis must be pinned to 1.3.26");
}
if (reactLenisInstances !== 1) {
  issues.push(`Lenis must initialize exactly once; found ${reactLenisInstances} ReactLenis instances`);
}
if (!smoothScrollSource.includes("syncTouch: false")) {
  issues.push("SmoothScroll must preserve native touch scrolling (syncTouch: false)");
}
if (!smoothScrollSource.includes("prefers-reduced-motion")) {
  issues.push("SmoothScroll route/hash behavior must respect prefers-reduced-motion");
}
if (!layoutSource.includes('import "lenis/dist/lenis.css"')) {
  issues.push("Root layout must import the official Lenis CSS");
}

const polishSource = readFileSync(path.join(sourceRoot, "app", "polish.css"), "utf8");
if (/animation-timeline\s*:/.test(polishSource)) {
  issues.push("polish.css: continuous scroll-linked animation-timeline is disallowed by the final performance pass");
}
if (/\.site-header\s*\{[^}]*backdrop-filter\s*:\s*blur\(/s.test(polishSource)) {
  issues.push("polish.css: sticky site header must not use backdrop blur during scrolling");
}
if (/\.project-image\s*>\s*img\s*\{[^}]*will-change\s*:\s*transform/s.test(polishSource)) {
  issues.push("polish.css: project images must not be permanently promoted with will-change: transform");
}
if (!smoothScrollSource.includes("lerp: 0.17")) {
  issues.push("SmoothScroll must keep the responsive final-pass lerp tuning");
}

assert.deepEqual(issues, [], `Source checks failed:\n${issues.map((issue) => `- ${issue}`).join("\n")}`);
console.log(`Source checks passed: ${codeFiles.length} TS/TSX files, optimized public raster assets, resolved local imports.`);
