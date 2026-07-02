// Bu dosyayı günlük zamanlanmış görev günceller. En yeni gün en üstte.
// Format: window.__FEED__ = [ { date, sample?, projects: [ { name, url, stars, language, sections:{serves,tech,why,evolve}, glossary:[{term,def}] } ] } ]
window.__FEED__ = [
  {
    date: "2 Temmuz 2026",
    projects: [
      {
        name: "t8y2/dbx",
        url: "https://github.com/t8y2/dbx",
        stars: "8.1k",
        language: "Rust",
        sections: {
          serves: "<p>Farklı veritabanı motorları (MySQL, PostgreSQL, Oracle, MongoDB, Redis...) için ayrı ayrı, çoğu zaman ağır bir <b>runtime</b> (JVM gibi) gerektiren istemciler kullanmak külfetli. dbx, 60'tan fazla veritabanı türünü tek, ~15MB'lık hafif bir <b>binary</b>'de birleştiriyor; üstüne yerleşik bir yapay zeka asistanı ve <b>MCP</b> desteğiyle AI agent'ların doğrudan veritabanını sorgulamasına izin veriyor.</p>",
          tech: "<p>Masaüstü katmanı <b>Tauri 2</b> ile kuruluyor (Rust backend + işletim sisteminin kendi webview'ı, Electron gibi Chromium gömmüyor); arayüz <b>Vue 3</b>, shadcn-vue ve Tailwind CSS ile, SQL editörü ise <b>CodeMirror 6</b> ile yazılmış. Veritabanı bağlantıları için Rust'ın <code>sqlx</code>, <code>tiberius</code>, <code>redis-rs</code>, <code>mongodb</code> gibi native <b>driver</b>'ları kullanılıyor; Snowflake, BigQuery, Neo4j, Cassandra gibi daha egzotik sistemler için <b>JDBC</b> köprüsü var. AI SQL asistanı Claude, OpenAI veya yerel <b>Ollama</b> modelleriyle sorgu üretip optimize edebiliyor; <b>MCP server</b> özelliğiyle Claude Code veya Cursor gibi araçlar dbx'e tanımlı veritabanlarını doğrudan sorgulayabiliyor. Ayrıca <b>ER diyagramı</b> çıkarma, <b>schema diff</b>, <b>explain plan</b> görüntüleme ve sanal kaydırmalı (<b>virtual scrolling</b>) veri tablosu gibi araçlar geliyor.</p>",
          why: "<p>8.1k yıldız, DBeaver gibi JVM tabanlı ağır araçlar ya da her veritabanı için ayrı konsol kullanma yorgunluğuna gerçek bir cevap olmasından geliyor — tek, küçük bir binary. AI ve MCP entegrasyonu da agent'ların veri katmanına erişmesinin yaygınlaştığı bu dönemde zamanlaması isabetli. Dürüst olmak gerekirse proje henüz genç; 60'ın üzerindeki veritabanı desteğinin hepsi aynı olgunlukta değil, kritik prod ortamlarda güvenmeden önce kendi veritabanın üzerinde test etmek gerekir.</p>",
          evolve: "<p>IFS'in altyapısı Oracle olduğu için dbx'i JDBC köprüsüyle Oracle'a bağlayıp DBeaver'a alternatif bir masaüstü istemcisi olarak deneyebilirsin. Daha ilginci: MCP entegrasyonu sayesinde bir AI agent'a IFS'in özelleştirilmiş tablo ve view'larını tanıtıp ad-hoc sorgular yazdırabilir, ER diyagramıyla yıllar içinde büyümüş bir şemayı elle reverse-engineering yapmadan görselleştirebilirsin.</p>"
        },
        glossary: [
          { term: "Runtime", def: "Bir programın çalışması için gereken, arka planda hazır bulunması gereken ortam (örn. Java için JVM)." },
          { term: "Binary", def: "Doğrudan çalıştırılabilen, derlenmiş tek program dosyası." },
          { term: "MCP (Model Context Protocol)", def: "AI agent'ların dış araç ve veri kaynaklarına standart bir biçimde bağlanmasını sağlayan protokol." },
          { term: "Tauri", def: "Web teknolojileriyle arayüz yazıp, Rust ile küçük ve hızlı masaüstü uygulamaları paketlemeye yarayan framework." },
          { term: "Vue", def: "Kullanıcı arayüzü oluşturmak için kullanılan bir JavaScript framework'ü." },
          { term: "CodeMirror", def: "Web sayfalarına gömülebilen, sözdizimi renklendirmeli kod/metin editörü kütüphanesi." },
          { term: "Driver (sürücü)", def: "Bir programın belirli bir veritabanı ya da donanımla konuşmasını sağlayan bağlantı katmanı." },
          { term: "JDBC", def: "Java dünyasından gelen, farklı veritabanlarına ortak bir arayüzle bağlanmayı sağlayan standart." },
          { term: "Ollama", def: "Büyük dil modellerini kendi bilgisayarında yerel olarak çalıştırmayı sağlayan araç." },
          { term: "ER diyagramı", def: "Bir veritabanındaki tabloların ve aralarındaki ilişkilerin görsel şeması." },
          { term: "Schema diff", def: "İki veritabanı şeması arasındaki farkları karşılaştırma işlemi." },
          { term: "Explain plan", def: "Bir SQL sorgusunun veritabanı motoru tarafından nasıl çalıştırılacağını gösteren yürütme planı." },
          { term: "Virtual scrolling", def: "Çok satırlı bir tabloda sadece ekranda görünen satırları render ederek performansı artıran teknik." }
        ]
      },
      {
        name: "langchain-ai/deepagents",
        url: "https://github.com/langchain-ai/deepagents",
        stars: "25.5k",
        language: "Python",
        sections: {
          serves: "<p>Sıfırdan 'derin' bir agent (çok adımlı planlama, hafıza, alt görev delegasyonu yapabilen) kurmak her seferinde aynı iskeleti tekrar yazmak demek: görev bölme, <b>context window</b> yönetimi, araç <b>sandbox</b>'lama. deepagents bunu hazır ama üzerine yazılabilir (override edilebilir) bir <b>harness</b> olarak paketliyor; sıfırdan boilerplate yerine çalışan, production'a yakın bir agent'la başlıyorsun.</p>",
          tech: "<p>Çekirdekte <b>LangGraph</b> (agent orkestrasyonunu bir graph/durum makinesi olarak çalıştıran runtime) var; bunun üstüne LangChain'in <code>create_agent</code>'ından daha sofistike bir harness olarak kuruluyor. Öne çıkan mekanizmalar: <b>sub-agent</b>'lar (bir alt görevi, ana konuşmayı kirletmeden izole bir <b>context window</b>'da çalışan başka bir agent'a devretme), <b>virtual filesystem</b> (agent'ın dosya okuma/yazma/düzenleme yapabildiği, arkada local/sandboxed/remote gibi farklı depolama backend'lerine bağlanabilen soyut dosya sistemi), otomatik context özetleme ve uzun tool çıktısını devre dışı bırakma (offload), yapılandırılabilir bir <b>sandbox</b> içinde shell erişimi, oturumlar arası kalıcı hafıza, riskli bir araç çağrısından önce onay bekleten <b>human-in-the-loop</b> kapıları, tekrar kullanılabilir davranış modülleri sunan <b>skills</b> sistemi ve <b>MCP</b> sunucularıyla araç entegrasyonu. <b>Model-agnostik</b>: tool calling destekleyen her LLM ile çalışıyor; <b>LangSmith</b> ile izleme/değerlendirme entegre.</p>",
          why: "<p>25.5k yıldızın arkasında hem LangChain ekibinin güvenilirliği hem de gerçek bir boşluk var: agent framework'leri ya çok minimal (ham bir döngü) ya da çok katı oluyor; deepagents ortada duruyor — hazır varsayılanlar var ama her parçası değiştirilebilir. Oyuncak demo'nun ötesine geçen agent'lar kuran herkes için gerçek değer taşıyor; hype riski şu: 'deep agent' popüler bir terim ve hangi framework'ü kullanırsan kullan, production'da güvenilirlik yine dikkatli prompt ve araç tasarımına bağlı.</p>",
          evolve: "<p>IFS/PL-SQL kod tabanını okuyup migration script'i öneren ya da dokümantasyon taslağı çıkaran bir AI agent kurmayı merak ediyorsan, deepagents'ın virtual filesystem + sub-agent deseni iyi bir şablon: ana agent planlıyor, 'X PL/SQL paketinin kullanıldığı yerleri bul' gibi bir alt görevi izole context'li bir sub-agent'a devrediyor, sonucu sanal dosyalara yazıyor, ve gerçek veritabanına dokunan herhangi bir komut çalıştırılmadan önce human-in-the-loop onay kapısından geçiyor.</p>"
        },
        glossary: [
          { term: "Context window", def: "Bir dil modelinin tek seferde 'hafızasında' tutabildiği metin miktarı." },
          { term: "Sandbox", def: "Bir programın/kodun, sistemin geri kalanına zarar veremeyeceği izole bir çalışma ortamı." },
          { term: "Harness", def: "Bir sistemi (burada AI agent'ı) çalıştırmak, yönetmek ve test etmek için etrafına kurulan iskelet/altyapı." },
          { term: "LangGraph", def: "Agent'ların adımlarını bir durum makinesi/graph olarak modelleyip yürüten orkestrasyon kütüphanesi." },
          { term: "Sub-agent", def: "Ana agent tarafından belirli bir alt görevi yürütmek üzere devreye sokulan, kendi bağımsız bağlamına sahip başka bir agent." },
          { term: "Virtual filesystem", def: "Gerçek bir diskten bağımsız, farklı depolama biçimlerine bağlanabilen soyut/simüle dosya sistemi arayüzü." },
          { term: "Human-in-the-loop", def: "Otomatik bir sürecin riskli adımlarında insan onayının araya girdiği tasarım." },
          { term: "Skills (agent skills)", def: "Bir agent'ın tekrar tekrar kullanabileceği, önceden tanımlanmış davranış/yetenek modülleri." },
          { term: "MCP (Model Context Protocol)", def: "AI agent'ların dış araç ve veri kaynaklarına standart bir biçimde bağlanmasını sağlayan protokol." },
          { term: "Model-agnostik", def: "Belirli bir yapay zeka modeline bağlı kalmadan, farklı modellerle çalışabilme özelliği." },
          { term: "LangSmith", def: "LangChain ekibinin agent çalışmalarını izlemek ve değerlendirmek için sunduğu gözlemlenebilirlik platformu." }
        ]
      },
      {
        name: "TencentCloud/CubeSandbox",
        url: "https://github.com/TencentCloud/CubeSandbox",
        stars: "6.9k",
        language: "Rust",
        sections: {
          serves: "<p>Bir AI agent'ın ürettiği kodu (Python/shell çıktısı gibi) çalıştırmak güvenlik riski taşır: Docker konteynerleri host'un çekirdeğini (<b>kernel</b>) paylaştığı için teorik olarak kaçış (<b>escape</b>) riski var. CubeSandbox her çalıştırmayı ~60ms'de ayağa kalkan, kendi <b>microVM</b>'inde izole ediyor; böylece agent'lar host makineyi riske atmadan rastgele kod çalıştırabiliyor.</p>",
          tech: "<p>Modüler bir mimarisi var: <b>CubeAPI</b> (E2B SDK ile uyumlu REST <b>gateway</b>, yani mevcut E2B entegrasyonlarına birebir takılabiliyor), <b>CubeMaster</b> (küme orkestratörü/zamanlayıcı), <b>CubeProxy</b> (istekleri ilgili sandbox'a yönlendiren <b>reverse proxy</b>), <b>Cubelet</b> (node bazında sandbox yaşam döngüsü yönetimi), <b>CubeVS</b> (ağ izolasyonu için <b>eBPF</b> tabanlı sanal switch), <b>CubeEgress</b> (giden trafiği domain bazlı sınırlayan ve kimlik bilgilerini sandbox'ın dışında tutup enjekte eden güvenlik gateway'i), ve <b>CubeHypervisor/CubeShim</b> (<b>KVM</b> tabanlı <b>microVM</b> katmanı — Docker'daki gibi paylaşılan bir çekirdek değil, her sandbox kendi guest işletim sistemi çekirdeğine sahip). ~100ms'de <b>snapshot/rollback</b> alabiliyor, <b>OCI image</b>'ları sandbox şablonuna çeviriyor.</p>",
          why: "<p>6.9k yıldız, agentic kodlama araçlarının yaygınlaşmasıyla 'AI'ın ürettiği koda güvenmeden çalıştırma' probleminin artık temel bir altyapı ihtiyacı haline gelmesinden geliyor. VM seviyesinde izolasyonu konteyner hızında sunma iddiası, eBPF + KVM microVM mühendisliğiyle gerçek bir teknik başarı, hype değil. Dikkat edilmesi gereken: proje henüz genç ve Tencent Cloud destekli; production'a bağlanmadan önce uzun vadeli destek taahhüdünü kontrol etmek, ve 6 ayrı bileşenden oluşan bu stack'i kendin barındırmanın (self-host) yönetilen bir E2B/Modal sandbox kullanmaktan daha karmaşık olduğunu bilmek gerekir.</p>",
          evolve: "<p>İleride bir AI agent'a PL/SQL script'lerini ya da IFS Marble kod değişikliklerini sana göstermeden önce otomatik test ettirmek istersen, CubeSandbox'ın egress kontrolü (domain allowlist, credential vault) tam da istediğin güvenlik deseni: gerçek veritabanı kimlik bilgileriyle çalışan bir agent'ı çalıştırırken sırları sandbox'ın dışında tutup sadece gereken izni enjekte etmek, her giden isteği audit-log'lamak.</p>"
        },
        glossary: [
          { term: "Kernel (çekirdek)", def: "İşletim sisteminin donanımla doğrudan konuşan, en temel katmanı." },
          { term: "Escape (sandbox kaçışı)", def: "İzole bir ortamda çalışan kodun, o izolasyonu kırıp host sisteme erişmesi." },
          { term: "MicroVM", def: "Normal bir sanal makineden çok daha hafif ve hızlı açılan, yine de kendi çekirdeğine sahip minimal sanal makine." },
          { term: "Gateway", def: "Dış isteklerin bir sisteme girerken ilk uğradığı, yönlendirme/kontrol yapan giriş noktası." },
          { term: "Reverse proxy", def: "Gelen istekleri arka plandaki doğru sunucuya yönlendiren ara katman." },
          { term: "eBPF", def: "Linux çekirdeği içinde, çekirdeği değiştirmeden özel ağ/güvenlik/izleme mantığı çalıştırmaya yarayan teknoloji." },
          { term: "KVM", def: "Linux'un donanım destekli sanallaştırma özelliği; sanal makinelerin neredeyse gerçek donanım hızında çalışmasını sağlar." },
          { term: "Snapshot/rollback", def: "Bir sistemin o andaki durumunu kaydedip (snapshot), gerektiğinde o duruma geri dönme (rollback) yeteneği." },
          { term: "OCI image", def: "Konteynerler için endüstri standardı haline gelmiş, taşınabilir paket/imaj formatı." },
          { term: "Credential vault", def: "API anahtarı/şifre gibi hassas bilgilerin güvenli şekilde saklandığı ve kontrollü biçimde erişildiği kasa." },
          { term: "Audit log", def: "Kim ne zaman ne yaptı bilgisini kaydeden, sonradan denetlenebilir işlem kaydı." }
        ]
      }
    ]
  },
  {
    date: "1 Temmuz 2026",
    projects: [
      {
        name: "D4Vinci/Scrapling",
        url: "https://github.com/D4Vinci/Scrapling",
        stars: "67.4k",
        language: "Python",
        sections: {
          serves: "<p>Web scraping dünyası dağınık: tek bir <code>requests</code> çağrısı için ayrı, JavaScript'le render edilen siteler için ayrı, anti-bot korumalı (Cloudflare gibi) siteler için bambaşka araçlar gerekiyor. Üstüne site tasarımını değiştirdiğinde yazdığın <b>selector</b>'lar bozulup scraper'ın çöküyor. Scrapling tek bir framework'te bunların hepsini topluyor: hem yüksek performanslı <b>parsing</b>, hem <b>adaptive</b> (siteyi değişse bile elementi yeniden bulan) tracking, hem anti-bot atlatma.</p>",
          tech: "<p>Çekirdekte C tabanlı <b>lxml</b> üstüne kurulu bir parser var; <b>CSS selector</b> ve <b>XPath</b> ile element seçip, BeautifulSoup tarzı DOM gezintisi (parent/sibling/child) yapabiliyorsun — ama 5000 elementlik bir sayfada BeautifulSoup'tan yüzlerce kat hızlı. Asıl ayırt edici özellik <b>adaptive element tracking</b>: <code>adaptive=True</code> verdiğinde, site yeniden tasarlanıp <b>DOM</b> yapısı değişse bile benzerlik algoritmalarıyla aynı elementi yeniden buluyor. Üç farklı <b>fetcher</b> katmanı var: düz <b>Fetcher</b> (<b>TLS fingerprint</b> taklidi + HTTP/3 ile tarayıcı gibi görünür), <b>StealthyFetcher</b> (<b>Playwright</b> ile headless Chromium çalıştırıp Cloudflare Turnstile çözer), ve <b>DynamicFetcher</b> (tam tarayıcı otomasyonu, form doldurma). Scrapy benzeri bir <b>Spider</b> katmanı <code>asyncio</code> ile eşzamanlı crawl yapıyor; <b>checkpoint</b> ile durdur-devam et desteği var. Ayrıca yerleşik bir <b>MCP server</b> ile Claude/Cursor'a içeriği önceden filtreleyip <b>token</b> maliyetini düşürerek besliyor.</p>",
          why: "<p>67k yıldız boşuna değil: scraping herkesin ara sıra ihtiyaç duyduğu ama her seferinde 'hangi aracı kullanayım' diye bocaladığı bir alan. Scrapling'in iddiası somut ve ölçülebilir — parsing'de BeautifulSoup'a göre ~780x hız, ve gerçek bir acıyı (site değişince scraper'ın bozulması) <code>adaptive</code> tracking ile çözmesi. Bu hype değil, mühendislik değeri. Tek dikkat: anti-bot atlatma özelliklerinin, scrape ettiğin sitenin kullanım şartlarına ve yasalara uygun, yetkili biçimde kullanılması gerekir.</p>",
          evolve: "<p>IFS dışındaki kaynaklardan (tedarikçi portalları, döviz/fiyat siteleri, kamu veri sayfaları) düzenli veri toplayıp PL/SQL tarafında bir staging tablosuna akıtmak istersen, Scrapling'in <code>adaptive</code> tracking'i bu entegrasyonların 'site değişti, job kırıldı' bakım yükünü ciddi azaltır. Ayrıca topladığın ham HTML'i MCP server üzerinden bir LLM'e önceden filtreleyip besleyerek, yapılandırılmamış web verisini IFS'e girilebilir yapılandırılmış kayda çevirebilirsin.</p>"
        },
        glossary: [
          { term: "Web scraping", def: "Web sayfalarından otomatik olarak veri çekme işlemi." },
          { term: "Selector", def: "Bir HTML sayfasında belirli bir elementi (örn. fiyat, başlık) hedeflemek için yazılan adresleme ifadesi." },
          { term: "Parsing", def: "Ham bir metni (örn. HTML) program tarafından anlaşılır bir yapıya ayrıştırma işlemi." },
          { term: "lxml", def: "Python'da HTML/XML'i çok hızlı işlemek için kullanılan, C ile yazılmış bir kütüphane." },
          { term: "CSS selector", def: "Web'de elementleri sınıf/etiket/kimliğe göre seçmek için kullanılan, CSS'ten gelen kısa ifade biçimi." },
          { term: "XPath", def: "XML/HTML belgelerinde elementlere yol tarifi vererek erişmeyi sağlayan sorgu dili." },
          { term: "DOM (Document Object Model)", def: "Bir web sayfasının tarayıcıdaki ağaç biçimli yapısal temsili." },
          { term: "Adaptive element tracking", def: "Sitenin yapısı değişse bile benzerlik analiziyle aranan elementi yeniden bulabilme yeteneği." },
          { term: "Fetcher", def: "Bir web sayfasının içeriğini getiren (indirme/istek yapan) bileşen." },
          { term: "TLS fingerprint", def: "Bir istemcinin şifreli bağlantı kurarken bıraktığı, hangi araç/tarayıcı olduğunu ele veren imza; taklit edilince scraper tarayıcı gibi görünür." },
          { term: "Playwright", def: "Gerçek bir tarayıcıyı programatik olarak (görünmez/headless dahil) kontrol etmeye yarayan otomasyon kütüphanesi." },
          { term: "Headless tarayıcı", def: "Ekranda pencere açmadan, arka planda çalışan tarayıcı." },
          { term: "Cloudflare Turnstile", def: "Cloudflare'ın bot trafiğini engellemek için kullandığı insan-doğrulama mekanizması." },
          { term: "asyncio", def: "Python'da aynı anda çok sayıda işi (örn. yüzlerce isteği) beklemeden yürütmeyi sağlayan eşzamanlılık altyapısı." },
          { term: "Spider / crawl", def: "Linkleri takip ederek çok sayıda sayfayı sırayla gezip veri toplayan scraping bileşeni/işlemi." },
          { term: "Checkpoint", def: "Uzun bir işin durumunu kaydedip, kesilince kaldığı yerden devam etmesini sağlayan ara kayıt noktası." },
          { term: "MCP (Model Context Protocol)", def: "AI agent'ların dış araç ve veri kaynaklarına standart bir biçimde bağlanmasını sağlayan protokol." },
          { term: "Token", def: "Bir dil modelinin metni işlerken kullandığı en küçük birim; maliyet ve sınırlar token sayısına göre belirlenir." }
        ]
      },
      {
        name: "surrealdb/surrealdb",
        url: "https://github.com/surrealdb/surrealdb",
        stars: "32.6k",
        language: "Rust",
        sections: {
          serves: "<p>Tipik bir uygulamada veriyi tutmak için bir veritabanı, ona erişmek için ayrı bir API katmanı, bir de kimlik doğrulama (<b>auth</b>) servisi yazarsın — üç ayrı sistemi birbirine bağlamak külfetli. SurrealDB bu üçünü tek bir platformda birleştiriyor: aynı motorda <b>document</b>, <b>graph</b> (ilişki), klasik <b>relational</b> tablo, zaman serisi, coğrafi ve <b>vector</b> veriyi tutabiliyor; üstüne yetkilendirme ve gerçek zamanlı abonelikleri kendisi sağlıyor.</p>",
          tech: "<p>Tamamı <b>Rust</b> ile yazılmış tek bir binary; hem uygulamanın içine gömülü (<b>embedded</b>) kütüphane olarak, hem WebAssembly ile tarayıcıda, hem de dağıtık bir sunucu kümesi (<b>cluster</b>) olarak çalışabiliyor. Sorgu dili <b>SurrealQL</b>, SQL'e benziyor ama graph ilişkilerini pahalı <b>JOIN</b>'ler olmadan gezebiliyorsun: <code>RELATE</code> ile iki kayıt arasına özellikli, yönlü bir <b>edge</b> kuruyor, <b>record link</b>'lerle iç içe veriyi tek sorguda çekiyorsun. <b>ACID</b> transaction'ları çok tablo/çok satır üzerinde tablo kilidi olmadan destekliyor. <b>Live query</b> denen özellikle bir sorguya WebSocket üzerinden abone olup veri değiştikçe <b>DIFF/PATCH</b> güncellemeleri alıyorsun — yani 'gerçek zamanlı' uygulamalar için polling'e gerek kalmıyor. Şema tarafında hem <b>schemafull</b> (katı, tip kısıtlı) hem <b>schemaless</b> (esnek) modu var; satır düzeyinde izin (<b>permission</b>) kuralları ve gömülü JavaScript fonksiyonları ile iş mantığını veri katmanına taşıyabiliyorsun.</p>",
          why: "<p>32.6k yıldız, 'tek araçla çok-model + API + auth' vaadinin gerçek bir ihtiyaca dokunduğunu gösteriyor; özellikle bilgi grafları ve AI agent backend'leri için graph + vector + document'i tek yerde tutabilmek cazip. Dürüst olmak gerekirse her şeyi yapan tek motor iddiası dikkat ister: olgunluk ve operasyonel deneyim PostgreSQL kadar oturmuş değil ve çekirdek <b>BSL (Business Source License)</b> ile geliyor (saf açık kaynak değil). Yani değer gerçek, ama production kararı öncesi kendi yükünle test etmek lazım.</p>",
          evolve: "<p>Sen günlük işinde Oracle/IFS'in katı relational dünyasında ve PL/SQL'de çalışıyorsun; SurrealDB'yi bir yan projede kurcalamak, ilişki-ağırlıklı veriyi (örn. parça-tedarikçi-sipariş zincirleri) Oracle'da <code>CONNECT BY</code> / özyinelemeli sorgularla uğraşmadan <code>RELATE</code> ve graph traversal ile modellemenin nasıl bir his olduğunu gösterir. SurrealQL'i SQL'le kıyaslamak, JOIN'siz graph gezintisi ve live query gibi kavramların PL/SQL refleksini nasıl değiştirdiğini somut biçimde öğretir.</p>"
        },
        glossary: [
          { term: "Auth (kimlik doğrulama)", def: "Bir kullanıcının/iste­ğin gerçekten kim olduğunu ve neye yetkili olduğunu denetleme süreci." },
          { term: "Document (belge) veritabanı", def: "Veriyi katı tablolar yerine esnek JSON benzeri belgeler halinde tutan veritabanı modeli." },
          { term: "Graph veritabanı", def: "Veriyi düğümler ve aralarındaki ilişkiler (kenarlar) olarak tutan, ilişki gezintisinde güçlü model." },
          { term: "Relational (ilişkisel) veritabanı", def: "Veriyi satır-sütun tablolarında tutan ve tabloları anahtarlarla ilişkilendiren klasik model (örn. Oracle)." },
          { term: "Vector (vektör) arama", def: "Veriyi sayı dizisi (vektör) olarak temsil edip anlamca en yakın kayıtları bulma tekniği; AI/benzerlik aramasının temeli." },
          { term: "Rust", def: "Bellek güvenliğini derleme aşamasında garanti eden, yüksek performanslı bir sistem programlama dili." },
          { term: "Binary", def: "Doğrudan çalıştırılabilen, derlenmiş tek program dosyası." },
          { term: "Embedded (gömülü) veritabanı", def: "Ayrı bir sunucu kurmadan, doğrudan uygulamanın içinde kütüphane olarak çalışan veritabanı." },
          { term: "Cluster (küme)", def: "Birlikte tek bir sistem gibi davranan, yükü ve veriyi paylaşan birden çok sunucu." },
          { term: "SurrealQL", def: "SurrealDB'nin SQL'e benzeyen, ama graph gezintisi ve gerçek zamanlı sorguları da kapsayan sorgu dili." },
          { term: "JOIN", def: "İlişkisel veritabanında birden çok tabloyu ortak alan üzerinden birleştirme işlemi; büyük veride pahalı olabilir." },
          { term: "Edge (kenar)", def: "Graph veritabanında iki kayıt arasındaki ilişkiyi temsil eden, kendine ait özellikleri olabilen bağlantı." },
          { term: "Record link", def: "Bir kaydın başka bir kayda JOIN olmadan doğrudan referans vermesini sağlayan bağlantı." },
          { term: "ACID", def: "Bir veritabanı işleminin bölünmez, tutarlı, izole ve kalıcı olmasını garanti eden dört temel özellik." },
          { term: "Transaction", def: "Ya tamamı başarılı olan ya da hiç uygulanmayan, bir bütün olarak ele alınan işlem grubu." },
          { term: "Live query (canlı sorgu)", def: "Sonucu bir kez döndürmek yerine, veri değiştikçe abonelere otomatik güncelleme gönderen sorgu." },
          { term: "WebSocket", def: "İstemci ile sunucu arasında çift yönlü, sürekli açık kalan iletişim kanalı." },
          { term: "DIFF/PATCH", def: "Tüm veriyi tekrar göndermek yerine sadece değişen kısmı (farkı) iletme yöntemi." },
          { term: "Schemafull / Schemaless", def: "Verinin alanlarının katı kurallarla tanımlı olması (schemafull) ya da serbest/esnek olması (schemaless)." },
          { term: "Permission (izin)", def: "Hangi kullanıcının hangi veriyi okuyup yazabileceğini belirleyen erişim kuralı." },
          { term: "BSL (Business Source License)", def: "Kaynağı açık ama ticari kullanımına süreli kısıt getiren, tam 'özgür yazılım' sayılmayan lisans türü." },
          { term: "Graph traversal", def: "Bir graph'ta düğümden düğüme ilişkileri takip ederek gezinme işlemi." }
        ]
      },
      {
        name: "superradcompany/microsandbox",
        url: "https://github.com/superradcompany/microsandbox",
        stars: "6.7k",
        language: "Rust",
        sections: {
          serves: "<p>AI'ın ürettiği kodu, kullanıcıdan gelen eklentileri veya güvenmediğin CI işlerini çalıştırmak risklidir: kötü niyetli kod host makineye zarar verebilir. Klasik çözüm olan <b>container</b>'lar (Docker) kernel'i host ile paylaştığı için izolasyonu tam değil; bulut <b>serverless</b> ise vendor'a bağımlı. microsandbox, donanım sanallaştırması kullanan <b>microVM</b>'lerle, untrusted kodu host'tan donanım düzeyinde yalıtılmış biçimde, ama yüz milisaniyenin altında açılış hızıyla çalıştırıyor.</p>",
          tech: "<p>Temelde <b>libkrun</b> ile hafif sanal makineler (microVM) başlatıyor ve <b>smoltcp</b> ile ağ yığınını sağlıyor; her sandbox kendi <b>guest kernel</b>'ı ile çalıştığı için container'ların paylaşılan kernel zafiyetlerinden etkilenmiyor (<b>hardware-level isolation</b>). Yine de pratik: ortalama <b>boot</b> süresi 100ms altı, ve Docker Hub/GHCR gibi herhangi bir <b>OCI</b> registry'sinden standart container imajlarını çekip çalıştırabiliyor — yani yeni bir format öğrenmene gerek yok. Uzun ömürlü bir <b>daemon</b> ya da sunucu kurmadan, SDK ile (Rust, Python, TypeScript, Go) doğrudan kendi kodunun içinden microVM doğurabiliyorsun: <code>Sandbox.builder()</code> ile CPU/RAM ayarlanıp <code>.exec()</code> ile komut çalıştırılıyor. <b>Secret injection</b> özelliğinde API anahtarları host'ta kalıp VM'e hiç girmediği için, içeride çalışan kod sızdıramıyor. macOS (HVF), Linux (<b>KVM</b>), Windows (WHP) destekli ve AI agent'lara bağlanmak için bir <b>MCP server</b> sunuyor.</p>",
          why: "<p>AI'ın kod üretmesi yaygınlaştıkça 'bu üretilen kodu nerede güvenle çalıştıracağım' sorusu gerçek ve büyüyen bir ihtiyaç; microsandbox tam buraya oynuyor ve Y Combinator destekli. 6.7k yıldız henüz erken-aşama bir benimsenmeye işaret ediyor — SurrealDB veya Scrapling kadar olgun değil. Buradaki değer mühendislik açısından somut (container'ın izolasyon açığını microVM ile kapatmak), ama 'AI çağının altyapısı' söyleminin bir kısmı da zamanlama/hype'tan besleniyor; üretim kullanımında dikkatli değerlendirmek gerekir.</p>",
          evolve: "<p>Bir agent'a IFS için PL/SQL veya yardımcı script üret-ve-çalıştır yaptırıyorsan, bu üretilen kodu doğrudan gerçek ortamda denemek tehlikeli olur; microsandbox gibi bir microVM içinde izole çalıştırıp çıktısını gözlemledikten sonra onaylamak güvenli bir 'deneme tahtası' kurar. Aynı mantık, güvenmediğin üçüncü-parti scriptleri veya veri dönüştürme işlerini host'a bulaştırmadan koşturmak için de geçerli.</p>"
        },
        glossary: [
          { term: "Container (konteyner)", def: "Uygulamayı bağımlılıklarıyla paketleyip izole çalıştıran, ama işletim sistemi kernel'ini host ile paylaşan teknoloji (örn. Docker)." },
          { term: "Serverless", def: "Sunucuyu sen yönetmeden, kodun talep geldikçe bulutta çalıştırıldığı model." },
          { term: "microVM", def: "Çok hızlı açılan, hafif ama gerçek donanım sanallaştırması sunan küçük sanal makine." },
          { term: "Kernel (çekirdek)", def: "İşletim sisteminin donanımı yöneten en alt katmanı; container'lar bunu paylaşır, microVM'ler ayrı tutar." },
          { term: "libkrun", def: "Hafif sanal makineleri hızlıca başlatmak için kullanılan açık kaynak kütüphane." },
          { term: "smoltcp", def: "Rust ile yazılmış, küçük ve gömülü ortamlara uygun bir ağ (TCP/IP) yığını." },
          { term: "Guest kernel", def: "Bir sanal makinenin içinde, host'tan bağımsız çalışan kendi işletim sistemi çekirdeği." },
          { term: "Hardware-level isolation (donanım düzeyinde yalıtım)", def: "İşlemcinin sanallaştırma özellikleriyle sağlanan, yazılım sınırından daha güçlü güvenlik ayrımı." },
          { term: "Boot (önyükleme)", def: "Bir makinenin/sanal makinenin sıfırdan başlayıp çalışır hale gelmesi süreci." },
          { term: "OCI (Open Container Initiative) imajı", def: "Docker dahil araçların ortak kullandığı standart konteyner imaj formatı." },
          { term: "Registry", def: "Konteyner imajlarının yüklenip indirildiği depo (örn. Docker Hub, GHCR)." },
          { term: "Daemon", def: "Arka planda sürekli çalışan, hizmet veren program." },
          { term: "SDK (Software Development Kit)", def: "Bir aracı kendi koduna entegre etmek için sağlanan kütüphane ve araç seti." },
          { term: "Secret injection", def: "API anahtarı gibi gizli değerleri, kodun göremeyeceği şekilde kontrollü biçimde sisteme aktarma yöntemi." },
          { term: "KVM / HVF / WHP", def: "Sırasıyla Linux, macOS ve Windows üzerinde donanım sanallaştırmasını sağlayan altyapılar." },
          { term: "Untrusted kod", def: "Kaynağına veya niyetine güvenilmeyen, zarar verme ihtimali olan kod." },
          { term: "MCP (Model Context Protocol)", def: "AI agent'ların dış araç ve servislere standart biçimde bağlanmasını sağlayan protokol." },
          { term: "Y Combinator", def: "Erken aşama girişimlere yatırım yapan, tanınmış bir startup hızlandırma programı." }
        ]
      }
    ]
  },
  {
    date: "30 Haziran 2026",
    projects: [
      {
        name: "obra/superpowers",
        url: "https://github.com/obra/superpowers",
        stars: "242k",
        language: "Shell",
        sections: {
          serves: "<p>AI coding agent'ların (Claude Code, Cursor, Copilot, Gemini vb.) doğrudan koda atlayıp gelişigüzel sonuç üretmesi yerine, profesyonel bir yazılım mühendisi gibi planlayıp test edip review'dan geçmesini zorunlu kılan bir <b>metodoloji + skill kütüphanesi</b>. Hedef: agent'ın güvenilirliğini prompt yazma becerisine değil, tekrarlanabilir bir sürece bağlamak.</p>",
          tech: "<p>Çekirdekte <b>composable skills system</b> var: context'e göre otomatik tetiklenen, yeniden kullanılabilir workflow paketleri (test yazma, debug etme, brainstorm yapma, hatta yeni skill üretme). Bunun üstüne zorunlu bir <b>sequential pipeline</b> oturtulmuş: brainstorming → git kurulumu → planlama → implementasyon+code review → test → branch finalize etme. <b>Subagent-driven development</b> denilen yaklaşımda her görev taze bir subagent'a veriliyor ve iki aşamalı review'dan geçiyor (önce 'spesifikasyona uydu mu', sonra 'kod kalitesi yeterli mi') — bu da agent'ın saatlerce gözetimsiz, otonom çalışabilmesini sağlıyor. Tüm bu mantık plugin olarak paketlenmiş ve Claude Code, Cursor, Copilot dahil çok sayıda araca aynı şekilde kurulabiliyor.</p>",
          why: "<p>242 bin yıldız, AI agent dünyasının şu an en acil sorununa (agent'lar güvenilir, tutarlı, production-kalitesinde kod üretsin) cevap verdiğinin kanıtı. red-green-refactor, YAGNI gibi mühendislik prensiplerini serbest metin tavsiyesi yerine 'otomatik tetiklenen bileşenler' haline getirmesi, gerçek bir tasarım katkısı — hype'tan çok pratik güven sorununu çözüyor. Discord topluluğu ve ticari destek seçenekleri de benimsemeyi kolaylaştırmış.</p>",
          evolve: "<p>Bu görevin kendisi zaten bir 'skill' (SKILL.md) olarak çalışıyor — yani kullanıcı bu fikrin küçük bir versiyonunu günlük olarak kullanıyor. Superpowers'taki 'zorunlu sequential pipeline' ve 'iki aşamalı review' fikrini, IFS'te büyük PL/SQL paket değişikliklerinde agent'a uygulatmak (önce brainstorm/plan adımını zorunlu kılıp, implementasyondan sonra ayrı bir review adımı eklemek) hataları daha erken yakalayabilir.</p>"
        },
        glossary: [
          { term: "AI coding agent", def: "Doğal dil talimatlarıyla kod yazan, çalıştıran ve değiştiren yapay zeka asistanı." },
          { term: "Skill", def: "Bir AI agent'a belirli bir görevi nasıl yapacağını öğreten, yeniden kullanılabilir talimat paketi." },
          { term: "Composable skills system", def: "Bağlama göre otomatik devreye giren, birbirine eklenebilir küçük workflow parçalarından oluşan sistem." },
          { term: "Pipeline", def: "Bir işin sırayla geçtiği, her aşaması belirli bir görevi yapan zorunlu adımlar dizisi." },
          { term: "Subagent", def: "Ana bir agent tarafından belirli bir alt görevi yürütmek için başlatılan, kendi bağlamına sahip ayrı bir agent örneği." },
          { term: "Code review", def: "Yazılan kodun başka biri (veya başka bir agent) tarafından kalite ve doğruluk açısından gözden geçirilmesi." },
          { term: "Red-green-refactor (TDD döngüsü)", def: "Önce başarısız bir test yazıp (red), sonra testi geçirecek minimum kodu yazıp (green), ardından kodu temizleme (refactor) döngüsü." },
          { term: "YAGNI (You Aren't Gonna Need It)", def: "İhtiyaç duyulmadan önce özellik/soyutlama eklememe prensibi." },
          { term: "Plugin", def: "Bir ana programa sonradan eklenip onun yeteneklerini genişleten yazılım parçası." }
        ]
      },
      {
        name: "usestrix/strix",
        url: "https://github.com/usestrix/strix",
        stars: "27.9k",
        language: "Python",
        sections: {
          serves: "<p>Şirketlerin uygulamalarındaki güvenlik açıklarını bulmak için yapılan manuel <b>pentest (penetration testing)</b> pahalı ve yavaş, statik analiz araçları ise çok fazla <b>false positive</b> (yanlış pozitif) üretiyor. Strix, gerçek bir red team gibi davranan otonom AI ajanlarıyla uygulamayı aktif olarak saldırıp, teorik rapor yerine gerçek çalışan exploit'lerle açıkları kanıtlıyor.</p>",
          tech: "<p>Mimarinin kalbinde bir <b>multi-agent orchestration</b> sistemi var: keşif (<b>reconnaissance</b>), istismar (<b>exploitation</b>) ve sömürü-sonrası (<b>post-exploitation</b>) aşamalarına özelleşmiş ayrı agent'lar bulgularını birbirine aktarıp açıkları zincirliyor (<b>chained vulnerabilities</b>) — profesyonel bir red team'in çalışma şeklini taklit ediyor. Agent'lara HTTP intercept proxy'leri, tarayıcı otomasyonu, shell çalıştırma ortamları, Python sandbox'ları ve <b>OSINT</b> araçları gibi gerçek bir pentester'ın araç seti veriliyor. Bulguyu sadece işaretlemek yerine kodu dinamik çalıştırıp gerçek bir exploit üretiyor — bu da false positive oranını neredeyse sıfırlıyor. CLI, web uygulaması (GitHub/domain entegrasyonu) ve CI/CD pipeline modlarında kullanılabiliyor; OpenAI, Anthropic, Google gibi farklı LLM sağlayıcılarını destekliyor.</p>",
          why: "<p>Pentesting endüstrisinin kronik sorunu şu: insan kaynaklı test pahalı/yavaş, otomatik tarayıcılar gürültülü/güvenilmez. Strix LLM'lerin akıl yürütme + araç kullanma yeteneğiyle ikisinin arasını dolduruyor; 'rapor değil kanıt üretiyoruz' iddiası somut ve doğrulanabilir olduğu için 27.9k yıldız gerçek bir güvene işaret ediyor. GitHub Actions entegrasyonu CI/CD'ye sürtünmesiz giriş sağlıyor.</p>",
          evolve: "<p>IFS gibi büyük bir ERP'nin web arayüzlerinde (Marble ile yazılmış özel ekranlar dahil) CI/CD pipeline'ına düzenli, otomatik bir güvenlik taraması eklenebilir — özellikle yetkilendirme hatalarını veya dinamik SQL kullanımından kaynaklanan injection risklerini erken yakalamak için. Bu tür araçların yalnızca kendi sistemlerinizi test etmek için, yetkili ve kontrollü bir ortamda kullanılması gerektiğini unutmamak gerekir.</p>"
        },
        glossary: [
          { term: "Pentest (penetration testing)", def: "Bir sistemin güvenlik açıklarını bulmak için gerçek bir saldırgan gibi davranarak yapılan yetkili test süreci." },
          { term: "False positive (yanlış pozitif)", def: "Bir aracın aslında var olmayan bir sorunu varmış gibi raporlaması." },
          { term: "Multi-agent orchestration", def: "Birden fazla AI agent'ının görev paylaşarak birlikte, koordineli çalışmasını yöneten sistem." },
          { term: "Reconnaissance (keşif)", def: "Bir saldırı/test öncesinde hedef sistem hakkında bilgi toplama aşaması." },
          { term: "Exploitation / Exploit", def: "Bir güvenlik açığını kullanarak sisteme fiilen sızma işlemi/bunu yapan kod parçası." },
          { term: "Post-exploitation (sömürü-sonrası)", def: "Bir sisteme sızıldıktan sonra erişimi genişletme veya kalıcı kılma aşaması." },
          { term: "Chained vulnerabilities (zincirleme açıklar)", def: "Tek başına zararsız görünen birkaç küçük açığın art arda kullanılarak büyük bir sızmaya dönüştürülmesi." },
          { term: "OSINT (Open Source Intelligence)", def: "Herkese açık kaynaklardan (web, sosyal medya vb.) bilgi toplama tekniği." },
          { term: "CI/CD", def: "Kod değişikliklerinin otomatik test edilip otomatik yayınlandığı sürekli entegrasyon/teslimat süreci." },
          { term: "LLM sağlayıcı", def: "OpenAI, Anthropic, Google gibi büyük dil modeli API'si sunan şirket." }
        ]
      },
      {
        name: "ogulcancelik/herdr",
        url: "https://github.com/ogulcancelik/herdr",
        stars: "8.9k",
        language: "Rust",
        sections: {
          serves: "<p>Birden fazla AI coding agent'ı (Claude Code, Devin, Copilot, Cursor vb.) aynı anda çalıştıran geliştiriciler için, her birini ayrı pencerede takip etmek yerine tek bir terminal arayüzünden hepsinin anlık durumunu (bloklandı, çalışıyor, bitti, boşta) görmeyi sağlayan bir <b>agent multiplexer</b>.</p>",
          tech: "<p>~10MB'lık tek bir Rust binary'si, kalıcı bir server-client mimarisiyle çalışıyor: terminali kapatsanız bile agent'lar arka planda çalışmaya devam ediyor, istediğiniz terminalden yeniden bağlanabiliyorsunuz (<b>session persistence</b>). Her agent'ın çıktısı simüle edilmiş değil gerçek terminal render'ı olarak gösteriliyor, böylece tam <b>TUI</b> uyumluluğu korunuyor. Workspace/tab/pane şeklinde hiyerarşik organizasyon ve mouse desteği var. Agent durumu tespiti, process adı eşleştirme + terminal çıktısının <b>heuristic</b> (sezgisel) analiziyle otomatik yapılıyor; ayrıca yerel bir Unix <b>socket</b> API'si üzerinden agent'lar herdr'ı programatik olarak kontrol edebiliyor (workspace oluşturma, çıktı okuma, durum değişikliklerine abone olma). <b>SSH</b> üzerinden uzak sunuculara da aynı özelliklerle (görsel yapıştırma dahil) erişilebiliyor.</p>",
          why: "<p>tmux'ın agent çağına taşınmış hali gibi düşünülebilir: tmux'ın kalıcılık ve pane mantığını koruyup üstüne 'bu pane'deki agent ne durumda' farkındalığını ekliyor. Electron yok, abonelik yok, telemetri yok, SSH'ın ulaştığı her yerde çalışıyor — bu sadelik, geliştiricilerin çoklu agent yönetimindeki gerçek bir acısını çözdüğü için 8.9k yıldız organik bir ihtiyaca işaret ediyor.</p>",
          evolve: "<p>Kullanıcı paralel olarak birden fazla Claude Code/agent oturumu açıp farklı IFS modüllerinde (örn. biri PL/SQL paket refactor'ü, diğeri Marble ekranı) çalışıyorsa, herdr ile bunları tek terminalde 'hangisi bloklandı, hangisi bitti' şeklinde anlık takip edip context switch maliyetini düşürebilir.</p>"
        },
        glossary: [
          { term: "Agent multiplexer", def: "Birden fazla AI agent oturumunu tek bir arayüzden yönetip durumlarını izlemeyi sağlayan araç." },
          { term: "TUI (Terminal User Interface)", def: "Grafik yerine terminal/konsol içinde çalışan kullanıcı arayüzü." },
          { term: "Session persistence (oturum kalıcılığı)", def: "Bağlantı kesilse bile bir işlemin/oturumun arka planda çalışmaya devam etmesi." },
          { term: "Heuristic (sezgisel analiz)", def: "Kesin bir kural yerine örüntü/ipucu tanıma ile sonuca varan analiz yöntemi." },
          { term: "Socket", def: "İki program arasında veri alışverişi için kullanılan düşük seviyeli iletişim kanalı." },
          { term: "SSH (Secure Shell)", def: "Uzak bir bilgisayara güvenli şekilde komut satırından bağlanmayı sağlayan protokol." },
          { term: "Process", def: "İşletim sisteminde çalışan bir programın tek bir örneği." }
        ]
      }
    ]
  },
  {
    date: "29 Haziran 2026",
    projects: [
      {
        name: "opendatalab/MinerU",
        url: "https://github.com/opendatalab/MinerU",
        stars: "71.5k",
        language: "Python",
        sections: {
          serves: "<p>PDF, DOCX, PPTX, XLSX gibi karmaşık belgeleri LLM'lerin sindirebileceği temiz Markdown/JSON'a çeviren bir doküman ayrıştırma motoru. Klasik <b>PDF extraction</b> araçları taranmış sayfalarda, çok sütunlu düzenlerde, el yazısında ve karmaşık tablolarda çuvallar; MinerU bu zor senaryoları hedefliyor — yani bir <b>RAG</b> sistemine ya da AI ajanına 'belgeyi oku' dedirtmenin önündeki en sık karşılaşılan engeli kaldırıyor.</p>",
          tech: "<p>İki ayrı motor sunuyor: CPU-dostu bir <b>pipeline backend</b> (klasik OCR + layout modelleri zinciri, OmniDocBench'te %86.47 doğruluk) ve bir <b>VLM</b> (vision-language model) tabanlı motor (%95+ doğruluk ama GPU gerektiriyor). Süreç sırayla şöyle: önce <b>layout detection</b> sayfayı paragraf/tablo/formül/başlık bloklarına bölüyor, sonra <b>OCR</b> (PaddleOCR tabanlı) ve <b>formula recognition</b> (UniMERNet ile LaTeX'e çeviri) her bloğu kendi türüne göre işliyor, son olarak okuma sırası (<b>reading order</b>) yeniden inşa ediliyor — çok sütunlu bir sayfada hangi paragrafın hangisinden önce geldiğini anlamak. Sunucu tarafı FastAPI/Gradio ile, ağır VLM motorları vLLM/LMDeploy ile hızlandırılıyor; çıktı Markdown, JSON veya zengin ara temsil olarak alınabiliyor.</p>",
          why: "<p>LLM'lere veri besleme işinin en sıkıcı ve hataya açık kısmı 'belgeyi düzgün metne çevirmek'; MinerU bunu üretim kalitesinde çözdüğü için 71k+ yıldız ve 150'den fazla bağımlı proje topladı. Son sürümde lisansın daha kısıtlayıcı AGPLv3'ten Apache 2.0 tabanlı bir lisansa geçmesi de kurumsal kullanımın önündeki en büyük engeli kaldırdı — bu kısmen organik popülerlik, kısmen de stratejik bir lisans hamlesinin sonucu.</p>",
          evolve: "<p>IFS'te biriken PDF formatındaki eski raporları, sözleşmeleri veya teknik dokümantasyonu bir AI asistanına/agent'a sorgulatılabilir hale getirmek istersen, önce MinerU ile bunları temiz Markdown'a çevirip sonra bir vektör veritabanına (RAG için) yüklemek doğal bir ilk adım olur — özellikle taranmış/eski PDF'lerde klasik metin çıkarmadan çok daha iyi sonuç verir.</p>"
        },
        glossary: [
          { term: "PDF extraction", def: "Bir PDF dosyasından metin, tablo veya görsel içeriği program aracılığıyla çıkarma işlemi." },
          { term: "RAG (Retrieval-Augmented Generation)", def: "Bir dil modelinin cevap üretirken önce ilgili belgeleri arayıp bulduğu bilgiyi cevaba dahil etmesini sağlayan teknik." },
          { term: "VLM (Vision-Language Model)", def: "Hem görseli hem metni anlayabilen, ikisini birlikte işleyen yapay zeka modeli türü." },
          { term: "Pipeline backend", def: "Birbirini takip eden ayrı işleme adımlarından (OCR, layout, vb.) oluşan klasik işleme zinciri." },
          { term: "Layout detection", def: "Bir sayfa görselini paragraf, tablo, başlık, formül gibi anlamlı bloklara ayırma işlemi." },
          { term: "OCR (Optical Character Recognition)", def: "Görsel/taranmış bir sayfadaki yazıyı makine tarafından okunabilir metne çevirme teknolojisi." },
          { term: "Formula recognition", def: "Bir görseldeki matematiksel formülü tanıyıp LaTeX gibi yazılabilir bir biçime çevirme işlemi." },
          { term: "Reading order (okuma sırası)", def: "Çok sütunlu veya karmaşık bir sayfada metin bloklarının doğru okunma sırasını belirleme işlemi." },
          { term: "FastAPI", def: "Python ile hızlı API sunucuları yazmak için kullanılan modern bir web framework'ü." },
          { term: "vLLM / LMDeploy", def: "Büyük dil/görsel-dil modellerini GPU üzerinde hızlı ve verimli şekilde çalıştırmaya yarayan servis kütüphaneleri." }
        ]
      },
      {
        name: "vercel-labs/skills",
        url: "https://github.com/vercel-labs/skills",
        stars: "24k",
        language: "TypeScript",
        sections: {
          serves: "<p>Claude Code, Cursor, Copilot gibi onlarca farklı AI coding agent'ın kendine özgü, birbiriyle uyumsuz 'agent'a talimat öğretme' formatları var; bu da herkesin aynı işi (örn. 'PR açarken şu kurallara uy') her araç için yeniden yazmasına yol açıyor. <code>npx skills</code>, tek bir standart <b>skill</b> formatını 70'ten fazla agent'a kurup paylaşılabilir hale getiren bir CLI.</p>",
          tech: "<p>Bir skill, en basit haliyle <code>SKILL.md</code> adlı bir dosya: başında <b>YAML frontmatter</b> (zorunlu <code>name</code> ve <code>description</code> alanları) var, altında ise agent'a verilecek Markdown talimat metni duruyor. CLI bu dosyaları GitHub URL'si, yerel yol veya git deposu gibi farklı kaynaklardan çekip <code>.claude/skills/</code>, <code>.agents/skills/</code> gibi araca özel klasörlere kopyalıyor (<code>npx skills add</code>), proje veya global ölçekte kurabiliyor, kurmadan tek seferlik prompt da üretebiliyor (<code>npx skills use</code>) ve <code>npx skills find</code> ile merkezi bir kayıt deposunda (skills.sh) arama yapabiliyor. TypeScript ile yazılmış, npm üzerinden dağıtılan, bağımlılığı minimal bir CLI paketi.</p>",
          why: "<p>AI agent ekosistemi hızla çoğaldı ama her araç kendi 'eklenti'/'talimat' formatını icat etti — bu, tam olarak paket yöneticilerinin (npm, pip) çözdüğü dağıtım/standardizasyon sorununun agent dünyasında tekrarı. Vercel'in arkasında olması ve 70+ aracı tek formatla kapsaması gerçek bir ekosistem boşluğunu dolduruyor; 24k yıldız organik bir ihtiyaca işaret ediyor, hype'tan çok pratik fayda.</p>",
          evolve: "<p>IFS Marble/PL-SQL ekibinde tekrar eden işler için (örn. 'değişiklik talebi şablonuna göre commit mesajı yaz', 'PL/SQL paket başlığına şu yorum formatını ekle') kendi <code>SKILL.md</code> dosyalarını yazıp ekip içinde <code>npx skills add</code> ile dağıtmak, her geliştiricinin AI asistanının aynı kurumsal kurallara uymasını sağlayabilir — tam da kullanıcının bu konuşmada zaten kullandığı 'skill' mekanizmasının kendisi.</p>"
        },
        glossary: [
          { term: "AI coding agent", def: "Doğal dil talimatlarıyla kod yazan, çalıştıran ve değiştiren yapay zeka asistanı (Claude Code, Cursor, Copilot gibi)." },
          { term: "Skill", def: "Bir AI agent'ın yeteneklerini genişleten, yeniden kullanılabilir talimat paketi." },
          { term: "YAML frontmatter", def: "Bir Markdown dosyasının başında, anahtar-değer çiftleriyle meta bilgi taşıyan kısa yapılandırılmış blok." },
          { term: "CLI (Command Line Interface)", def: "Komut satırından çalıştırılan, grafik arayüzü olmayan program." },
          { term: "npm / npx", def: "JavaScript paketlerini kurmak (npm) ve kurmadan doğrudan çalıştırmak (npx) için kullanılan araçlar." },
          { term: "Paket yöneticisi", def: "Yazılım bağımlılıklarını indirip kurup sürümlerini yöneten araç (npm, pip gibi)." }
        ]
      },
      {
        name: "diegosouzapw/OmniRoute",
        url: "https://github.com/diegosouzapw/OmniRoute",
        stars: "7.4k",
        language: "TypeScript",
        sections: {
          serves: "<p>Birden fazla LLM sağlayıcısıyla (OpenAI, Anthropic, ücretsiz kotalı küçük sağlayıcılar dahil 200'den fazla) çalışan geliştiriciler için, her birinin farklı API'sini, kotasını ve fiyatını ayrı ayrı yönetme zahmetini kaldıran yerel bir <b>AI gateway</b> / <b>proxy</b>. Tek bir adrese (localhost) istek gönderiyorsun, OmniRoute arkada hangi sağlayıcıya yönlendireceğine karar veriyor.</p>",
          tech: "<p>Mimarinin kalbinde bir <b>routing engine</b> var: öncelik, maliyet, gecikme (<b>latency</b>), sağlayıcı sağlığı gibi dokuz faktöre göre skor hesaplayıp en uygun sağlayıcıyı seçen 'auto-combo' motoru. Bir sağlayıcı kotasını tükettiğinde veya hata verdiğinde sistem sessizce diğerine kayıyor (<b>failover</b>) — dört kademeli bir öncelik sırası (abonelik kotası → API key → ucuz sağlayıcı → ücretsiz sağlayıcı) ve <b>circuit breaker</b> deseniyle sağlık takibi yapılıyor. Üstüne bir <b>prompt compression</b> hattı oturtulmuş: tekrarlayan oturum verisini, araç çıktısı gürültüsünü ve gereksiz <b>prose</b>'u (düz metin anlatımı) ML tabanlı tekniklerle (LLMLingua-2 gibi) sıkıştırıp token harcamasını düşürüyor; kod blokları değişmeden kalıyor. TypeScript/Node.js üzerine kurulu, SQLite ile yerel veri saklıyor, <b>MCP</b> ve <b>A2A</b> protokolleriyle agent ekosistemine bağlanabiliyor.</p>",
          why: "<p>AI araçlarının (Claude Code, Cursor, Copilot) maliyeti ve kota sınırları geliştiriciler için gerçek bir sorun; OmniRoute tek bir yapılandırmayla 16+ aracı birden fazla sağlayıcıya bağlayıp maliyeti düşürme vaadiyle popülerlik kazandı. Ama '%95 token tasarrufu' ve 'aylık 1.6 milyar ücretsiz token' gibi iddialar pazarlama diline yakın; ücretsiz kotaları art arda toplama (kota arbitrajı) yaklaşımının sağlayıcıların kullanım koşullarıyla ne kadar uyumlu olduğu tartışmalı — bu projede gerçek mühendislik (routing, circuit breaker, compression) var ama hype payı da göz ardı edilmemeli.</p>",
          evolve: "<p>Kurumsal bir ortamda (IFS gibi) birden fazla LLM sağlayıcısını (örn. bir bulut sağlayıcı + kendi sunucunda vLLM ile servis edilen açık kaynak model) tek bir iç API arkasında birleştirip, hangi isteğin nereye gideceğini maliyet/gizlilik kriterine göre otomatik seçen daha sade, kurum içi bir 'routing' katmanı kurmak — burada görülen circuit breaker ve fallback mantığını örnek alarak — pratik bir fikir olur.</p>"
        },
        glossary: [
          { term: "AI gateway / proxy", def: "İstemci uygulamalar ile birden çok AI sağlayıcısı arasında aracılık yapan, istekleri yönlendiren ara katman." },
          { term: "Routing engine", def: "Gelen bir isteği hangi hedefe (burada: hangi AI sağlayıcısına) yönlendireceğine karar veren bileşen." },
          { term: "Latency (gecikme)", def: "Bir isteğin gönderilmesiyle cevabın alınması arasında geçen süre." },
          { term: "Failover", def: "Bir sistem bileşeni hata verdiğinde otomatik olarak yedek/alternatif bileşene geçiş yapma yeteneği." },
          { term: "Circuit breaker", def: "Sürekli hata veren bir bileşene istek göndermeyi geçici olarak durdurup sistemi koruyan tasarım deseni." },
          { term: "Prompt compression", def: "Bir dil modeline gönderilen metni, anlamı bozmadan daha az token kullanacak şekilde kısaltma tekniği." },
          { term: "Prose", def: "Düz, anlatımsal yazılmış metin; burada kod/yapılandırılmış veri olmayan kısımlara işaret ediyor." },
          { term: "MCP (Model Context Protocol)", def: "AI modellerinin dış araçlara ve veri kaynaklarına standart bir şekilde bağlanmasını sağlayan açık protokol." },
          { term: "A2A (Agent-to-Agent)", def: "Farklı AI agent'larının birbiriyle standart bir şekilde haberleşmesini sağlayan protokol." },
          { term: "Token", def: "Bir dil modelinin metni işlerken kullandığı en küçük birim, yaklaşık bir kelime parçası." }
        ]
      }
    ]
  },
  {
    date: "28 Haziran 2026",
    projects: [
      {
        name: "dbt-labs/dbt-core",
        url: "https://github.com/dbt-labs/dbt-core",
        stars: "13.2k",
        language: "Rust",
        sections: {
          serves: "<p>dbt (data build tool), ham veriyi analiz-hazır veri setlerine dönüştürme işini SQL ile, yazılım mühendisliği pratikleriyle (versiyon kontrolü, test, modülerlik) yapmayı sağlayan bir transformasyon framework'ü. Veri ekiplerinin <b>ELT</b> pipeline'ının T (transform) kısmını — ham tablolar yüklendikten sonraki kısmı — standardize ediyor.</p>",
          tech: "<p>Mimarinin merkezinde <b>model</b> kavramı var: her model bir SELECT ifadesi, dbt bu modelleri birbirine bağlayıp bir <b>DAG</b> (yönlendirilmiş döngüsüz çizge) çıkarıyor — hangi tablo hangisine bağımlı otomatik tespit ediliyor. <b>Jinja templating</b> ile SQL'e değişken/döngü/makro eklenebiliyor (PL/SQL'deki dinamik SQL'e benzer ama derleme zamanında render ediliyor). Her model bir <b>materialization</b> stratejisiyle (table, view, incremental, ephemeral) gerçek bir tabloya/görünüme dönüşüyor. <b>Adapter</b> sistemi sayesinde Snowflake, BigQuery, Redshift, Postgres gibi farklı <b>data warehouse</b>'lara aynı SQL mantığıyla bağlanılabiliyor. v2.0 ile proje Python'dan <b>Rust</b>'a yeniden yazılıyor; amaç parse/derleme hızını artırmak, tek bir self-contained binary dağıtmak ve <b>Parquet</b> tabanlı ölçeklenebilir artifact'lar üretmek.</p>",
          why: "<p>Veri ekiplerinin SQL script'lerini ad-hoc, test'siz, versiyon kontrolsüz şekilde yönetmesi büyük bir disiplin sorunuydu. dbt 'analytics engineering' diye yeni bir disiplin yarattı: SQL'i git, <b>CI/CD</b>, test ve dokümantasyonla bir yazılım gibi yönetmek. 9.500'den fazla projede kullanılması ve büyük Rust rewrite'ın ilgi çekmesi hype değil — gerçek bir disiplin boşluğunu doldurmasından geliyor.</p>",
          evolve: "<p>PL/SQL'de büyük view/prosedür zincirleri yazan biri için dbt'nin model+DAG yaklaşımı tanıdık gelecektir; fark, dbt'nin bağımlılıkları otomatik çıkarması ve her modeli ayrı test edilebilir/dokümante edilebilir bir birim haline getirmesi. IFS'ten çekilen raporlama verilerini bir data warehouse'a (Snowflake/Postgres gibi) aktarıp dbt ile 'stage → intermediate → mart' katmanlarına ayırmak, raporlama tarafını PL/SQL'den ayrıştırıp test edilebilir hale getirebilir.</p>"
        },
        glossary: [
          { term: "dbt (data build tool)", def: "Ham veriyi SQL ile, yazılım mühendisliği pratikleriyle analiz-hazır hale getiren açık kaynak transformasyon aracı." },
          { term: "ELT (Extract, Load, Transform)", def: "Veriyi önce kaynaktan çekip (extract) hedef sisteme yükleyip (load), dönüşümü (transform) sonra yapma yaklaşımı." },
          { term: "Model", def: "dbt'de bir SELECT ifadesiyle tanımlanan, tek bir veri dönüşüm adımını temsil eden birim." },
          { term: "DAG (Directed Acyclic Graph)", def: "Yönlendirilmiş döngüsüz çizge; modeller arası bağımlılıkları gösteren, döngü içermeyen ağ yapısı." },
          { term: "Jinja templating", def: "SQL metni içine değişken, döngü ve makro yazmayı sağlayan, derleme zamanında metni üreten şablon dili." },
          { term: "Materialization", def: "Bir dbt modelinin gerçek veritabanı nesnesine (table, view, incremental, ephemeral) dönüştürülme stratejisi." },
          { term: "Adapter", def: "dbt'nin farklı veritabanı/veri ambarı türlerine bağlanmasını sağlayan bağlayıcı bileşen." },
          { term: "Data warehouse (veri ambarı)", def: "Şirketin farklı kaynaklardan gelen verisini analiz için topladığı, büyük ölçekli veritabanı sistemi (Snowflake, BigQuery, Redshift gibi)." },
          { term: "Rust", def: "C kadar hızlı ama hafıza güvenliğini derleme zamanında garanti eden sistem programlama dili." },
          { term: "Parquet", def: "Büyük veri setlerini verimli şekilde saklamak için kullanılan, sütun bazlı (columnar) bir dosya formatı." },
          { term: "Analytics engineering", def: "SQL tabanlı veri dönüşümünü, yazılım geliştirme pratikleri (test, versiyon kontrolü, CI/CD) ile yapan disiplin." },
          { term: "CI/CD", def: "Kod değişikliklerinin otomatik test edilip (Continuous Integration) otomatik yayınlandığı (Continuous Deployment) süreç." }
        ]
      },
      {
        name: "keycloak/keycloak",
        url: "https://github.com/keycloak/keycloak",
        stars: "35.3k",
        language: "Java",
        sections: {
          serves: "<p>Her uygulamanın kendi kullanıcı adı/şifre/oturum yönetimini sıfırdan yazması yerine, kimlik doğrulamayı (<b>authentication</b>) ve yetkilendirmeyi (<b>authorization</b>) merkezi bir servise devretmeyi sağlayan açık kaynak <b>IAM</b> platformu. 'Kullanıcı kim ve neye erişebilir' sorusunu uygulamalardan ayırıp tek bir yerde çözüyor.</p>",
          tech: "<p>Mimarinin temel birimi <b>realm</b> — her realm kendi kullanıcı, rol ve client setine sahip izole bir kimlik alanı (bir şirketin farklı departmanlarını ya da farklı müşterilerini ayırmak için kullanılabilir). <b>Client</b> her realm içinde kayıtlı bir uygulamayı temsil ediyor. Keycloak; <b>OAuth2</b>, <b>OIDC</b> (OpenID Connect) ve <b>SAML</b> protokollerini destekliyor — yani hem modern API/SPA tabanlı hem de eski kurumsal <b>SSO</b> senaryolarını kapsıyor. <b>Identity provider federation</b> ile Google, GitHub, <b>LDAP/Active Directory</b> gibi dış kimlik kaynaklarına bağlanabiliyor. Java (<b>Quarkus</b> tabanlı) çekirdek üzerine TypeScript ile yazılmış bir admin konsolu kurulu.</p>",
          why: "<p>Her şirketin kendi login/şifre sıfırlama/2FA mantığını yazıp güvenlik açığı riskine girmesi yerine, sektör standardı protokolleri (OIDC/SAML) uygulayan, <b>OpenSSF</b> sertifikalı bir açık kaynak çözüme yönelmesi mantıklı. 35k+ yıldız, gerçek bir altyapı ihtiyacına (SSO, merkezi kimlik yönetimi) cevap verdiğinin göstergesi — hype değil, on yıllardır var olan bir problemin olgun çözümü.</p>",
          evolve: "<p>IFS gibi kurumsal ERP sistemlerinde genelde her modülün/uygulamanın kendi kullanıcı yönetimi olur; Keycloak'ı önüne koyup IFS'e ve diğer şirket içi uygulamalara (intranet, raporlama araçları) tek bir SSO girişiyle bağlanmak, kullanıcı yönetimini merkezileştirip <b>password fatigue</b>'u (parola yorgunluğu) azaltabilir. AI asistanlarının/agent'ların kurumsal sistemlere erişiminde de OIDC token'ları üzerinden ince taneli (<b>fine-grained</b>) yetkilendirme kurulabilir.</p>"
        },
        glossary: [
          { term: "IAM (Identity and Access Management)", def: "Kimin hangi kaynağa hangi işlemi yapabileceğini tanımlayan kimlik ve yetkilendirme sistemi." },
          { term: "Authentication (kimlik doğrulama)", def: "Bir kullanıcının iddia ettiği kişi olduğunu doğrulama işlemi (örn. şifre, parmak izi ile giriş)." },
          { term: "Authorization (yetkilendirme)", def: "Doğrulanmış bir kullanıcının hangi kaynaklara/işlemlere erişebileceğini belirleme işlemi." },
          { term: "Realm", def: "Keycloak'ta kendi kullanıcı, rol ve uygulama setine sahip izole bir kimlik alanı." },
          { term: "Client", def: "Bir realm içinde kayıtlı, Keycloak üzerinden kimlik doğrulama yapan uygulama." },
          { term: "OAuth2", def: "Uygulamaların kullanıcı adına, şifreyi paylaşmadan sınırlı yetkiyle kaynaklara erişmesini sağlayan yetkilendirme protokolü." },
          { term: "OIDC (OpenID Connect)", def: "OAuth2 üzerine inşa edilmiş, kullanıcı kimlik bilgisini standart bir şekilde taşıyan kimlik doğrulama protokolü." },
          { term: "SAML", def: "Kurumsal ortamlarda yaygın, XML tabanlı eski bir kimlik doğrulama ve tekil oturum açma protokolü." },
          { term: "SSO (Single Sign-On)", def: "Bir kez giriş yaparak birden çok uygulamaya erişebilme; her uygulamaya ayrı ayrı giriş yapmaya gerek kalmaz." },
          { term: "Identity provider federation", def: "Dış kimlik sağlayıcılarla (Google, LDAP gibi) entegre olup onların kullanıcılarını kabul etme yeteneği." },
          { term: "LDAP / Active Directory", def: "Kurumsal ağlarda kullanıcı ve kaynak bilgisini merkezi olarak saklayan dizin servisleri." },
          { term: "Quarkus", def: "Java için hızlı başlatma ve düşük bellek kullanımı hedefleyen modern bir uygulama framework'ü." },
          { term: "OpenSSF", def: "Açık kaynak yazılımların güvenlik standartlarını belirleyen, Linux Foundation çatısındaki bir girişim." },
          { term: "Password fatigue (parola yorgunluğu)", def: "Kullanıcının çok sayıda farklı şifreyi yönetmek zorunda kalmasından doğan güvenlik ve kullanılabilirlik sorunu." },
          { term: "Fine-grained authorization", def: "Erişim kontrolünü genel roller yerine, çok detaylı ve duruma özgü kurallarla yapma yaklaşımı." }
        ]
      },
      {
        name: "Fission-AI/OpenSpec",
        url: "https://github.com/Fission-AI/OpenSpec",
        stars: "57.1k",
        language: "TypeScript",
        sections: {
          serves: "<p>AI coding agent'larla (Claude Code, Cursor, Copilot vb.) çalışırken en büyük risk: gereksinimlerin sadece chat geçmişinde yaşaması — agent'ın bir sonraki oturumda ne yapacağını 'hatırlaması' mümkün değil, bağlam kaybolur. OpenSpec, kod yazılmadan önce insan ile AI'ın ne inşa edileceği üzerinde hizalanmasını sağlayan, hafif bir <b>spec-driven development</b> (şartnameye dayalı geliştirme) katmanı sunuyor.</p>",
          tech: "<p>Çalışma mantığı <b>slash command</b>'lar üzerinden ilerliyor (<code>/opsx:propose</code>, <code>/opsx:explore</code> gibi) — desteklenen AI araçlarında çağrılıyor. Her değişiklik için bir 'change folder' oluşturuluyor; bu klasör <b>proposal</b> (niyeti açıklayan belge), <b>spec</b> (gereksinim tanımları), <b>design</b> (teknik yaklaşım dokümantasyonu) ve <b>task checklist</b> (uygulama takip listesi) içeriyor. Katı faz kapıları (<b>phase gate</b>) yok — kullanıcı süreç içinde herhangi bir artifact'ı güncelleyebiliyor, iteratif çalışma destekleniyor. TypeScript ile yazılmış, <b>npm</b> paketi olarak dağıtılıyor, Node.js 20.19+ gerektiriyor, 25'ten fazla AI aracıyla entegre çalışıyor.</p>",
          why: "<p>AI agent'ların kod üretme hızı arttıkça 'agent ne yapacağını tam anlamadı, yanlış şeyi hızlıca inşa etti' sorunu büyüdü. OpenSpec, ağır bir süreç yükü (Jira/Confluence tarzı) getirmeden hafif bir hizalama katmanı sunarak bu boşluğu dolduruyor. 57k+ yıldız ve 25+ araç desteği gerçek bir ihtiyaca denk geldiğini gösteriyor — ama 'spec-driven' terimi güncel AI-agent trendinin de parçası olduğundan kısmen hype payı var.</p>",
          evolve: "<p>IFS Marble/PL-SQL geliştirmede yeni bir özellik veya entegrasyon talebi geldiğinde, koda dalmadan önce OpenSpec benzeri bir 'önce spec yaz, sonra kodla' disiplini kurmak — özellikle birden fazla geliştiricinin/AI asistanının aynı değişiklik üzerinde çalıştığı senaryolarda — gereksinim kaymasını (<b>scope creep</b>) azaltabilir. Kendi kurumsal değişiklik talebi şablonlarını (RFC benzeri) bu mantıkla bir AI asistanına bağlayabilirsin.</p>"
        },
        glossary: [
          { term: "AI coding agent", def: "Kod yazma, çalıştırma ve değişiklik yapma görevlerini doğal dil talimatlarıyla yürüten yapay zeka asistanı." },
          { term: "Spec-driven development (şartnameye dayalı geliştirme)", def: "Kod yazılmadan önce ne yapılacağının yazılı bir şartname/spesifikasyonla netleştirildiği geliştirme yaklaşımı." },
          { term: "Slash command", def: "Bir araca '/' ile başlayan kısa komutlar yazarak belirli bir işlemi tetikleme yöntemi." },
          { term: "Proposal", def: "Bir değişikliğin neden ve ne amaçla yapılacağını açıklayan belge." },
          { term: "Spec", def: "Bir değişikliğin teknik gereksinimlerini detaylı şekilde tanımlayan belge." },
          { term: "Design doc", def: "Bir değişikliğin teknik çözüm yaklaşımını/mimarisini açıklayan belge." },
          { term: "Task checklist", def: "Bir değişikliğin uygulanması için yapılması gereken adımların listesi." },
          { term: "Phase gate", def: "Bir sürecin bir aşamadan diğerine geçmesi için onay gerektiren katı kontrol noktası." },
          { term: "npm", def: "JavaScript/TypeScript paketlerini dağıtmak ve kurmak için kullanılan paket yöneticisi." },
          { term: "Node.js", def: "JavaScript'i tarayıcı dışında, sunucu veya komut satırı ortamında çalıştırmaya yarayan çalışma zamanı (runtime)." },
          { term: "Scope creep (gereksinim kayması)", def: "Bir projenin kapsamının, başta planlanmadan, zamanla kontrolsüz şekilde büyümesi." }
        ]
      }
    ]
  },
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
