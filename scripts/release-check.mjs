import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
assert.ok(
  rawSiteUrl,
  "NEXT_PUBLIC_SITE_URL is required for a production release. Set it to the final public HTTPS origin before running npm run release.",
);

const siteUrl = new URL(rawSiteUrl);
const hostname = siteUrl.hostname.toLowerCase();
const reservedExampleHost = /(^|\.)example\.(com|net|org)$/i.test(hostname) || /\.example$/i.test(hostname);
const localHost = hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";

assert.equal(siteUrl.protocol, "https:", "Production NEXT_PUBLIC_SITE_URL must use HTTPS.");
assert.equal(siteUrl.username, "", "Production URL must not contain credentials.");
assert.equal(siteUrl.password, "", "Production URL must not contain credentials.");
assert.equal(siteUrl.search, "", "Production URL must not contain a query string.");
assert.equal(siteUrl.hash, "", "Production URL must not contain a fragment.");
assert.ok(siteUrl.pathname === "/" || siteUrl.pathname === "", "Production URL must be an origin, not a nested path.");
assert.ok(!reservedExampleHost, "Replace the reserved example domain before release.");
assert.ok(!localHost, "Replace the local hostname before release.");

const packageJson = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const nextVersion = packageJson.dependencies?.next;
const eslintNextVersion = packageJson.devDependencies?.["eslint-config-next"];

function isAtLeastPatchedNext(version) {
  const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(version ?? "");
  if (!match) return false;
  const [, major, minor, patch] = match.map(Number);
  return major > 16 || (major === 16 && (minor > 3 || (minor === 3 && patch >= 8)));
}

assert.ok(
  isAtLeastPatchedNext(nextVersion),
  `Production release blocked: Next.js ${nextVersion ?? "is missing"}. Upgrade Next.js to 16.3.8 or a newer stable patched release, regenerate package-lock.json through npm, then rerun release.`,
);
assert.equal(
  eslintNextVersion,
  nextVersion,
  "Keep eslint-config-next on the same version as Next.js before release.",
);

console.log(`Release origin validated: ${siteUrl.origin}`);
console.log(`Patched Next.js release gate passed: ${nextVersion}`);
