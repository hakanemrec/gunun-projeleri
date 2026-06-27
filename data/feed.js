// Bu dosyayı günlük zamanlanmış görev günceller. En yeni gün en üstte.
// Format: window.__FEED__ = [ { date, sample?, projects: [ { name, url, stars, language, sections:{serves,tech,why,evolve}, glossary:[{term,def}] } ] } ]
window.__FEED__ = [
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
