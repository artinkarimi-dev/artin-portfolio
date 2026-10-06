import { existsSync } from "node:fs";
import path from "node:path";

const publicRoot = path.resolve(process.cwd(), "public");

export function localAssetExists(url?: string): url is string {
  if (!url || !url.startsWith("/") || url.startsWith("//")) return false;

  const relativePath = url.slice(1).split(/[?#]/, 1)[0];
  if (!relativePath) return false;

  const resolved = path.resolve(publicRoot, relativePath);
  const insidePublic =
    resolved === publicRoot || resolved.startsWith(`${publicRoot}${path.sep}`);

  return insidePublic && existsSync(resolved);
}
