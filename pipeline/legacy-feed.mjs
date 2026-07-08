// Eski data/feed.js formatını okuyup yeni JSON gün formatına çevirir.
// Hem tek seferlik Supabase göçü hem de yerel dev-feed üretimi bunu kullanır.

import TurndownService from "turndown";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const turndown = new TurndownService({ headingStyle: "atx", bulletListMarker: "-" });
const htmlToMd = (html) => (html ? turndown.turndown(String(html)).trim() : null);

const TR_MONTHS = {
  ocak: 1, şubat: 2, mart: 3, nisan: 4, mayıs: 5, haziran: 6,
  temmuz: 7, ağustos: 8, eylül: 9, ekim: 10, kasım: 11, aralık: 12,
};

// "30 Haziran 2026" → "2026-06-30"
export function parseTurkishDate(s) {
  const m = String(s).trim().match(/^(\d{1,2})\s+(\S+)\s+(\d{4})$/);
  if (!m) throw new Error(`Tarih çözülemedi: "${s}"`);
  const month = TR_MONTHS[m[2].toLowerCase()];
  if (!month) throw new Error(`Ay adı bilinmiyor: "${m[2]}"`);
  return `${m[3]}-${String(month).padStart(2, "0")}-${String(m[1]).padStart(2, "0")}`;
}

export function loadLegacyFeed(feedJsPath) {
  const src = readFileSync(feedJsPath, "utf8");
  const sandbox = { window: {} };
  vm.runInNewContext(src, sandbox);
  const feed = sandbox.window.__FEED__;
  if (!Array.isArray(feed)) throw new Error("feed.js içinde window.__FEED__ dizisi bulunamadı.");
  return feed
    .filter((day) => !day.sample)
    .map((day) => ({
      date: parseTurkishDate(day.date),
      projects: (day.projects || []).map((p) => ({
        name: p.name,
        url: p.url,
        stars: p.stars ?? null,
        language: p.language ?? null,
        sections: {
          serves: htmlToMd(p.sections?.serves),
          tech: htmlToMd(p.sections?.tech),
          why: htmlToMd(p.sections?.why),
          evolve: htmlToMd(p.sections?.evolve),
        },
        glossary: (p.glossary || []).map((g) => ({ term: g.term, def: g.def })),
      })),
    }));
}
