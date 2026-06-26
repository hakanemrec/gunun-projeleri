// Bu dosyayı günlük zamanlanmış görev günceller. En yeni gün en üstte.
// Format: window.__FEED__ = [ { date, sample?, projects: [ { name, url, stars, language, sections:{serves,tech,why,evolve}, glossary:[{term,def}] } ] } ]
window.__FEED__ = [
  {
    date: "22 Haziran 2026",
    projects: [
      {
        name: "chopratejas/headroom",
        url: "https://github.com/chopratejas/headroom",
        stars: "45k",
        language: "Python",
        sections: {
          serves: "<p>AI agent'ları (Claude Code, Cursor, Codex, LangChain) çalıştırırken en büyük gizli maliyet kalemi: araç çıktıları, log'lar ve RAG sonuçlarının ham haliyle <b>LLM</b>'e gönderilmesi. Headroom, bu içeriği LLM'e ulaşmadan önce yakalayıp sıkıştıran bir ara katman (middleware) sunuyor — aynı cevap kalitesini koruyarak <b>%60-95 daha az token</b> harcatıyor.</p>",
          tech: "<p>Çok dilli bir mimari: <b>Python (%78.8)</b> proxy/CLI/kütüphane katmanı için, <b>Rust (%16.7)</b> performans-kritik sıkıştırma işlemleri için, <b>TypeScript (%2.4)</b> Node uyumluluğu için. Pipeline şöyle işliyor: ContentRouter içerik tipini tanır → SmartCrusher JSON yapılarını sıkıştırır → CodeCompressor kod için <b>AST</b> analizi yapar → Kompress-base (agentic <b>trace</b>'lerle eğitilmiş özel bir HuggingFace modeli) doğal dil/log metnini sıkıştırır → CacheAligner prefix'leri sabitleyip sağlayıcının <b>KV cache</b>'ini isabet ettirir. Sıkıştırma <b>reversible (geri döndürülebilir)</b>: orijinaller lokalde saklanıyor, model isterse <code>headroom_retrieve</code> ile tam içeriği geri çekebiliyor.</p>",
          why: "<p>LLM'ler token başına ücretlendiriliyor; agent'lar büyüdükçe maliyet patlıyor. Headroom kod değişikliği gerektirmeden (<code>headroom proxy --port 8787</code>) devreye giriyor, bu da benimsemeyi kolaylaştırıyor. Kod aramada 17.765 token'dan 1.408 token'a (%92 tasarruf) gibi somut benchmark'lar ve veri lokalde kalması (gizlilik) ilgiyi açıklıyor — hype değil, doğrudan maliyet kalemine dokunan bir araç.</p>",
          evolve: "<p>IFS Marble/PL-SQL hata ayıklamasında ürettiğin uzun log çıktılarını veya trace dosyalarını bir AI asistanına vermeden önce bu proxy'den geçirip token maliyetini düşürebilirsin. Daha ilginç senaryo: <code>headroom learn</code> komutu başarısız oturumlardan ders çıkarıp CLAUDE.md/AGENTS.md dosyasına düzeltme yazıyor — kendi ERP geliştirme akışın için otomatik 'öğrenen' bir kural seti oluşturabilirsin.</p>"
        },
        glossary: [
          { term: "LLM (Large Language Model)", def: "Metin üretebilen, büyük miktarda veriyle eğitilmiş yapay zeka modeli. ChatGPT, Claude gibi sistemlerin temelidir." },
          { term: "Token", def: "Bir dil modelinin metni işlerken kullandığı en küçük birim. Modelin maliyeti ve bağlam sınırı token sayısıyla ölçülür." },
          { term: "Middleware (ara katman)", def: "İki sistem arasında veriyi işleyip ileten yazılım katmanı. Burada agent ile LLM arasına girip içeriği sıkıştırıyor." },
          { term: "Proxy", def: "İstekleri bir uçtan diğerine ileten, arada işlem yapabilen ara sunucu. Kod değişikliği gerektirmeden devreye sokulabilir." },
          { term: "AST (Abstract Syntax Tree)", def: "Kodun yapısını ağaç şeklinde temsil eden veri yapısı. Kodu satır satır değil, anlamsal olarak analiz etmeyi sağlar." },
          { term: "KV cache", def: "LLM sağlayıcılarının tekrar eden prompt başlangıçlarını yeniden hesaplamadan önbellekten okumasını sağlayan mekanizma. Hız ve maliyet kazandırır." },
          { term: "RAG (Retrieval-Augmented Generation)", def: "LLM'in cevap üretirken harici bir bilgi kaynağından ilgili parçaları çekip bağlama eklediği teknik." },
          { term: "Rust", def: "C kadar hızlı ama hafıza güvenliğini derleme zamanında garantileyen sistem programlama dili." },
          { term: "HuggingFace modeli", def: "HuggingFace platformunda paylaşılan, önceden eğitilmiş yapay zeka modeli. Burada metin sıkıştırma için özel eğitilmiş bir model kullanılıyor." },
          { term: "Reversible compression (geri döndürülebilir sıkıştırma)", def: "Sıkıştırılan verinin orijinalinin saklanıp gerektiğinde tam haliyle geri getirilebildiği sıkıştırma yöntemi." },
          { term: "MCP server", def: "AI asistanlarının dış araçlara standart bir protokolle bağlanmasını sağlayan sunucu bileşeni." }
        ]
      },
      {
        name: "firecrawl/firecrawl",
        url: "https://github.com/firecrawl/firecrawl",
        stars: "136k",
        language: "TypeScript",
        sections: {
          serves: "<p>Web sitelerinden temiz, kullanılabilir veri çekmeyi tek bir <b>API</b> arkasında topluyor. JavaScript ile render edilen sayfalar, dönen <b>proxy</b>'ler, <b>rate limiting</b> gibi klasik web scraping dertlerini Firecrawl arkada hallediyor; sen sadece URL veya arama sorgusu veriyorsun, o sana temiz <b>markdown</b>/<b>JSON</b> döndürüyor.</p>",
          tech: "<p>Kod tabanının %67.7'si <b>TypeScript</b> (API/SDK çekirdeği), %15.7'si <b>Python</b> (SDK ve araçlar), %4.8'i <b>Rust</b> (hız-kritik scraping işlemleri) — çoklu dil SDK desteğiyle (Java, PHP, C# dahil) geniş ekosistem erişimi hedeflenmiş. Search, Scrape, Interact, Agent, Crawl, Map ve Batch Scrape adlı ayrı uç noktaları var. Büyük işler (crawl gibi) <b>job</b> tabanlı asenkron çalışıyor: istek atıyorsun, bir <b>job ID</b> alıyorsun, durumu sorguluyorsun. Interact uç noktası sayfada tıklama/scroll/yazma gibi etkileşimler yapıp sonra içerik çekebiliyor. P95 gecikme 3.4 saniye, web'in %96'sını kapsadığı belirtiliyor.</p>",
          why: "<p>Klasik scraping kütüphaneleri JS-ağırlıklı modern sitelerde, anti-bot korumalarında ve tutarsız çıktı formatlarında zorlanır. Firecrawl çıktıyı doğrudan LLM'e verilecek şekilde (<em>'spend fewer tokens, build better AI apps'</em>) optimize ediyor ve <b>MCP</b> desteğiyle AI agent'lara native bağlanıyor — bu da onu RAG/agent pipeline'larının standart bileşenlerinden biri haline getirmiş. Açık kaynak (AGPL-3.0) + bulut hosting kombinasyonu da benimsemeyi hızlandırmış.</p>",
          evolve: "<p>Tedarikçi fiyat listeleri, rakip ürün sayfaları veya resmi kur/mevzuat siteleri gibi dış kaynakları düzenli olarak çekip IFS'e veya bir ara veritabanına aktaran bir entegrasyon kurulabilir. Crawl uç noktasıyla bir siteyi toptan tarayıp, sonucu PL/SQL tarafında işlenecek yapılandırılmış JSON'a çevirmek gerçekçi bir otomasyon projesi olur — MCP entegrasyonu sayesinde bunu doğrudan bir AI asistanına da bağlayabilirsin.</p>"
        },
        glossary: [
          { term: "API (Application Programming Interface)", def: "Farklı yazılımların birbiriyle konuşmasını sağlayan, tanımlı istek/cevap kuralları kümesi." },
          { term: "Proxy (dönen proxy)", def: "İsteklerin farklı IP adresleri üzerinden gönderilmesini sağlayan ara sunucu; engellenmeyi ve hız sınırlarını aşmaya yardımcı olur." },
          { term: "Rate limiting (hız sınırlama)", def: "Bir sunucunun belirli sürede kabul ettiği istek sayısını sınırlaması. Aşırı istek gönderen istemciler engellenir." },
          { term: "Markdown", def: "Başlık, liste, kalın yazı gibi basit işaretlerle biçimlendirilen, hem insan hem makine tarafından kolay okunan metin formatı." },
          { term: "JSON", def: "Verinin anahtar-değer çiftleri ve listeler şeklinde yapılandırılmış, programların kolayca okuyup yazabildiği metin formatı." },
          { term: "Job / asenkron işlem", def: "Uzun sürecek bir işin arka planda başlatılıp bir kimlikle takip edilmesi; sonucu hazır olduğunda sorgulanır." },
          { term: "MCP (Model Context Protocol)", def: "AI asistanlarının dış araçlara standart bir protokolle bağlanmasını sağlayan açık protokol." },
          { term: "SDK (Software Development Kit)", def: "Bir servisi belirli bir programlama dilinden kullanmayı kolaylaştıran hazır kütüphane ve araç seti." },
          { term: "AGPL-3.0", def: "Açık kaynak yazılım lisansı; yazılımı değiştirip ağ üzerinden sunan herkesi kaynak kodu da paylaşmaya zorlar." },
          { term: "Docker", def: "Bir uygulamayı bağımlılıklarıyla birlikte paketleyip her ortamda aynı şekilde çalıştırmayı sağlayan konteyner teknolojisi." },
          { term: "n8n / Zapier", def: "Kod yazmadan farklı servisleri birbirine bağlayıp otomasyon akışları kurmaya yarayan no-code araçlar." }
        ]
      },
      {
        name: "modem-dev/hunk",
        url: "https://github.com/modem-dev/hunk",
        stars: "5.3k",
        language: "TypeScript",
        sections: {
          serves: "<p>AI coding agent'larının (Claude, Copilot vb.) ürettiği çok-dosyalı değişiklikleri incelemek için <code>git diff</code>, <code>delta</code>, <code>difftastic</code> gibi klasik araçlar yetersiz kalıyor — onlar insan tarafından satır satır yazılan değişiklikler için tasarlanmış. Hunk, agent çıktılarını hızlıca tarayıp not almak ve iterasyon yapmak için 'review-first' (önce inceleme) felsefesiyle tasarlanmış bir terminal diff arayüzü sunuyor.</p>",
          tech: "<p><b>TypeScript (%96.6)</b> ile yazılmış, çalışma zamanı olarak Node yerine daha hızlı olan <b>Bun</b> kullanılmış (<code>bunfig.toml</code>, <code>bun.lock</code> dosyalarından anlaşılıyor). Render motoru olarak <b>OpenTUI</b> (terminal arayüz çatısı) ve diff mantığı için <b>Pierre</b> kütüphanesi kullanılmış; <code>HunkDiffView</code> bileşeni başka terminal uygulamalarına da gömülebiliyor. Split, stack ve responsive olmak üzere üç görünüm modu var; <b>watch mode</b> ile dosyalar değiştikçe canlı güncelleniyor. Git'in yanı sıra <b>Jujutsu</b> ve <b>Sapling</b> gibi modern <b>VCS</b>'leri otomatik tanıyor.</p>",
          why: "<p>Agentic coding'in patlamasıyla geliştiriciler artık tek bir commit değil, bir agent'ın tek seferde değiştirdiği onlarca dosyayı hızlıca değerlendirmek zorunda. Hunk'ın öne çıkan farkı: agent'ların kod yanına satır-içi not/açıklama ekleyebildiği (<code>inline AI annotations</code>) ve <code>hunk skill path</code> ile agent'ların aktif review oturumuna katılabildiği çift yönlü bir iş akışı sunması — rakiplerinde bu yok. Modem (bir AI coding şirketi) tarafından sponsorlu olması da agentic geliştirme ekosistemine ne kadar gömülü olduğunu gösteriyor.</p>",
          evolve: "<p>Claude Code ile IFS Marble veya PL/SQL paketlerinde çok-dosyalı bir refactor yaptırdığında, sonucu <code>git diff</code> yerine Hunk'tan geçirip değişiklikleri dosya dosya, satır-içi notlarla inceleyebilirsin — özellikle çoklu paket/trigger değişen senaryolarda klasik diff araçlarından daha hızlı bir gözden geçirme deneyimi sunar. <code>HunkDiffView</code> bileşenini kendi dahili geliştirici aracına gömüp ERP değişiklik onay sürecine entegre etmek de mümkün.</p>"
        },
        glossary: [
          { term: "Terminal UI (TUI)", def: "Grafik arayüz değil, komut satırı/terminal içinde çalışan ama yine de pencere, menü, renk gibi görsel öğeler sunan arayüz türü." },
          { term: "Bun", def: "Node.js'e alternatif, daha hızlı başlatma ve çalışma süresine sahip JavaScript/TypeScript çalışma zamanı." },
          { term: "Diff (fark görüntüleme)", def: "İki dosya veya iki sürüm arasındaki satır bazlı farkları gösteren işlem/araç." },
          { term: "VCS (Version Control System)", def: "Kod değişikliklerini zaman içinde takip eden sistem. Git en yaygın örneğidir; Jujutsu ve Sapling daha yeni alternatiflerdir." },
          { term: "Watch mode (izleme modu)", def: "Dosyalardaki değişiklikleri sürekli izleyip arayüzü otomatik güncelleyen çalışma modu." },
          { term: "Skill file", def: "Bir AI agent'ına belirli bir görevi veya aracı nasıl kullanacağını öğreten, yapılandırılmış talimat dosyası." },
          { term: "stdin (standart girdi)", def: "Bir programa terminal üzerinden veri aktarmanın standart yolu; burada diff/patch verisi bu şekilde Hunk'a aktarılabiliyor." }
        ]
      }
    ]
  },
  {
    date: "20 Haziran 2026",
    projects: [
      {
        name: "tursodatabase/turso",
        url: "https://github.com/tursodatabase/turso",
        stars: "20.2k",
        language: "Rust",
        sections: {
          serves: "<p>SQLite'ın C ile yazılmış çekirdeğini tamamen Rust'ta yeniden yazan gömülü bir SQL veritabanı projesi. Mevcut <code>.db</code> dosyalarıyla tam uyumlu — kurulu SQLite veritabanlarını dönüştürmeden kullanabilirsin. Tek sunucu kurmadan, direkt uygulama içinde çalışan <b>embedded database</b> mantığını modern async I/O ve hafıza güvenliğine taşıyor.</p>",
          tech: "<p>Projenin %86'sı <b>Rust</b> ile yazılmış; C'nin hafıza güvenliği eksikliklerini ortadan kaldırmak ve <b>async/await</b> paradigmasını veritabanı çekirdeğine getirmek için bu dil tercih edilmiş. En kritik yenilik: <b>MVCC (Multi-Version Concurrency Control)</b> ile birden fazla <b>writer</b>'ın aynı anda çalışabilmesi — SQLite'ın tek-yazıcı kısıtını kıran bu mimari karar büyük ölçekli uygulamalarda oyun değiştiriyor. Linux'ta <b>io_uring</b> desteğiyle native async I/O, <b>WASM</b> hedefi sayesinde tarayıcıda çalışabilme, Tantivy ile <b>full-text search</b>, <b>DBSP</b> ile incremental hesaplama, vektör arama ve <b>CDC</b> desteği — bunların hepsi SQLite dosya formatını koruyarak geliyor. Dahası: yerleşik <b>MCP server</b> sayesinde AI asistanları doğrudan veritabanına bağlanabiliyor.</p>",
          why: "<p>SQLite dünyanın en yaygın veritabanı ama çekirdeği C'nin eski paradigmasıyla yazılmış: eşzamanlı yazma sorunu, async desteği yokluğu, memory safety endişeleri. Turso <em>aynı SQLite uyumluluğu, modern Rust altyapısı</em> formülüyle geliyor — bu kombinasyon edge computing, serverless ve tarayıcı tabanlı uygulamalar için gerçek bir ihtiyacı karşılıyor. Hâlâ beta ama Kin AI ve Spice.ai gibi prodüksiyon uygulamalar zaten kullanıyor. Hype değil, somut mimari açıkları kapatan bir proje.</p>",
          evolve: "<p>IFS'ten çektiğin raporları lokal bir Turso örneğine atıp MVCC sayesinde çakışma yaşamadan eş zamanlı okuma-yazma yapabilirsin — PL/SQL yerine standart SQL. Daha ilginç senaryo: yerleşik MCP server özelliğini kullanarak Claude gibi bir AI asistanını doğrudan bu veritabanına bağlamak. Kendi ERP verilerini sorgulayan, offline çalışan bir <b>akıllı veri katmanı</b> — lokal Ollama ile birleşince veri dışarı çıkmadan tam döngü tamamlanır.</p>"
        },
        glossary: [
          { term: "SQLite", def: "Sunucu gerektirmeyen, tek dosyada çalışan, dünyanın en yaygın gömülü veritabanı. Telefonlardan tarayıcılara kadar her yerde var." },
          { term: "Rust", def: "Mozilla kökenli, C kadar hızlı ama hafıza güvenliğini derleme zamanında garantileyen sistem programlama dili." },
          { term: "Embedded database (gömülü veritabanı)", def: "Ayrı bir sunucu süreci olmadan, doğrudan uygulama içinde çalışan veritabanı. Kurulum ve ağ bağlantısı gerektirmez." },
          { term: "Async/await", def: "Disk veya ağ işlemini başlatıp sonucu beklemeden diğer işlere devam etmeyi sağlayan programlama paterni. Uygulamanın donmasını önler." },
          { term: "MVCC (Multi-Version Concurrency Control)", def: "Birden fazla işlemin aynı anda okuma/yazma yapabilmesi için her işleme verinin ayrı bir versiyonunu gösteren eşzamanlılık tekniği." },
          { term: "Writer (yazıcı)", def: "Veritabanına yazma işlemi yapan bağlantı veya süreç. SQLite geleneksel olarak tek seferde yalnızca bir writer'a izin verir." },
          { term: "io_uring", def: "Linux çekirdeğinin modern, yüksek performanslı async I/O arayüzü. Sistem çağrısı maliyetini minimuma indirerek disk/ağ işlemlerini hızlandırır." },
          { term: "WASM (WebAssembly)", def: "Tarayıcıda native hıza yakın kod çalıştırmayı sağlayan ikili format. C/Rust gibi dillerden derlenen kodu web uygulamalarında kullanmaya olanak tanır." },
          { term: "Full-text search", def: "Metni kelime kelime indeksleyip hızlıca arama yapma özelliği. SQL'deki LIKE aramasından çok daha hızlı ve anlam duyarlı." },
          { term: "CDC (Change Data Capture)", def: "Veritabanındaki değişiklikleri (insert/update/delete) gerçek zamanlı yakalayıp yayınlama tekniği. Event-driven sistemlerde kullanılır." },
          { term: "MCP server", def: "AI asistanlarının dış araçlara (veritabanı, dosya sistemi, API) standart protokolle bağlanmasını sağlayan sunucu bileşeni. Model Context Protocol'ü implement eder." },
          { term: "Edge computing", def: "Veriyi merkezi sunuculara göndermek yerine kullanıcıya yakın konumlarda işleme yaklaşımı. Düşük gecikme ve gizlilik avantajı sağlar." },
          { term: "Serverless", def: "Sunucu yönetmek zorunda kalmadan kod çalıştırma modeli. Altyapı otomatik ölçeklenir, yalnızca kullanım kadar ödeme yapılır." },
          { term: "DBSP (incremental hesaplama)", def: "Tüm hesaplamayı yeniden yapmak yerine yalnızca değişen kısımları güncelleyen teknik. Büyük veri setlerinde ciddi hız kazancı sağlar." },
          { term: "Memory safety (hafıza güvenliği)", def: "Programın geçersiz bellek bölgelerine erişmemesini garantileyen özellik. C'de yaygın olan buffer overflow gibi güvenlik açıklarını Rust derleme zamanında engeller." }
        ]
      },
      {
        name: "DeusData/codebase-memory-mcp",
        url: "https://github.com/DeusData/codebase-memory-mcp",
        stars: "9.1k",
        language: "C",
        sections: {
          serves: "<p>Büyük kod tabanlarında çalışan AI kodlama asistanlarının (Claude, Gemini CLI, Aider gibi) en büyük sorunu: her soruda dosya dosya tarayıp muazzam <b>token</b> harcamak. Bu proje, tüm kod tabanını kalıcı bir <b>knowledge graph</b>'a dönüştüren yüksek performanslı bir <b>MCP server</b> sunuyor. Asistan 'bu fonksiyon nereden çağrılıyor?' diye sorduğunda dosyaları tek tek okumak yerine grafı milisaniyeler içinde sorgulayabiliyor — %99.2 token tasarrufu sağlandığı belirtiliyor.</p>",
          tech: "<p>Çekirdek <b>C</b> ile yazılmış: tek <b>binary</b>, sıfır bağımlılık, maksimum hız. 158 programlama dilini anlamak için <b>tree-sitter</b> gramer kütüphanelerini binary'ye gömüyor. İçeride <b>SQLite</b> tabanlı bir graph store var: fonksiyon, sınıf, HTTP rotası, dosya gibi <b>node</b>'lar; <code>CALLS</code>, <code>IMPORTS</code>, <code>DATA_FLOWS</code>, <code>EMITS</code> gibi typed <b>edge</b>'ler. Grafu sorgulamak için <b>Cypher</b> benzeri bir dil kullanıyorsun. Python, TypeScript, Go, C#, Java, Rust için hafif bir <b>LSP</b> katmanı implement etmiş — tam dil sunucusu olmadan tip çözümleme ve kalıtım takibi yapılabiliyor. <b>MinHash + LSH</b> algoritmaları ile kod klonlarını tespit eden <code>SIMILAR_TO</code> edge'leri de eklenmiş. 28 milyon satır, 75 bin dosyadan oluşan Linux çekirdeğini 3 dakikada indeksleyip sorguları &lt;1ms'de yanıtlıyor.</p>",
          why: "<p>AI coding agent patlamasının getirdiği somut bir acıyı çözüyor: her yeni sohbet oturumunda asistanın kodu yeniden öğrenmek zorunda kalması. Grafı diske kaydedip takımla paylaştığında yeniden indeksleme olmadan devam edilebiliyor. Yayınlanan bir <b>preprint</b> %83 cevap kalitesi, 10× daha az token, 2.1× daha az araç çağrısı iddiasıyla geliyor. 9k yıldız, henüz genç bir proje için güçlü bir ilgi sinyali.</p>",
          evolve: "<p>Şu an 10 dil destekleniyor. PL/SQL veya IFS Marble için bir <b>tree-sitter</b> grameri yazılıp bu motora takılabilir — o zaman tüm ERP kod tabanının mimarisini AI'a tek sorguda özetleyebilirsin. Daha pratik senaryo: mevcut desteklenen dillerdeki bir projeye kurarak Claude'un 'hangi modül hangisini çağırıyor?' veya 'bu değişikliğin <b>blast radius</b>'u nedir?' sorularını saniyeler içinde yanıtlamasını sağlamak.</p>"
        },
        glossary: [
          { term: "Token", def: "Bir dil modelinin metni işlerken kullandığı en küçük birim (yaklaşık bir kelime parçası). Modelin maliyeti ve bağlam sınırı token sayısıyla ölçülür." },
          { term: "Knowledge graph (bilgi çizgesi)", def: "Nesneler (fonksiyon, sınıf, dosya) ve aralarındaki ilişkileri (çağırır, içe aktarır) düğüm-kenar yapısıyla saklayan veri yapısı." },
          { term: "MCP server", def: "AI asistanlarının dış araçlara standart protokolle bağlanmasını sağlayan sunucu bileşeni. Claude, Gemini CLI gibi araçlar bu protokolü destekliyor." },
          { term: "Binary", def: "Derlenmiş, çalıştırılmaya hazır tek bir yürütülebilir dosya. Bağımlılık gerektirmez, kopyalayıp çalıştırırsın." },
          { term: "tree-sitter", def: "Çok sayıda programlama dilini hızlı ve hatasız parse edebilen syntax analiz kütüphanesi. VS Code ve Neovim dahil pek çok editörde kullanılır." },
          { term: "Node (düğüm)", def: "Grafdaki bir varlık; burada bir fonksiyon, sınıf, dosya veya HTTP rotası olabilir." },
          { term: "Edge (kenar)", def: "Grafta iki düğüm arasındaki ilişki. 'Bu fonksiyon şunu çağırıyor' bilgisi bir edge olarak temsil edilir." },
          { term: "Cypher", def: "Graph veritabanlarını sorgulamak için kullanılan SQL benzeri bir dil. Neo4j ile popülerleşmiştir; ilişki örüntülerini okumayı kolaylaştırır." },
          { term: "LSP (Language Server Protocol)", def: "IDE'lerin otomatik tamamlama, tip bilgisi gibi özellikler için dil sunucularıyla konuştuğu standart protokol." },
          { term: "Tip çözümleme (type resolution)", def: "Bir değişkenin hangi sınıf veya tipte olduğunu statik analiz yoluyla belirleme. IDE'lerin 'tanıma git' özelliğinin temelidir." },
          { term: "MinHash + LSH", def: "Büyük veri setlerinde benzer belgeleri veya kod bloklarını hızlıca bulmak için kullanılan olasılıksal algoritmalar. Tam karşılaştırma yerine yaklaşık benzerlik hesaplar." },
          { term: "Blast radius (etki alanı)", def: "Bir kod değişikliğinin doğrudan veya dolaylı olarak etkileyebileceği bileşenlerin kapsamı." },
          { term: "Preprint", def: "Henüz hakemli dergi incelemesinden geçmemiş, erken aşamada yayınlanan akademik makale. Sonuçları ön bilgi niteliği taşır." }
        ]
      },
      {
        name: "google-research/timesfm",
        url: "https://github.com/google-research/timesfm",
        stars: "24.4k",
        language: "Python",
        sections: {
          serves: "<p>Zaman serisi tahminini (time series forecasting) sıfırdan model eğitmek zorunda kalmadan yapabileceğin bir <b>foundation model</b> sunuyor. Satış tahmini, enerji tüketimi, trafik akışı, stok yönetimi gibi geçmişe dayalı her türlü veri için gelecekteki değerleri öngörebiliyorsun. Her veri seti için ayrı model geliştirmek yerine Google Research'ün milyarlarca gerçek <b>zaman serisi</b> ile önceden eğittiği bu modeli doğrudan kullanabilirsin — hatta BigQuery ML ile SQL yazarak.</p>",
          tech: "<p>Mimari olarak <b>decoder-only Transformer</b> kullanılmış — GPT'nin metin için yaptığını bu model zaman serileri için yapıyor: önceki zaman adımlarını görerek sonraki adımları tahmin ediyor. En son sürüm (2.5) 500M'dan 200M <b>parametreye</b> indirgendi, <b>context uzunluğu</b> ise 2048'den 16.000 adıma çıktı; hem daha hızlı hem çok daha uzak geçmişi görebiliyor. <b>PyTorch</b> ve <b>Flax/JAX</b> backend desteği var. <b>BigQuery ML</b> entegrasyonu dikkat çekici: standart SQL'in <code>ML.FORECAST</code> fonksiyonuyla çağırabiliyorsun. <b>LoRA</b> ile <b>fine-tuning</b> yaparak modeli kendi verine özelleştirebiliyorsun. Nokta tahmin yerine <b>quantile forecasting</b> (1000 adıma kadar) sunduğundan güven aralığı üretebiliyorsun — hangi aralıkta olacak sorusunu cevaplayabiliyor.</p>",
          why: "<p>İstatistiksel modeller (<b>ARIMA</b>, exponential smoothing) hızlı ama her veri seti için ayrı ayar gerektirir ve karmaşık örüntüleri kaçırır. Derin öğrenme modelleri güçlü ama eğitmek büyük veri ve zaman ister. TimesFM 'zaten eğitilmiş, ver ve kullan' diyerek bu ikilemi aşıyor. BigQuery entegrasyonu kurumsal analitik altyapısına sahip şirketler için ciddi bir kolaylık. Gerçek değer: <b>transfer learning</b> sayesinde çok az etki alanı verisiyle bile kabul edilebilir tahminler üretebiliyor.</p>",
          evolve: "<p>IFS ERP'deki satış siparişleri, stok hareketleri veya makine bakım log'ları bu modelin klasik kullanım senaryosu. BigQuery ML entegrasyonuyla ya da Python API'ıyla bir üretim <b>pipeline</b>'ına bağlamak gerçekçi bir proje. İlginç bir yön: <b>LoRA</b> ile kendi ERP verine <b>fine-tune</b> etmek — şirket spesifik mevsimsellik ve <b>anomali</b> örüntülerini öğrenmiş, bağımsız bir tahmin servisi. ARIMA'ya göre kurulum maliyeti yüksek ama tekrar kullanılabilirlik çok daha iyi.</p>"
        },
        glossary: [
          { term: "Zaman serisi (time series)", def: "Belirli aralıklarla ölçülen verinin kronolojik sırası. Örn: günlük satış rakamları, saatlik sıcaklık ölçümleri, aylık stok seviyeleri." },
          { term: "Foundation model (temel model)", def: "Çok büyük ve çeşitli veriyle önceden eğitilmiş, birçok göreve uyarlanabilen büyük model. ChatGPT'nin dil için yaptığını TimesFM zaman serileri için yapıyor." },
          { term: "Decoder-only Transformer", def: "GPT gibi modellerin kullandığı mimari; girdiyi soldan sağa işleyerek bir sonraki adımı tahmin eder. Zaman serisinde sonraki değeri böyle öngörür." },
          { term: "Parametre", def: "Modelin eğitim sırasında öğrendiği sayısal değer. 200 milyon parametre günümüzde orta ölçekli ama kullanılabilir bir model demek." },
          { term: "Context uzunluğu (context length)", def: "Modelin bir anda dikkate alabildiği maksimum veri noktası sayısı. 16.000 adım demek çok uzun geçmişi görebilmek demek." },
          { term: "PyTorch", def: "Meta'nın geliştirdiği en popüler derin öğrenme framework'ü. Araştırma ve prodüksiyonda yaygın kullanılır." },
          { term: "Flax / JAX", def: "Google'ın geliştirdiği derin öğrenme kütüphaneleri. TPU kullanımında ve araştırmada tercih edilir." },
          { term: "BigQuery ML", def: "Google'ın bulut veri ambarı BigQuery içinde makine öğrenmesi modeli çalıştırma özelliği. Standart SQL yazarak ML yapılır." },
          { term: "LoRA (Low-Rank Adaptation)", def: "Büyük modelin tüm ağırlıklarını güncellemeden küçük ek katmanlar ekleyerek ince ayar yapma yöntemi. Hızlı ve ucuz fine-tuning imkânı sağlar." },
          { term: "Fine-tuning (ince ayar)", def: "Önceden eğitilmiş bir modeli kendi verinle biraz daha eğiterek kendi alanına özelleştirme işlemi." },
          { term: "Quantile forecasting", def: "Tek bir nokta değil, belirli olasılık aralığında (örn. %10-%90 güven bandı) tahmin üretme. Belirsizliği sayısal olarak ölçer." },
          { term: "ARIMA", def: "Geleneksel istatistiksel zaman serisi tahmin modeli. Küçük ve düzenli verilerde hızlı ve yorumlanabilir ama sınırlı kapasiteli." },
          { term: "Transfer learning (aktarım öğrenimi)", def: "Bir görev için eğitilmiş modelin öğrendiklerini başka bir göreve aktarma. Az veriyle iyi sonuç almanın temelidir." },
          { term: "Pipeline", def: "Veri işleme veya model çalıştırma adımlarının sıralı ve otomatik akışı. Veriyi al, işle, tahmin et, sonucu yaz." },
          { term: "Anomali (anomaly)", def: "Zaman serisindeki olağandışı, beklenti dışı değer veya örüntü. Örn: ani satış düşüşü, beklenmedik sistem yükü." }
        ]
      }
    ]
  }
];
