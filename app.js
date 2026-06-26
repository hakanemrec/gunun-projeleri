// ---- Veri ----
const FEED = Array.isArray(window.__FEED__) ? window.__FEED__ : [];

// ---- localStorage anahtarları ----
const BM_KEY = "gh_trending_bookmarks";
const NOTE_KEY = "gh_trending_notes";
const KNOWN_KEY = "gh_trending_known_terms";

function loadSet(key) {
  try { return new Set(JSON.parse(localStorage.getItem(key) || "[]")); }
  catch { return new Set(); }
}
function loadObj(key) {
  try { return JSON.parse(localStorage.getItem(key) || "{}"); }
  catch { return {}; }
}
let bookmarks = loadSet(BM_KEY);
let notes = loadObj(NOTE_KEY);
let known = loadSet(KNOWN_KEY);

function saveBookmarks() { localStorage.setItem(BM_KEY, JSON.stringify([...bookmarks])); }
function saveNotes() { localStorage.setItem(NOTE_KEY, JSON.stringify(notes)); }
function saveKnown() { localStorage.setItem(KNOWN_KEY, JSON.stringify([...known])); }

// ---- Durum ----
let activeTab = "feed";
let query = "";
let glFilter = "unknown"; // sözlük ekranı filtresi: all | new | unknown | known
const openGloss = new Set(); // hangi açılır sözlükler açık (yeniden çizimde korunur)

// ---- Sözlük indeksi (tüm günlerden tekrarsız terimler) ----
function termKey(t) { return String(t).trim().toLowerCase(); }
function buildGlossaryIndex() {
  const idx = new Map();
  // FEED en yeni gün en üstte → ilk karşılaşılan tanım en güncel olur
  FEED.forEach(day => (day.projects || []).forEach(p => (p.glossary || []).forEach(g => {
    const k = termKey(g.term);
    if (!idx.has(k)) idx.set(k, { key: k, term: g.term, def: g.def, count: 0, projects: new Set() });
    const e = idx.get(k);
    e.count++;
    e.projects.add(p.name);
  })));
  return idx;
}
let GL_INDEX = buildGlossaryIndex();

// ---- Bölüm etiketleri ----
const SECTION_LABELS = {
  serves: "🎯 Neye hizmet ediyor?",
  tech:   "🛠️ Hangi teknolojiler, neden ve nasıl?",
  why:    "📈 Neden ilgi gördü / kime hitap ediyor?",
  evolve: "💡 Geliştirilse ne olur?"
};
const SECTION_ORDER = ["serves", "tech", "why", "evolve"];

// ---- Yardımcılar ----
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function projectMatches(p, q) {
  if (!q) return true;
  const hay = [
    p.name, p.language, notes[p.name] || "",
    ...SECTION_ORDER.map(k => p.sections && p.sections[k]),
    ...(p.glossary || []).flatMap(g => [g.term, g.def])
  ].join(" ").toLowerCase();
  return hay.includes(q);
}

// ---- Terim satırı (kart içi sözlük) ----
function renderTermRow(g, knownRow) {
  const k = termKey(g.term);
  const meta = GL_INDEX.get(k) || { count: 1 };
  let cls = "";
  let tag = "";
  if (!knownRow) {
    if (meta.count <= 1) { cls = "fresh"; tag = `<span class="term-tag">🆕 yeni</span>`; }
    else if (meta.count >= 3) { cls = "muted"; }
  }
  const btn = knownRow
    ? `<button class="term-check on" data-act="unknow" title="Tekrar göster">✓</button>`
    : `<button class="term-check" data-act="know" title="Biliyorum, gizle">✓</button>`;
  return `
    <div class="term ${cls}" data-term="${esc(k)}">
      ${btn}
      <div class="term-body"><b>${esc(g.term)}:</b> <span class="def">${esc(g.def)}</span>${tag}</div>
    </div>`;
}

// ---- Kart render ----
function renderCard(p, dateLabel) {
  const id = p.name;
  const on = bookmarks.has(id);
  const note = notes[id];

  const sections = SECTION_ORDER
    .filter(k => p.sections && p.sections[k])
    .map(k => `
      <div class="section">
        <h4>${SECTION_LABELS[k]}</h4>
        <div class="body">${p.sections[k]}</div>
      </div>`).join("");

  let glossary = "";
  if (p.glossary && p.glossary.length) {
    const visible = p.glossary.filter(g => !known.has(termKey(g.term)));
    const hiddenTerms = p.glossary.filter(g => known.has(termKey(g.term)));
    const rows = visible.map(g => renderTermRow(g, false)).join("");
    const hiddenBlock = hiddenTerms.length ? `
      <details class="hidden-known" data-gid="${esc(id)}#known" ${openGloss.has(id + "#known") ? "open" : ""}>
        <summary>🎓 ${hiddenTerms.length} terimi zaten biliyorsun, gizlendi <span class="chev">›</span></summary>
        <div class="glossary-list">${hiddenTerms.map(g => renderTermRow(g, true)).join("")}</div>
      </details>` : "";
    glossary = `
      <details class="glossary" data-gid="${esc(id)}" ${openGloss.has(id) ? "open" : ""}>
        <summary>📖 Terim Sözlüğü <span class="chev">›</span></summary>
        <div class="glossary-list">${rows || `<div class="hidden-note">Bu projedeki tüm terimleri biliyorsun. 👏</div>`}${hiddenBlock}</div>
      </details>`;
  }

  const noteBlock = note ? `
    <div class="note-block">
      <div class="note-label">📝 Notun</div>
      <div class="note-text">${esc(note)}</div>
    </div>` : "";

  const langBit = p.language ? `<span><span class="lang-dot"></span>${esc(p.language)}</span>` : "";
  const starBit = p.stars ? `<span class="stars">★ ${esc(p.stars)}</span>` : "";
  const dateBit = dateLabel ? `<span>${esc(dateLabel)}</span>` : "";

  return `
    <article class="card" data-id="${esc(id)}">
      <div class="card-head">
        <h3 class="card-title"><a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.name)}</a></h3>
        <div class="card-actions">
          <button class="note-btn ${note ? "has" : ""}" data-act="note" title="Not ekle/düzenle">📝</button>
          <button class="star-btn ${on ? "on" : ""}" data-act="star" title="Yer işaretine ekle/çıkar">${on ? "★" : "☆"}</button>
        </div>
      </div>
      <div class="card-meta">${langBit}${starBit}${dateBit}</div>
      ${sections}
      ${noteBlock}
      ${glossary}
    </article>`;
}

// ---- Sözlük ekranı ----
function renderGlossaryScreen(q) {
  let arr = [...GL_INDEX.values()];
  if (q) arr = arr.filter(e => (e.term + " " + e.def).toLowerCase().includes(q));

  const counts = {
    all: arr.length,
    new: arr.filter(e => e.count <= 1 && !known.has(e.key)).length,
    unknown: arr.filter(e => !known.has(e.key)).length,
    known: arr.filter(e => known.has(e.key)).length
  };

  let list = arr;
  if (glFilter === "new") list = arr.filter(e => e.count <= 1 && !known.has(e.key));
  else if (glFilter === "unknown") list = arr.filter(e => !known.has(e.key));
  else if (glFilter === "known") list = arr.filter(e => known.has(e.key));

  // sıralama: bilinmeyenler önce, sonra geçiş sayısı çok olanlar üste
  list.sort((a, b) => {
    const ak = known.has(a.key) ? 1 : 0, bk = known.has(b.key) ? 1 : 0;
    if (ak !== bk) return ak - bk;
    return b.count - a.count;
  });

  const chip = (id, label) =>
    `<button class="gl-chip ${glFilter === id ? "active" : ""}" data-gl="${id}">${label} <span style="opacity:.6">${counts[id]}</span></button>`;

  const filters = `
    <div class="gl-filters">
      ${chip("all", "Tümü")}
      ${chip("unknown", "Öğrenilmemiş")}
      ${chip("new", "🆕 Yeni")}
      ${chip("known", "✓ Bildiklerim")}
    </div>`;

  if (!list.length) {
    return filters + emptyState("📖", "Burada bir şey yok", "Başka bir filtre dene ya da kartlardaki terimleri biriktir.");
  }

  const rows = list.map(e => {
    const isKnown = known.has(e.key);
    const freq = e.count === 1 ? "1 kez geçti" : `${e.count} kez geçti`;
    const proj = e.projects.size === 1 ? "1 projede" : `${e.projects.size} projede`;
    return `
      <div class="gl-row ${isKnown ? "known" : ""}" data-term="${esc(e.key)}">
        <div class="gl-main">
          <div class="gl-term">${esc(e.term)}${e.count <= 1 && !isKnown ? ` <span class="term-tag">🆕 yeni</span>` : ""}</div>
          <div class="gl-def">${esc(e.def)}</div>
          <div class="gl-meta">${freq} · ${proj}</div>
        </div>
        <button class="gl-toggle ${isKnown ? "on" : ""}" data-act="gltoggle">
          ${isKnown ? "✓ Biliyorum" : "Biliyorum?"}
        </button>
      </div>`;
  }).join("");

  return filters + rows;
}

// ---- Sayfa render ----
function render() {
  const app = document.getElementById("app");
  const q = query.trim().toLowerCase();

  if (activeTab === "glossary") {
    app.innerHTML = renderGlossaryScreen(q);
  } else if (activeTab === "bookmarks") {
    const items = [];
    FEED.forEach(day => (day.projects || []).forEach(p => {
      if (bookmarks.has(p.name) && projectMatches(p, q)) items.push([p, day.date]);
    }));
    app.innerHTML = items.length
      ? `<div class="day-group">${items.map(([p, d]) => renderCard(p, d)).join("")}</div>`
      : emptyState("⭐", "Henüz yer işareti yok", "Bir projenin köşesindeki ☆ butonuna basarak buraya kaydet.");
  } else {
    let html = "";
    FEED.forEach(day => {
      const projects = (day.projects || []).filter(p => projectMatches(p, q));
      if (!projects.length) return;
      const banner = day.sample
        ? `<div class="sample-banner">ℹ️ Bu örnek veri — arayüzü görebilesin diye eklendi. İlk otomatik çalışmada gerçek günlük projelerle dolacak.</div>`
        : "";
      html += `
        <section class="day-group">
          <h2 class="day-head">${esc(day.date || "")}</h2>
          ${banner}
          ${projects.map(p => renderCard(p, "")).join("")}
        </section>`;
    });
    app.innerHTML = html || emptyState("🔍", "Sonuç yok", "Arama terimini değiştirmeyi dene.");
  }

  document.getElementById("bm-count").textContent = bookmarks.size;
  document.getElementById("gl-count").textContent = GL_INDEX.size;

  // açılır sözlüklerin açık/kapalı durumunu hatırla
  document.querySelectorAll("[data-gid]").forEach(d => {
    d.addEventListener("toggle", () => {
      const gid = d.dataset.gid;
      if (d.open) openGloss.add(gid); else openGloss.delete(gid);
    });
  });
}

function emptyState(icon, title, sub) {
  return `<div class="empty"><div class="big">${icon}</div><strong>${esc(title)}</strong><p>${esc(sub)}</p></div>`;
}

// ---- Not paneli (drawer) ----
let drawerId = null;
const drawer = document.getElementById("drawer");
const backdrop = document.getElementById("drawer-backdrop");

function openDrawer(id) {
  drawerId = id;
  document.getElementById("drawer-title").textContent = "📝 Not";
  document.getElementById("drawer-sub").textContent = id;
  const ta = document.getElementById("drawer-text");
  ta.value = notes[id] || "";
  drawer.classList.add("open");
  backdrop.classList.add("open");
  setTimeout(() => ta.focus(), 180);
}
function closeDrawer() {
  drawer.classList.remove("open");
  backdrop.classList.remove("open");
  drawerId = null;
}
function saveDrawer() {
  if (drawerId == null) return;
  const val = document.getElementById("drawer-text").value.trim();
  if (val) notes[drawerId] = val; else delete notes[drawerId];
  saveNotes();
  closeDrawer();
  render();
}
function deleteDrawerNote() {
  if (drawerId == null) return;
  delete notes[drawerId];
  saveNotes();
  closeDrawer();
  render();
}

document.getElementById("drawer-save").addEventListener("click", saveDrawer);
document.getElementById("drawer-cancel").addEventListener("click", closeDrawer);
document.getElementById("drawer-close").addEventListener("click", closeDrawer);
document.getElementById("drawer-delete").addEventListener("click", deleteDrawerNote);
backdrop.addEventListener("click", closeDrawer);
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && drawerId != null) closeDrawer();
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter" && drawerId != null) saveDrawer();
});

// ---- Tıklama olayları ----
document.getElementById("app").addEventListener("click", e => {
  const btn = e.target.closest("[data-act]");
  if (btn) {
    const act = btn.dataset.act;

    if (act === "know") {
      const k = btn.closest(".term").dataset.term;
      known.add(k); saveKnown(); render(); return;
    }
    if (act === "unknow") {
      const k = btn.closest(".term").dataset.term;
      known.delete(k); saveKnown(); render(); return;
    }
    if (act === "gltoggle") {
      const k = btn.closest(".gl-row").dataset.term;
      if (known.has(k)) known.delete(k); else known.add(k);
      saveKnown(); render(); return;
    }

    const card = btn.closest(".card");
    if (!card) return;
    const id = card.dataset.id;
    if (act === "note") {
      openDrawer(id);
    } else if (act === "star") {
      if (bookmarks.has(id)) {
        bookmarks.delete(id); saveBookmarks(); render();
      } else {
        bookmarks.add(id); saveBookmarks(); render(); openDrawer(id);
      }
    }
    return;
  }

  // sözlük filtre çipleri
  const chip = e.target.closest(".gl-chip");
  if (chip) { glFilter = chip.dataset.gl; render(); }
});

// ---- Sekme & arama ----
document.querySelectorAll(".tab").forEach(t => {
  t.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(x => x.classList.remove("active"));
    t.classList.add("active");
    activeTab = t.dataset.tab;
    render();
  });
});

document.getElementById("search").addEventListener("input", e => {
  query = e.target.value;
  render();
});

render();
