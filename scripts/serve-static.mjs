import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

export async function startStaticServer({
  directory = path.resolve("out"),
  port = 0,
} = {}) {
  const root = path.resolve(directory);
  if (!(await stat(path.join(root, "index.html")).catch(() => null))) {
    throw new Error(`No static export found in ${root}. Run npm run build first.`);
  }

  const server = createServer(async (request, response) => {
    let filename;
    try {
      const pathname = decodeURIComponent(
        new URL(request.url || "/", "http://127.0.0.1").pathname,
      );
      filename = path.resolve(root, `.${pathname}`);
      if (filename !== root && !filename.startsWith(root + path.sep)) {
        response.writeHead(403).end();
        return;
      }
      const entry = await stat(filename).catch(() => null);
      if (entry?.isDirectory() || pathname.endsWith("/")) {
        filename = path.join(filename, "index.html");
      }
      let contents = await readFile(filename).catch(() => null);
      let status = 200;
      if (!contents) {
        status = 404;
        filename = path.join(root, "404.html");
        contents = await readFile(filename).catch(() => Buffer.from("Not found"));
      }
      const contentType = filename === path.join(root, "opengraph-image")
        ? "image/png"
        : types[path.extname(filename)] || "application/octet-stream";
      const compressible = /^(text\/|application\/(json|xml))/.test(contentType);
      const gzip = compressible && /\bgzip\b/.test(request.headers["accept-encoding"] || "");
      if (gzip) contents = gzipSync(contents);
      response.writeHead(status, {
        "content-type": contentType,
        "content-length": contents.length,
        ...(gzip ? { "content-encoding": "gzip", vary: "Accept-Encoding" } : {}),
      });
      response.end(request.method === "HEAD" ? undefined : contents);
    } catch {
      response.writeHead(400).end("Bad request");
    }
  });
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(port, "127.0.0.1", resolve);
  });
  const address = server.address();
  return { server, origin: `http://127.0.0.1:${address.port}` };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT || 3100);
  const { origin } = await startStaticServer({ port });
  console.log(`Static export ready at ${origin}`);
}
