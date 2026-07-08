// Eski data/feed.js'ten web/public/dev-feed.json üretir.
// Supabase yapılandırılmadan önce arayüzü gerçek veriyle geliştirmek için.

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadLegacyFeed } from "./legacy-feed.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const days = loadLegacyFeed(join(ROOT, "data", "feed.js"));
const out = join(ROOT, "web", "public", "dev-feed.json");
writeFileSync(out, JSON.stringify(days, null, 2), "utf8");
console.log(`✓ ${days.length} gün → ${out}`);
