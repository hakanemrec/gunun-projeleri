// Feed verisini Supabase'e senkronlar.
//
// Kullanım:
//   SUPABASE_URL=... SUPABASE_SERVICE_KEY=... node sync-to-supabase.mjs            → data/days/*.json dosyalarını senkronlar
//   SUPABASE_URL=... SUPABASE_SERVICE_KEY=... node sync-to-supabase.mjs --legacy   → eski data/feed.js'i tek seferlik göç ettirir
//
// Idempotent: aynı gün tekrar çalıştırılırsa upsert eder, kopya oluşturmaz.

import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadLegacyFeed } from "./legacy-feed.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error("SUPABASE_URL ve SUPABASE_SERVICE_KEY ortam değişkenleri gerekli.");
  process.exit(1);
}
const db = createClient(SUPABASE_URL, SERVICE_KEY, { auth: { persistSession: false } });

const termKey = (t) => String(t).trim().toLowerCase();

// ---- Kaynaklar ----

function loadDayFiles() {
  const dir = join(ROOT, "data", "days");
  let files;
  try { files = readdirSync(dir).filter((f) => f.endsWith(".json")); }
  catch { return []; }
  return files.sort().map((f) => {
    const day = JSON.parse(readFileSync(join(dir, f), "utf8"));
    if (!/^\d{4}-\d{2}-\d{2}$/.test(day.date)) throw new Error(`${f}: date alanı YYYY-MM-DD olmalı.`);
    return day;
  });
}

// ---- Doğrulama (bozuk gün DB'ye girmesin) ----

function validateDay(day) {
  const errs = [];
  if (!Array.isArray(day.projects) || day.projects.length === 0) errs.push("projects boş");
  for (const p of day.projects || []) {
    if (!p.name) errs.push("adsız proje");
    if (!p.url?.startsWith("https://")) errs.push(`${p.name}: url geçersiz`);
    if (!p.sections?.serves) errs.push(`${p.name}: serves bölümü eksik`);
    for (const g of p.glossary || []) {
      if (!g.term || !g.def) errs.push(`${p.name}: eksik sözlük girdisi`);
    }
  }
  if (errs.length) throw new Error(`${day.date} doğrulama hatası: ${errs.join("; ")}`);
}

// ---- Yazma ----

async function upsertDay(day) {
  validateDay(day);

  let { error } = await db.from("days").upsert({ date: day.date });
  if (error) throw new Error(`days upsert (${day.date}): ${error.message}`);

  for (const p of day.projects) {
    const { data: proj, error: pErr } = await db
      .from("projects")
      .upsert(
        {
          day_date: day.date,
          name: p.name,
          url: p.url,
          stars: p.stars ?? null,
          language: p.language ?? null,
          serves_md: p.sections?.serves ?? null,
          tech_md: p.sections?.tech ?? null,
          why_md: p.sections?.why ?? null,
          evolve_md: p.sections?.evolve ?? null,
        },
        { onConflict: "day_date,name" }
      )
      .select("id")
      .single();
    if (pErr) throw new Error(`projects upsert (${p.name}): ${pErr.message}`);

    for (const g of p.glossary || []) {
      const key = termKey(g.term);
      // Terim yoksa ekle; varsa tanımı GÜNCELLEME (ilk/mevcut tanım korunur, tutarlılık için)
      const { error: tErr } = await db
        .from("terms")
        .upsert({ key, term: g.term, def_md: g.def, first_seen: day.date }, { onConflict: "key", ignoreDuplicates: true });
      if (tErr) throw new Error(`terms upsert (${key}): ${tErr.message}`);

      const { error: ptErr } = await db
        .from("project_terms")
        .upsert({ project_id: proj.id, term_key: key }, { onConflict: "project_id,term_key", ignoreDuplicates: true });
      if (ptErr) throw new Error(`project_terms upsert: ${ptErr.message}`);
    }
  }
  console.log(`✓ ${day.date} — ${day.projects.length} proje senkronlandı`);
}

const legacy = process.argv.includes("--legacy");
const days = legacy ? loadLegacyFeed(join(ROOT, "data", "feed.js")) : loadDayFiles();
if (!days.length) {
  console.log(legacy ? "feed.js'te göç edilecek gün yok." : "data/days/ içinde dosya yok.");
  process.exit(0);
}
console.log(`${days.length} gün senkronlanacak (${legacy ? "legacy feed.js" : "data/days"})...`);
for (const day of days) await upsertDay(day);
console.log("Tamamlandı.");
