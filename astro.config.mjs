// @ts-check
import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";

// public/_headers ships a CSP with no 'unsafe-inline': styles must be external
// and every inline script must be listed by hash. This checks the built HTML
// against that policy and fails the build on any drift, so a changed script
// or a stray inline style shows up here instead of as a broken page in prod.
function cspCheck() {
  return {
    name: "csp-check",
    hooks: {
      /** @param {{ dir: URL, logger: import("astro").AstroIntegrationLogger }} options */
      "astro:build:done": async ({ dir, logger }) => {
        const out = fileURLToPath(dir);
        const headers = await readFile(join(out, "_headers"), "utf8");
        const allowed = new Set([...headers.matchAll(/'(sha256-[A-Za-z0-9+/=]+)'/g)].map((m) => m[1]));
        const problems = [];
        let scripts = 0;

        const files = (await readdir(out, { recursive: true })).filter((f) => f.endsWith(".html"));
        for (const file of files) {
          const html = await readFile(join(out, file), "utf8");
          if (/<style[\s>]/i.test(html) || /\sstyle\s*=/i.test(html)) {
            problems.push(`${file}: inline style`);
          }
          for (const [, attrs, body] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
            if (/\ssrc\s*=/i.test(attrs)) continue;
            scripts++;
            const hash = `sha256-${createHash("sha256").update(body).digest("base64")}`;
            if (!allowed.has(hash)) problems.push(`${file}: inline script not in CSP ('${hash}')`);
          }
        }

        if (problems.length) {
          throw new Error(`CSP check failed:\n  ${problems.join("\n  ")}`);
        }
        logger.info(`${files.length} pages, ${scripts} inline scripts, all covered by the CSP`);
      },
    },
  };
}

export default defineConfig({
  site: "https://giorgisamu.info",
  // Cloudflare serves /work/sites/index.html at /work/sites/ and redirects the
  // slashless form; matching it here makes a slashless internal link 404 in dev.
  trailingSlash: "always",
  build: {
    inlineStylesheets: "never",
  },
  vite: {
    build: {
      // Astro inlines small bundled scripts by default; keep them as files
      // so script-src 'self' covers them without extra hashes.
      assetsInlineLimit: 0,
    },
  },
  integrations: [cspCheck()],
});
