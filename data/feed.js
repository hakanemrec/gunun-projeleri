// Bu dosyayı günlük zamanlanmış görev günceller. En yeni gün en üstte.
// Format: window.__FEED__ = [ { date, sample?, projects: [ { name, url, stars, language, sections:{serves,tech,why,evolve}, glossary:[{term,def}] } ] } ]
window.__FEED__ = [
  {
    date: "26 Haziran 2026",
    projects: [
      {
        name: "vllm-project/vllm",
        url: "https://github.com/vllm-project/vllm",
        stars: "84.4k",
        language: "Python",
        sections: {
          serves: "<p>Büyük dil modellerini (LLM) prodüksiyonda hızlı ve verimli şekilde çalıştırmak için tasarlanmış bir <b>inference</b> ve <b>serving</b> kütüphanesi. UC Berkeley'in Sky Computing Lab'ında doğmuş, bugün OpenAI'dan Mistral'a kadar pek çok firmanın LLM'leri canlıya almak için kullandığı fiili standart haline gelmiş. Çözdüğü soru basit: bir modeli API olarak yüzlerce kullanıcıya aynı anda, GPU'yu boşa harcamadan nasıl sunarsın?</p>",
          tech: "<p>Çekirdek yenilik <b>PagedAttention</b>: LLM'lerin ürettiği <b>KV cache</b>'i (attention hesaplamalarının ara belleği) işletim sistemlerinin sayfalama mantığıyla yönetip <b>fragmentation</b>'ı (bellek parçalanması) azaltıyor — aynı GPU'da çok daha fazla isteği aynı anda işleyebiliyor. Üstüne <b>continuous batching</b> (gelen istekleri tek tek değil sürekli akan bir kuyrukta toplu işleme) ve <b>prefix caching</b> ekleniyor. Hız için <b>speculative decoding</b> (küçük bir modelin tahmin ettiği <b>token</b>'ları büyük modelin doğrulaması) ve FlashAttention/CUTLASS gibi optimize <b>kernel</b>'lar kullanılıyor. <b>Tensor, pipeline, data, expert parallelism</b> ile model tek bir GPU'ya sığmasa da birden çok GPU/sunucuya bölünebiliyor. NVIDIA, AMD, CPU, hatta TPU ve Apple Silicon'a kadar geniş donanım desteği var.</p>",
          why: "<p>2000'den fazla katkıcısı olan, Hugging Face ve OpenAI uyumlu <b>API</b> ile entegre çalışan, 200'den fazla model mimarisini destekleyen bu proje, kurumların 'kendi LLM'imizi kendi altyapımızda çalıştırma' ihtiyacının fiili standardı oldu. Popülerliği hype değil: PagedAttention gibi somut bir mühendislik buluşunun GPU maliyetini gerçekten düşürmesinden geliyor.</p>",
          evolve: "<p>IFS gibi kurumsal ortamlarda, şirket içi verilerle (PL/SQL şemaları, dokümantasyon) çalışan bir LLM'i bulut API'lerine bağımlı kalmadan kendi sunucunda servis etmek isteyen biri için vLLM tam cevap. Açık kaynak bir model (Llama, Qwen gibi) indirip vLLM ile kendi sunucunda OpenAI uyumlu bir API açabilir, sonra bu API'yi mevcut PL/SQL/Marble entegrasyon katmanına bağlayabilirsin — veri dışarı çıkmadan.</p>"
        },
        glossary: [
          { term: "LLM (Large Language Model)", def: "Büyük miktarda metinle eğitilmiş, metin üretebilen/anlayabilen yapay zeka modeli. ChatGPT, Claude gibi sistemlerin temeli." },
          { term: "Inference", def: "Eğitilmiş bir modelin yeni bir girdiye karşılık çıktı üretme işlemi. Eğitimden farklı olarak modelin gerçek kullanım anı." },
          { term: "Serving", def: "Bir modeli, dışarıdan gelen isteklere yanıt verecek şekilde sürekli çalışır halde sunma işlemi." },
          { term: "PagedAttention", def: "vLLM'in icat ettiği, LLM'in bellek kullanımını işletim sistemi sayfalaması gibi yöneten teknik. GPU belleğini çok daha verimli kullanmayı sağlar." },
          { term: "KV cache", def: "Modelin önceki token'lar için hesapladığı ara değerleri (key-value) saklayan bellek alanı. Her token için yeniden hesaplama yapmamayı sağlar." },
          { term: "Fragmentation (bellek parçalanması)", def: "Bellekte küçük, kullanılmayan boşlukların birikip toplam kapasiteyi verimsiz hale getirmesi." },
          { term: "Continuous batching", def: "Gelen istekleri tek tek değil, sürekli akan bir kuyrukta toplu işleyerek donanımı daha verimli kullanma tekniği." },
          { term: "Prefix caching", def: "Aynı başlangıç metnine (prompt prefix) sahip isteklerin ortak kısmının hesaplamasını tekrar tekrar yapmayıp önbellekten kullanma tekniği." },
          { term: "Speculative decoding", def: "Küçük ve hızlı bir modelin olası sonraki token'ları tahmin edip büyük modelin bu tahminleri sadece doğrulamasıyla üretimi hızlandırma yöntemi." },
          { term: "Token", def: "Bir dil modelinin metni işlerken kullandığı en küçük birim, yaklaşık bir kelime parçası." },
          { term: "Kernel (GPU kernel)", def: "GPU üzerinde çalışacak şekilde özel olarak yazılmış, belirli bir hesaplamayı (örn. matris çarpımı) en hızlı şekilde yapan kod parçası." },
          { term: "Tensor / pipeline / data / expert parallelism", def: "Büyük bir modeli birden fazla GPU'ya farklı şekillerde bölme stratejileri — bazısı modelin katmanlarını, bazısı veriyi, bazısı uzman alt-modülleri ayrı GPU'lara dağıtır." },
          { term: "GPU", def: "Grafik işlemci; paralel hesaplama gücü sayesinde yapay zeka modellerinin eğitimi ve çalıştırılması için ana donanım." },
          { term: "TPU", def: "Google'ın yapay zeka iş yükleri için özel olarak tasarladığı işlemci türü." },
          { term: "API (uygulama programlama arayüzü)", def: "Bir yazılımın diğer yazılımlar tarafından çağrılabilen, standart istek-cevap kurallarına sahip arayüzü." }
        ]
      },
      {
        name: "topoteretes/cognee",
        url: "https://github.com/topoteretes/cognee",
        stars: "23.1k",
        language: "Python",
        sections: {
          serves: "<p>AI agent'ların oturumlar arası hafızası olmaması — her konuşmanın sıfırdan başlaması — büyük bir sorun. Cognee, veriyi (doküman, kod, log, ne olursa) içine alıp bir <b>knowledge graph</b>'a dönüştüren, agent'ların 'hatırlama' katmanı olarak kullanabileceği açık kaynak bir hafıza platformu. Hedef: agent'ın aynı hatayı tekrar tekrar yapmaması, bağlamı kalıcı olarak taşıyabilmesi.</p>",
          tech: "<p>Mimarinin merkezinde dört temel operasyon var: <b>remember, recall, forget, improve</b>. Veriler hem kalıcı bir knowledge graph'a hem de hızlı erişim için oturum bazlı bir <b>cache</b>'e yazılıyor. 1.0 sürümüyle büyük bir mimari sadeleştirme yapılmış: ayrı graph veritabanı, <b>vector store</b> ve cache yerine tüm <b>memory stack</b> tek bir <b>PostgreSQL</b> + <b>pgvector</b> eklentisiyle bir instance'a indirilmiş. Python çekirdek dil (Rust ve TypeScript client'ları da var), isteğe bağlı Neo4j/LanceDB/Redis desteği duruyor. <b>RAG</b>'ın (retrieval-augmented generation) ötesine geçip <b>graph reasoning</b> ve <b>ontology</b> üretimini bilişsel bilim (<b>cognitive science</b>) ilkelerine dayandırmış.</p>",
          why: "<p>Agent ekosisteminde herkesin ayrı ayrı vector DB + graph DB + cache kurup birbirine bağladığı, parçalı bir tooling sorunu var. Cognee bunu tek backend'e indirip 'agent hafızası' diye ayrı bir altyapı kategorisi yaratıyor. 23k yıldız gerçek bir acıyı (agent'ların unutkanlığı) çözdüğünün işareti — ama 'hafıza' terimi pazarlama açısından da cazip, kısmen hype payı olduğunu söylemek gerek.</p>",
          evolve: "<p>IFS Marble/PL-SQL geliştirme sürecinde tekrarlayan hata kalıplarını, çözüm geçmişini bir Cognee instance'ına besleyip kendi 'kurumsal hafıza' katmanını kurabilirsin — yeni bir geliştirici ya da AI asistanı aynı hataya tekrar düşmeden önceki çözümleri 'recall' edebilir. PostgreSQL tabanlı olması, mevcut kurumsal veritabanı altyapısına entegrasyonu kolaylaştırıyor.</p>"
        },
        glossary: [
          { term: "Knowledge graph (bilgi çizgesi)", def: "Nesneler ve aralarındaki ilişkileri düğüm-kenar yapısıyla saklayan veri yapısı. 'Bu doküman şu konuyla ilişkili' gibi bağlantıları tutar." },
          { term: "Remember / recall / forget / improve", def: "Cognee'nin hafıza döngüsünü oluşturan dört temel işlem: veri kaydetme, geri çağırma, gereksiz/eski veriyi silme ve geri bildirimle kendini güncelleme." },
          { term: "Cache (önbellek)", def: "Sık kullanılan veriyi hızlı erişim için geçici olarak saklayan bellek alanı." },
          { term: "Vector store (vektör deposu)", def: "Metinlerin sayısal temsillerini (embedding) saklayıp anlamsal benzerlik araması yapmaya yarayan özel veritabanı türü." },
          { term: "Memory stack (hafıza yığını)", def: "Bir sistemin hafıza işlevini sağlamak için kullandığı bileşenlerin (veritabanı, cache, vektör deposu vb.) bütünü." },
          { term: "PostgreSQL", def: "Açık kaynak, ilişkisel (relational) ve çok güçlü bir veritabanı yönetim sistemi." },
          { term: "pgvector", def: "PostgreSQL'e vektör tabanlı benzerlik araması yeteneği ekleyen bir eklenti (extension)." },
          { term: "RAG (Retrieval-Augmented Generation)", def: "Bir dil modelinin cevap üretmeden önce ilgili belgeleri arayıp bulduğu bilgiyle cevabını zenginleştirdiği yöntem." },
          { term: "Graph reasoning", def: "Bir bilgi çizgesi üzerindeki düğüm ve kenarları takip ederek mantıksal çıkarım yapma süreci." },
          { term: "Ontology", def: "Bir alandaki kavramları ve aralarındaki ilişkileri tanımlayan yapılandırılmış bilgi modeli." },
          { term: "Cognitive science (bilişsel bilim)", def: "İnsan zihninin nasıl öğrendiğini, hatırladığını ve düşündüğünü inceleyen disiplinler arası bilim alanı." }
        ]
      },
      {
        name: "aws/agent-toolkit-for-aws",
        url: "https://github.com/aws/agent-toolkit-for-aws",
        stars: "1.3k",
        language: "Python",
        sections: {
          serves: "<p>AI coding agent'ların (Claude Code, Cursor, Codex, Kiro gibi) AWS üzerinde gerçek altyapı işleri yapabilmesi için AWS'nin resmi olarak sunduğu araç seti. Hedef: agent 'S3 bucket'ı oluştur' veya 'bu Lambda'yı deploy et' dediğinde bunu güvenli, izlenebilir ve yetkilendirilmiş şekilde yapabilmesi.</p>",
          tech: "<p>Merkezde tek bir <b>AWS MCP server</b> var: 300'den fazla AWS servisine tek, <b>authenticated endpoint</b> üzerinden tam API kapsaması sağlıyor; <b>sandbox</b>'lı Python script çalıştırma ve gerçek zamanlı AWS dokümantasyon erişimi de dahil. Üstüne modüler bir <b>plugin</b> sistemi kurulmuş: aws-core (CDK/CloudFormation gibi <b>IaC</b> araçları, serverless, container, storage, observability), aws-agents (Amazon Bedrock üzerinde agent inşası), aws-data-analytics (S3/Glue/Athena ile <b>ETL</b>), aws-agents-for-devsecops (güvenlik taraması, olay müdahalesi). CloudWatch ve CloudTrail ile kurumsal izleme sağlanıyor — agent'ın yaptığı işlemler insan işlemlerinden ayrı <b>IAM</b> politikalarıyla kontrol edilebiliyor.</p>",
          why: "<p>AI agent'ların altyapı işlerine girmesi yeni bir güvenlik sorunu doğurdu: agent insan değil, ama IAM açısından insan gibi davranıyordu. AWS bu projeyle 'agent'a özel yetkilendirme ve denetim' kategorisini resmi olarak tanımlıyor. Henüz genç (1.3k yıldız) ama AWS'nin resmi imzasını taşıması ve büyük bir bulut sağlayıcının agent-native tooling'e yatırım yaptığının sinyali olması ilgi çekici.</p>",
          evolve: "<p>Eğer IFS altyapısı bulutta AWS üzerinde çalışıyorsa, bu toolkit'i kullanarak bir AI asistanına 'şu ortamı kur, şu CloudWatch alarmını kontrol et' gibi görevleri güvenli IAM sınırları içinde devredebilirsin — insan onayı gerektiren adımlarla. aws-data-analytics modülü, ERP'den çekilen verilerin S3/Glue/Athena ile otomatik bir ETL pipeline'ına bağlanması için de doğrudan kullanılabilir.</p>"
        },
        glossary: [
          { term: "AI coding agent", def: "Kod yazma, çalıştırma ve altyapı işlemleri yapabilen, doğal dil talimatlarıyla yönlendirilen yapay zeka asistanı." },
          { term: "MCP server", def: "AI asistanlarının dış araçlara (burada AWS servislerine) standart bir protokolle bağlanmasını sağlayan sunucu bileşeni." },
          { term: "Authenticated endpoint", def: "Sadece kimliği doğrulanmış isteklerin erişebildiği, dışarıya açık bir servis adresi." },
          { term: "Sandbox", def: "Çalıştırılan kodun sistemin diğer kısımlarına zarar verememesi için izole edilmiş, güvenli çalışma ortamı." },
          { term: "Plugin (eklenti)", def: "Ana sisteme ek özellik kazandıran, takılıp çıkarılabilen bağımsız modül." },
          { term: "IaC (Infrastructure as Code)", def: "Sunucu, ağ gibi altyapı bileşenlerini elle tıklayarak değil, kod/yapılandırma dosyalarıyla tanımlama ve yönetme yaklaşımı." },
          { term: "Serverless", def: "Sunucu yönetmek zorunda kalmadan kod çalıştırma modeli; altyapı otomatik ölçeklenir." },
          { term: "Container (konteyner)", def: "Bir uygulamayı bağımlılıklarıyla birlikte paketleyip her ortamda aynı şekilde çalıştırmayı sağlayan izole paket." },
          { term: "Amazon Bedrock", def: "AWS'nin çeşitli yapay zeka modellerine (Claude dahil) API üzerinden erişim sağlayan yönetilen servisi." },
          { term: "ETL (Extract, Transform, Load)", def: "Veriyi kaynağından çekip (extract), işleyip (transform) hedef sisteme yükleme (load) sürecinin kısaltması." },
          { term: "S3 / Glue / Athena", def: "AWS'nin sırasıyla dosya depolama (S3), veri hazırlama/ETL (Glue) ve SQL ile sorgulama (Athena) servisleri." },
          { term: "CloudWatch / CloudTrail", def: "AWS'nin sırasıyla sistem izleme/metrik takibi (CloudWatch) ve kim-ne-yaptı kayıtlarını tutma (CloudTrail) servisleri." },
          { term: "IAM (Identity and Access Management)", def: "AWS'de kimin hangi kaynağa hangi işlemi yapabileceğini tanımlayan kimlik ve yetkilendirme sistemi." },
          { term: "Lambda", def: "AWS'nin sunucu yönetmeden, tetiklenince çalışan kod parçacıkları (fonksiyon) çalıştırma servisi." }
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
