// ============= HAMBURGER MENU =============
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  sideMenu.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  hamburger.classList.remove("open");
  sideMenu.classList.remove("open");
  overlay.classList.remove("show");
});

// ============= TRANSLATE =============
const translateBtn = document.getElementById("translateBtn");
const langDropdown = document.getElementById("langDropdown");

translateBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  translateBtn.classList.toggle("active");
  langDropdown.classList.toggle("show");
});

document.addEventListener("click", () => {
  translateBtn.classList.remove("active");
  langDropdown.classList.remove("show");
});

langDropdown.addEventListener("click", (e) => e.stopPropagation());

// ============= I18N DATA =============
// NOTE: setiap key di sini HARUS punya pasangan data-i18n="key" di salah satu
// dari 4 halaman (index.html, about.html, achievement.html, project.html).
// Kalau nambah section baru yang perlu diterjemahkan, tambahkan key di sini
// juga di ketiga bahasa (en / id / ja) supaya tidak ada yang kelewat.
const translations = {
  en: {
    // navbar (shared across all pages)
    navHome: "HOME",
    navAbout: "ABOUT ME",
    navAchievement: "ACHIEVEMENT",
    navProject: "PROJECT",
    navHeader: "// NAVIGATE",
    langBtnLabel: "LANG",

    // index.html
    badge: "// SYSTEM ONLINE",
    tagline: "DEVELOPER · CREATOR · GAMER",
    heroDesc:
      "Welcome to my website portfolio. Navigate through the system using the menu.",
    ctaAbout: "ACCESS PROFILE",
    ctaProject: "VIEW PROJECTS",

    // about.html
    aboutTitle: "ABOUT_ME.EXE",
    aboutSub: "SYSTEM PROFILE LOADED",
    bioText:
      "I'm a passionate developer and creator who loves building things with technology. Always learning, always creating.",
    profileRole: "// DEVELOPER & CREATOR",
    statProjects: "Projects",
    statAwards: "Awards",
    statYears: "Years",
    skillsTitle: "// SKILLS",
    achieveTitle: "// ACHIEVEMENTS",
    achMiniHkico: "HKICO 2026 – International Level - Gold Medal",
    achMiniOsp: "OSP 2026 – Provincial Level - Gold Medal",
    achMiniOsh: "OSH 2026 – National Level - Gold Medal",
    seeMoreAch: "VIEW ALL ACHIEVEMENTS →",
    hobbyTitle: "// HOBBIES",
    hobbyCoding: "💻 Coding",
    hobbyGaming: "🎮 Gaming",
    hobbyMusic: "🎵 Music",
    hobbyDesign: "🎨 Design",
    hobbyTraveling: "🌏 Traveling",
    hobbyPhotography: "📷 Photography",
    hobbyAI: "🤖 AI & Tech",

    // achievement.html
    achPageTitle: "ACHIEVEMENT.LOG",
    achSub: "CERTIFICATES & HONORS",
    achPageDesc:
      "Unlocked achievements and earned certificates throughout the journey.",
    statCert: "Certificates",
    statComp: "Competition",
    statDedication: "Dedication",
    certTitle4: "Competition Winner Certificates",
    certClickHint: "💡 Click any card below to view the full certificate (PDF)",
    catInternational: "INTERNATIONAL COMPETITION",
    catProvincial: "PROVINCIAL COMPETITION",
    catNational: "NATIONAL COMPETITION",
    certRibbonGold: "GOLD MEDAL",
    certLevelGold: "🏅 GOLD MEDAL",
    certBadgeVerified: "VERIFIED",
    certTitle1: "HKICO",
    certDesc1:
      "Gold Award — Senior Secondary Group in Python, Hong Kong International Computational Olympiad Heat Round 2025–2026",
    certTitle2: "OSP",
    certDesc2: "Gold Medal — Provincial Science Olympiad (OSP) 2026",
    certTitle3: "OSH",
    certDesc3: "Gold Medal — National Education Day Science Olympiad 2026",
    certTitle5: "OMNI",
    certDesc5:
      "Gold Medal — Indonesian National Mathematics Olympiad (OMNI) 2026, Senior High School Informatics Olympiad, National Level",

    // project.html
    projPageTitle: "PROJECT.DIR",
    projSub: "WORK IN PROGRESS...",
    projDesc: "My web portfolio project.",
    projEmpty: "No projects loaded yet. Check back soon.",
    mySiteLabel: "MY SITE",
    viewProjectBtn: "VIEW PROJECT →",
    techStackLabel: "// TECH STACK",
    videoComingSoonTitle: "VIDEO COMING SOON",
    videoComingSoonSub: "// Demo video not yet uploaded",
    visitSiteBtn: "🌐 VISIT SITE",
    sourceCodeBtn: "</> SOURCE CODE",
    projMbfCardDesc:
      "The MBI Big Fair (MBF) is an annual event organized by MBI Amanatul Ummah in Pacet, Mojokerto.",
    projMbfModalDesc:
      "The MBI Big Fair (MBF) is an annual event organized by MBI Amanatul Ummah in Pacet, Mojokerto. Now in its 17th year, the MBI Big Fair continues its tradition as a prestigious competition platform featuring a variety of contests and a series of inspiring events. The event is made even more vibrant by the creative, innovative, and extraordinary works of MBI students, making MBF a stage for the expression of talent, imagination, and achievement.",
    projJamuDesc:
      "A website I created myself called \u201CJamu Bu Retno\u201D using HTML, CSS, and JavaScript",
    projCompSciGameCardDesc:
      "An educational game to make learning English more fun through interactive animations.",
    projCompSciGameDesc:
      "Computer Science Game Project is an educational game built to make learning English more engaging and enjoyable. It combines interactive gameplay with playful animations and simple game mechanics, turning vocabulary and grammar practice into a fun experience so learners stay motivated instead of getting bored with traditional study methods.",
  },
  id: {
    // navbar (shared across all pages)
    navHome: "BERANDA",
    navAbout: "TENTANG SAYA",
    navAchievement: "PENCAPAIAN",
    navProject: "PROYEK",
    navHeader: "// NAVIGASI",
    langBtnLabel: "BAHASA",

    // index.html
    badge: "// SISTEM AKTIF",
    tagline: "DEVELOPER · KREATOR · GAMER",
    heroDesc:
      "Selamat datang di website portofolio saya. Navigasi melalui sistem menggunakan menu.",
    ctaAbout: "LIHAT PROFIL",
    ctaProject: "LIHAT PROYEK",

    // about.html
    aboutTitle: "TENTANG_SAYA.EXE",
    aboutSub: "PROFIL SISTEM DIMUAT",
    bioText:
      "Saya adalah developer dan kreator yang penuh semangat, senang membangun sesuatu dengan teknologi. Selalu belajar, selalu berkarya.",
    profileRole: "// DEVELOPER & KREATOR",
    statProjects: "Proyek",
    statAwards: "Penghargaan",
    statYears: "Tahun",
    skillsTitle: "// KEAHLIAN",
    achieveTitle: "// PENCAPAIAN",
    achMiniHkico: "HKICO 2026 – Tingkat Internasional - Medali Emas",
    achMiniOsp: "OSP 2026 – Tingkat Provinsi - Medali Emas",
    achMiniOsh: "OSH 2026 – Tingkat Nasional - Medali Emas",
    seeMoreAch: "LIHAT SEMUA PENCAPAIAN →",
    hobbyTitle: "// HOBI",
    hobbyCoding: "💻 Coding",
    hobbyGaming: "🎮 Gaming",
    hobbyMusic: "🎵 Musik",
    hobbyDesign: "🎨 Desain",
    hobbyTraveling: "🌏 Traveling",
    hobbyPhotography: "📷 Fotografi",
    hobbyAI: "🤖 AI & Teknologi",

    // achievement.html
    achPageTitle: "PENCAPAIAN.LOG",
    achSub: "SERTIFIKAT & PENGHARGAAN",
    achPageDesc: "Pencapaian dan sertifikat yang diraih sepanjang perjalanan.",
    statCert: "Sertifikat",
    statComp: "Kompetisi",
    statDedication: "Dedikasi",
    certTitle4: "Sertifikat Juara Kompetisi",
    certClickHint: "💡 Klik salah satu kartu di bawah untuk melihat sertifikat lengkap (PDF)",
    catInternational: "KOMPETISI INTERNASIONAL",
    catProvincial: "KOMPETISI PROVINSI",
    catNational: "KOMPETISI NASIONAL",
    certRibbonGold: "MEDALI EMAS",
    certLevelGold: "🏅 MEDALI EMAS",
    certBadgeVerified: "TERVERIFIKASI",
    certTitle1: "HKICO",
    certDesc1:
      "Gold Award — Kelompok SMA dalam Python, Hong Kong International Computational Olympiad Heat Round 2025–2026",
    certTitle2: "OSP",
    certDesc2: "Medali Emas — Olimpiade Sains Provinsi (OSP) 2026",
    certTitle3: "OSH",
    certDesc3: "Medali Emas — olimpiade sains hari pendidikan nasional 2026",
    certTitle5: "OMNI",
    certDesc5:
      "Medali Emas — Olimpiade Matematika Nasional Indonesia (OMNI) 2026, Olimpiade Informatika SMA, Tingkat Nasional",

    // project.html
    projPageTitle: "PROYEK.DIR",
    projSub: "DALAM PENGERJAAN...",
    projDesc: "Proyek website portofolio saya.",
    projEmpty: "Belum ada proyek yang dimuat. Kembali lagi nanti.",
    mySiteLabel: "SITUS SAYA",
    viewProjectBtn: "LIHAT PROYEK →",
    techStackLabel: "// TECH STACK",
    videoComingSoonTitle: "VIDEO SEGERA HADIR",
    videoComingSoonSub: "// Video demo belum diunggah",
    visitSiteBtn: "🌐 KUNJUNGI SITUS",
    sourceCodeBtn: "</> KODE SUMBER",
    projMbfCardDesc:
      "MBI Big Fair (MBF) adalah acara tahunan yang diselenggarakan oleh MBI Amanatul Ummah di Pacet, Mojokerto.",
    projMbfModalDesc:
      "MBI Big Fair (MBF) adalah acara tahunan yang diselenggarakan oleh MBI Amanatul Ummah di Pacet, Mojokerto. Kini memasuki tahun ke-17, MBI Big Fair terus melanjutkan tradisinya sebagai ajang kompetisi bergengsi dengan berbagai lomba dan rangkaian acara yang inspiratif. Acara ini semakin semarak berkat karya-karya kreatif, inovatif, dan luar biasa dari siswa-siswi MBI, menjadikan MBF sebagai panggung ekspresi bakat, imajinasi, dan prestasi.",
    projJamuDesc:
      "Sebuah website yang saya buat sendiri bernama \u201CJamu Bu Retno\u201D menggunakan HTML, CSS, dan JavaScript",
    projCompSciGameCardDesc:
      "Sebuah game edukasi untuk membuat belajar bahasa Inggris lebih seru lewat animasi interaktif.",
    projCompSciGameDesc:
      "Computer Science Game Project adalah sebuah game edukasi yang dibuat untuk membuat proses belajar bahasa Inggris menjadi lebih seru dan menyenangkan. Proyek ini memadukan gameplay interaktif dengan animasi yang menarik dan mekanisme permainan sederhana, mengubah latihan kosakata dan tata bahasa menjadi pengalaman yang menyenangkan agar pembelajar tetap termotivasi dan tidak bosan dengan metode belajar konvensional.",
  },
  ja: {
    // navbar (shared across all pages)
    navHome: "ホーム",
    navAbout: "私について",
    navAchievement: "実績",
    navProject: "プロジェクト",
    navHeader: "// ナビゲート",
    langBtnLabel: "言語",

    // index.html
    badge: "// システム起動",
    tagline: "開発者 · クリエイター · ゲーマー",
    heroDesc:
      "私のポートフォリオサイトへようこそ。メニューを使ってサイト内を閲覧してください。",
    ctaAbout: "プロフィールを見る",
    ctaProject: "プロジェクトを見る",

    // about.html
    aboutTitle: "ABOUT_ME.EXE",
    aboutSub: "プロフィール読み込み完了",
    bioText:
      "技術で何かを作ることが大好きな情熱的な開発者です。常に学び、常に創造しています。",
    profileRole: "// 開発者・クリエイター",
    statProjects: "プロジェクト",
    statAwards: "受賞",
    statYears: "年",
    skillsTitle: "// スキル",
    achieveTitle: "// 実績",
    achMiniHkico: "HKICO 2026 – 国際レベル - 金メダル",
    achMiniOsp: "OSP 2026 – 州レベル - 金メダル",
    achMiniOsh: "OSH 2026 – 全国レベル - 金メダル",
    seeMoreAch: "すべての実績を見る →",
    hobbyTitle: "// 趣味",
    hobbyCoding: "💻 コーディング",
    hobbyGaming: "🎮 ゲーム",
    hobbyMusic: "🎵 音楽",
    hobbyDesign: "🎨 デザイン",
    hobbyTraveling: "🌏 旅行",
    hobbyPhotography: "📷 写真",
    hobbyAI: "🤖 AI・テクノロジー",

    // achievement.html
    achPageTitle: "実績ログ",
    achSub: "証明書と受賞歴",
    achPageDesc: "これまでの歩みの中で獲得した実績と証明書。",
    statCert: "証明書",
    statComp: "コンテスト",
    statDedication: "献身度",
    certTitle4: "コンテスト入賞証明書",
    certClickHint: "💡 カードをクリックすると証明書の全文（PDF）が表示されます",
    catInternational: "国際コンテスト",
    catProvincial: "州コンテスト",
    catNational: "全国コンテスト",
    certRibbonGold: "金メダル",
    certLevelGold: "🏅 金メダル",
    certBadgeVerified: "認証済み",
    certTitle1: "HKICO",
    certDesc1:
      "金賞 — 香港国際計算オリンピック ヒートラウンド 2025–2026（高校生部門・Python）",
    certTitle2: "OSP",
    certDesc2: "金メダル — 州科学オリンピック（OSP）2026",
    certTitle3: "OSH",
    certDesc3: "金メダル — 科学オリンピック　国民教育の日 2026",
    certTitle5: "OMNI",
    certDesc5:
      "金メダル — インドネシア全国数学オリンピック（OMNI）2026、高校生情報オリンピック、全国レベル",

    // project.html
    projPageTitle: "プロジェクト一覧",
    projSub: "作業中...",
    projDesc: "私のウェブポートフォリオプロジェクト。",
    projEmpty: "まだプロジェクトはありません。後でまたご覧ください。",
    mySiteLabel: "マイサイト",
    viewProjectBtn: "プロジェクトを見る →",
    techStackLabel: "// 技術スタック",
    videoComingSoonTitle: "動画準備中",
    videoComingSoonSub: "// デモ動画は未アップロードです",
    visitSiteBtn: "🌐 サイトを見る",
    sourceCodeBtn: "</> ソースコード",
    projMbfCardDesc:
      "MBI Big Fair（MBF）は、モジョクルト県パチェットにあるMBI Amanatul Ummahが主催する毎年恒例のイベントです。",
    projMbfModalDesc:
      "MBI Big Fair（MBF）は、モジョクルト県パチェットにあるMBI Amanatul Ummahが主催する毎年恒例のイベントです。17回目を迎える今年も、多彩なコンテストとインスピレーションあふれる一連のイベントを特色とする、権威あるコンペティションの場としての伝統を続けています。MBIの学生たちによる創造的で革新的、そして素晴らしい作品の数々が、このイベントをさらに盛り上げ、MBFは才能、想像力、そして成果を表現する舞台となっています。",
    projJamuDesc:
      "HTML、CSS、JavaScriptを使って自分で制作したウェブサイト「Jamu Bu Retno」",
    projCompSciGameCardDesc:
      "インタラクティブなアニメーションを通じて、英語学習をより楽しくするための教育ゲームです。",
    projCompSciGameDesc:
      "Computer Science Game Projectは、英語学習をより楽しく、魅力的なものにするために作られた教育ゲームです。インタラクティブなゲームプレイと遊び心のあるアニメーション、シンプルなゲームメカニクスを組み合わせることで、単語や文法の練習を楽しい体験に変え、従来の学習方法で飽きてしまうことなく、学習者のモチベーションを維持できるよう工夫されています。",
  },
};

let currentLang = localStorage.getItem("cyber_lang") || "en";

function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem("cyber_lang", lang);
  const t = translations[lang] || translations["en"];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });
  document.dispatchEvent(new CustomEvent("i18nchange", { detail: { lang } }));
}

document.querySelectorAll(".lang-opt").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    applyTranslations(lang);
    translateBtn.classList.remove("active");
    langDropdown.classList.remove("show");
  });
});

// Apply saved lang on load
applyTranslations(currentLang);

// ============= TERMINAL TYPEWRITER (index only) =============
const terminalBody = document.getElementById("terminalBody");
if (terminalBody) {
  const lines = [
    { cls: "prompt", text: "root@cyber:~$ " },
    { cls: "cmd", text: "init --portfolio", delay: 60 },
    { cls: "out", text: "\n> Loading system modules...", delay: 800 },
    { cls: "out", text: "\n> Mounting skill database...", delay: 400 },
    { cls: "out", text: "\n> Connecting to achievement server...", delay: 400 },
    { cls: "out", text: "\n> Rendering UI components...", delay: 400 },
    { cls: "err", text: "\n[OK] All systems operational.", delay: 500 },
    { cls: "prompt", text: "\n\nroot@cyber:~$ " },
    { cls: "cmd", text: "welcome --user", delay: 60 },
    {
      cls: "out",
      text: "\n> Hello, visitor. Welcome to the system.",
      delay: 800,
    },
    { cls: "out", text: "\n> Navigate using the ☰ menu.", delay: 300 },
  ];

  let lineIdx = 0,
    charIdx = 0;
  let currentEl = null;

  function typeNext() {
    if (lineIdx >= lines.length) {
      const cursor = document.createElement("span");
      cursor.className = "cursor";
      terminalBody.appendChild(cursor);
      return;
    }
    const line = lines[lineIdx];
    if (charIdx === 0) {
      currentEl = document.createElement("span");
      currentEl.className = `line ${line.cls}`;
      terminalBody.appendChild(currentEl);
    }
    if (charIdx < line.text.length) {
      const ch = line.text[charIdx];
      if (ch === "\n") {
        currentEl.appendChild(document.createElement("br"));
      } else {
        currentEl.appendChild(document.createTextNode(ch));
      }
      charIdx++;
      setTimeout(typeNext, line.delay || 40);
    } else {
      lineIdx++;
      charIdx = 0;
      setTimeout(typeNext, line.delay || 40);
    }
  }
  setTimeout(typeNext, 500);
}
