# Günlük Trending Analizi — Pipeline Talimatı

> Bu dosya, günlük analizi üreten Claude Routine'in uyguladığı talimatın kaynağıdır.
> Routine'in bulut prompt'u kısaca "repo'daki pipeline/PROMPT.md'yi oku ve uygula" der.
> Değişiklikler burada, git üzerinde versiyonlanır.

## Görev

GitHub Trending'i incele ve kullanıcının ilgi alanlarına uyan **3-5 projeyi** seçip her birini
derinlemesine, Türkçe analiz et.

**İlgi alanları:** AI/API ve agent araçları, geliştirici araçları (dev tools), veritabanı,
üretkenlik. PL/SQL / ERP / IFS dünyasıyla kesişen projeler çıkarsa öncelik ver.

**Seçim kriterleri:**
- Bugün gerçekten trend olan (yıldız ivmesi yüksek) projeler
- Daha önceki günlerde analiz edilmiş bir proje tekrar seçilmez (data/days/ içine bak)
- Çeşitlilik: mümkünse hepsi aynı kategoriden olmasın

## Her proje için analiz bölümleri

Her bölüm **markdown** yazılır (HTML YOK). Kalın vurgu için `**`, listeler için `-` kullan.

1. `serves` — 🎯 Neye hizmet ediyor? Projenin çözdüğü problem, net ve jargonsuz giriş.
2. `tech` — 🛠️ Hangi teknolojiler, neden ve nasıl? Mimari kararlar ve gerekçeleri.
3. `why` — 📈 Neden ilgi gördü / kime hitap ediyor? Zamanlama, kitle, yıldız ivmesinin sebebi.
4. `evolve` — 💡 Geliştirilse ne olur? Eksikler, fırsatlar, olası yönler.

**Sözlük (`glossary`):** Analiz metinlerinde geçen TÜM teknik jargon terimleri, sade Türkçe
tanımlarıyla listele. Tanım 1-2 cümle, teknik bilgisi orta seviye birinin anlayacağı dilde.

## Çıktı formatı

`data/days/YYYY-MM-DD.json` dosyası oluştur (bugünün tarihi, UTC+3):

```json
{
  "date": "2026-07-09",
  "projects": [
    {
      "name": "owner/repo",
      "url": "https://github.com/owner/repo",
      "stars": "12.4k",
      "language": "Rust",
      "sections": {
        "serves": "markdown metin...",
        "tech": "markdown metin...",
        "why": "markdown metin...",
        "evolve": "markdown metin..."
      },
      "glossary": [
        { "term": "WebAssembly", "def": "Tarayıcıda çalışan..." }
      ]
    }
  ]
}
```

**Kurallar:**
- `date` alanı mutlaka `YYYY-MM-DD` formatında
- `url` mutlaka `https://` ile başlar
- `sections.serves` boş olamaz
- Her sözlük girdisinde `term` ve `def` dolu olmalı
- Geçerli JSON üret (kaçış karakterlerine dikkat)

## Haftalık sentez (SADECE PAZAR günleri, günlük analize EK olarak)

Bugün pazar ise, günlük analizin yanında bir de **haftalık sentez** üret:
geçen 7 günün analizlerini (`data/days/` içindeki son 7 dosya) oku ve şunları yaz:

- **Haftanın temaları**: bu hafta trend olan projelerde tekrarlayan örüntüler (2-4 tema)
- **Yükselenler**: hangi teknoloji/yaklaşım ivme kazanıyor, neden
- **Haftanın terimleri**: bu hafta ilk kez görülen en önemli 3-5 jargon (kısa tanımla)
- **Haftanın projesi**: içlerinden en dikkat çekeni ve tek paragraf gerekçe

Ton: bülten gibi — samimi, akıcı, okuyana "bu haftayı kaçırmamışım" hissi veren. 400-700 kelime.

Çıktı: `data/weeks/YYYY-MM-DD.json` (haftanın PAZARTESİ tarihi, yani 6 gün öncesi):

```json
{
  "week_start": "2026-07-06",
  "lang": "tr",
  "content_md": "## Haftanın temaları\n..."
}
```

## Teslim

1. JSON dosyasını `data/days/` altına yaz (pazar günleri `data/weeks/` dosyası da eklenir)
2. Commit mesajı: `Günlük trending: <D Ay>` (örn. `Günlük trending: 9 Temmuz`)
3. `main` branch'ine push'la
4. Push sonrası GitHub Action (`sync-feed.yml`) veriyi otomatik olarak Supabase'e aktarır —
   senin ek bir şey yapman gerekmez. Action'ın başarısız olduğunu fark edersen commit'i
   düzeltip yeniden push'la.

## Geriye dönük not

Eski format (`data/feed.js`, HTML içerikli) artık kullanılmıyor; dosya tarihi arşiv olarak
repo'da durur. Yeni günler yalnızca `data/days/*.json` olarak eklenir.
