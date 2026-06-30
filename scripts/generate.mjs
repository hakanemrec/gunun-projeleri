// GitHub Actions tarafından her gün çalıştırılır.
// GitHub trending -> aday repolar -> metadata + README -> Gemini ile 3 proje seç+analiz et
// -> data/feed.js'in başına yeni günü ekle. Commit/push'u workflow yapar.
// Bağımlılık yok: Node 20+ yerleşik fetch kullanılır.

import { readFileSync, writeFileSync } from "node:fs";

const GEMINI_KEY = process.env.GEMINI_API_KEY;
const GH_TOKEN = process.env.GH_TOKEN || process.env.GITHUB_TOKEN || "";
const FEED_PATH = "data/feed.js";
const MODEL = process.env.GEMINI_MODEL || "gemini-2.0-flash";

if (!GEMINI_KEY) { console.error("GEMINI_API_KEY yok!"); process.exit(1); }

const AYLAR = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
const INTEREST = ["ai","llm","agent","mcp","model","rag","gpt","ml","data","database","db","sql","query","cli","terminal","tool","toolkit","framework","library","sdk","api","automat","productiv","devtool","compiler","runtime","vector","embedding"];

const UA = { "User-Agent": "gunun-projeleri-bot", "Accept": "text/html" };
const GH_HEADERS = { "User-Agent": "gunun-projeleri-bot", "Accept": "application/vnd.github+json", ...(GH_TOKEN ? { Authorization: `Bearer ${GH_TOKEN}` } : {}) };

function starsFmt(n) {
  if (n == null) return "";
  return n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(n);
}

// --- 1) Mevcut feed'i oku (geçerli JS olarak değerlendir) ---
function loadFeed() {
  try {
    const raw = readFileSync(FEED_PATH, "utf8");
    const fn = new Function("var window={};" + raw + "\n;return window.__FEED__;");
    const arr = fn();
    return Array.isArray(arr) ? arr : [];
  } catch (e) {
    console.error("feed.js okunamadı, boş başlanıyor:", e.message);
    return [];
  }
}

// --- 2) Trending'den aday repo isimleri ---
async function fetchTrending() {
  const names = [];
  for (const url of ["https://github.com/trending?since=daily", "https://github.com/trending/python?since=daily", "https://github.com/trending/typescript?since=daily", "https://github.com/trending/rust?since=daily"]) {
    try {
      const html = await (await fetch(url, { headers: UA })).text();
      for (const block of html.split("<article").slice(1)) {
        const m = block.match(/href="\/([^"\/]+\/[^"\/]+)"/);
        if (m && !names.includes(m[1])) names.push(m[1]);
      }
    } catch (e) { console.error("trending hata:", url, e.message); }
  }
  return names;
}

// --- 3) Repo metadata ---
async function fetchMeta(name) {
  try {
    const r = await fetch(`https://api.github.com/repos/${name}`, { headers: GH_HEADERS });
    if (!r.ok) return null;
    const d = await r.json();
    if (d.archived || d.fork) return null;
    return { name: d.full_name, url: d.html_url, desc: d.description || "", language: d.language || "", stars: d.stargazers_count || 0 };
  } catch { return null; }
}

async function fetchReadme(name) {
  try {
    const r = await fetch(`https://api.github.com/repos/${name}/readme`, { headers: { ...GH_HEADERS, Accept: "application/vnd.github.raw+json" } });
    if (!r.ok) return "";
    return (await r.text()).slice(0, 4000);
  } catch { return ""; }
}

// --- 4) Gemini çağrısı ---
async function gemini(prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_KEY}`;
  const body = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { temperature: 0.7, responseMimeType: "application/json", maxOutputTokens: 8192 },
  };
  const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  if (!r.ok) throw new Error(`Gemini ${r.status}: ${await r.text()}`);
  const data = await r.json();
  const text = data?.candidates?.[0]?.content?.parts?.map(p => p.text).join("") || "";
  const clean = text.replace(/^```json\s*/i, "").replace(/```\s*$/i, "").trim();
  return JSON.parse(clean);
}

function buildPrompt(candidates, dedupe) {
  const list = candidates.map((c, i) =>
    `${i + 1}. ${c.name} | ${c.language || "?"} | ⭐${c.stars} | ${c.desc}\nREADME (kısaltılmış):\n${c.readme || "(yok)"}\n---`).join("\n");
  return `Sen bir yazılım kültürü editörüsün. Aşağıda GitHub'da bugün trend olan aday projeler var (metadata + kısaltılmış README).

KULLANICI: IFS ERP geliştiricisi, profesyonelde PL/SQL ve IFS Marble dili kullanıyor. Meraklı, geniş ufuklu bir generalist. İlgi alanları: yapay zeka/LLM/API, geliştirici araçları (CLI, kütüphane, framework), veritabanları, üretkenlik & otomasyon.

GÖREV: Bu adaylardan kullanıcıya en uygun ve EN ÖĞRETİCİ 3 projeyi seç (çeşitlilik iyi; saf frontend/CSS demoları ve içi boş 'awesome liste' repolarından kaçın). Şu repoları SEÇME (son günlerde zaten işlendi): ${dedupe.join(", ") || "(yok)"}.

Seçtiğin her proje için Türkçe, samimi ve DOLU bir analiz yaz. Teknik terimleri/jargonu çekinmeden kullan AMA her projenin sonundaki sözlükte metinde geçen TÜM terimleri sade Türkçe açıkla.

ÇIKTI: Yalnızca şu şemada GEÇERLİ JSON döndür (başka metin yok):
{"picked":[{"name":"owner/repo","sections":{"serves":"<p>Neye hizmet ediyor (problemi kimin için çözüyor)</p>","tech":"<p>Hangi teknolojiler, neden ve nasıl (mimari kararlar + neden bu tercih). <b> ve <code> kullanabilirsin</p>","why":"<p>Neden ilgi gördü / kime hitap ediyor (gerçek değer mi hype mi - dürüst)</p>","evolve":"<p>Geliştirilse ne olur (somut 1-2 fikir; mümkünse IFS/PL-SQL/üretkenlik bağı kur)</p>"},"glossary":[{"term":"API","def":"1-2 cümlelik sade açıklama"}]}]}
Tam 3 proje seç. name alanı tam olarak adaylardaki "owner/repo" biçiminde olsun.

ADAYLAR:
${list}`;
}

(async () => {
  const feed = loadFeed();
  const dedupe = feed.slice(0, 14).flatMap(d => (d.projects || []).map(p => p.name));

  console.log("Trending çekiliyor...");
  let names = (await fetchTrending()).filter(n => !dedupe.includes(n)).slice(0, 24);
  console.log("Aday:", names.length);

  const metas = (await Promise.all(names.map(fetchMeta))).filter(Boolean);
  // ilgi alanına göre puanla, en alakalı ~7 adayın README'sini al
  const score = m => {
    const t = (m.desc + " " + m.language).toLowerCase();
    return INTEREST.reduce((s, k) => s + (t.includes(k) ? 1 : 0), 0);
  };
  metas.sort((a, b) => score(b) - score(a) || b.stars - a.stars);
  const shortlist = metas.slice(0, 7);
  for (const m of shortlist) m.readme = await fetchReadme(m.name);

  console.log("Gemini'ye gönderiliyor:", shortlist.map(m => m.name).join(", "));
  const out = await gemini(buildPrompt(shortlist, dedupe));
  const picked = (out.picked || []).slice(0, 3);
  if (picked.length < 3) throw new Error("Gemini 3 proje döndürmedi: " + JSON.stringify(out).slice(0, 300));

  const metaBy = Object.fromEntries(metas.map(m => [m.name, m]));
  const projects = picked.map(p => {
    const m = metaBy[p.name] || {};
    return {
      name: p.name,
      url: m.url || `https://github.com/${p.name}`,
      stars: starsFmt(m.stars),
      language: m.language || "",
      sections: p.sections,
      glossary: p.glossary || [],
    };
  });

  const now = new Date();
  const dd = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Istanbul", day: "numeric" }).format(now);
  const mm = +new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Istanbul", month: "numeric" }).format(now);
  const yyyy = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Istanbul", year: "numeric" }).format(now);
  const dateStr = `${dd} ${AYLAR[mm - 1]} ${yyyy}`;

  const newFeed = [{ date: dateStr, projects }, ...feed.filter(d => d.date !== dateStr)].slice(0, 60);

  const header = "// Bu dosyayı GitHub Actions her gün otomatik günceller. En yeni gün en üstte.\n// Format: window.__FEED__ = [ { date, projects: [ { name, url, stars, language, sections:{serves,tech,why,evolve}, glossary:[{term,def}] } ] } ]\n";
  writeFileSync(FEED_PATH, header + "window.__FEED__ = " + JSON.stringify(newFeed, null, 2) + ";\n", "utf8");
  console.log(`feed.js güncellendi: ${dateStr} — ${projects.map(p => p.name).join(", ")}`);
})().catch(e => { console.error("HATA:", e.message); process.exit(1); });
