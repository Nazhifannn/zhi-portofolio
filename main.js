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
    // index.html
    badge: "// SYSTEM ONLINE",
    tagline: "DEVELOPER · CREATOR · INNOVATOR",
    heroDesc:
      "Welcome to my website portfolio. Navigate through the system using the menu.",
    ctaAbout: "ACCESS PROFILE",
    ctaProject: "VIEW PROJECTS",

    // about.html
    aboutTitle: "ABOUT_ME.EXE",
    aboutSub: "SYSTEM PROFILE LOADED",
    bioText:
      "I'm a passionate developer and creator who loves building things with technology. Always learning, always creating.",
    skillsTitle: "// SKILLS",
    achieveTitle: "// ACHIEVEMENTS",
    hobbyTitle: "// HOBBIES",

    // achievement.html
    achPageTitle: "ACHIEVEMENT.LOG",
    achSub: "CERTIFICATES & HONORS",
    certTitle4: "Competition Certificates",
    certTitle1: "HKICO",
    certDesc1:
      "Gold Award — Senior Secondary Group in Python, Hong Kong International Computational Olympiad Heat Round 2025–2026",
    certTitle2: "OSP",
    certDesc2: "Gold Medal — Provincial Science Olympiad (OSP) 2026",
    certTitle3: "OSH",
    certDesc3: "Gold Medal — National Education Day Science Olympiad 2026",

    // project.html
    projPageTitle: "PROJECT.DIR",
    projSub: "WORK IN PROGRESS...",
    projDesc: "My web portfolio project.",
    projEmpty: "No projects loaded yet. Check back soon.",
  },
  id: {
    // index.html
    badge: "// SISTEM AKTIF",
    tagline: "DEVELOPER · KREATOR · INOVATOR",
    heroDesc:
      "Selamat datang di website portofolio saya. Navigasi melalui sistem menggunakan menu.",
    ctaAbout: "LIHAT PROFIL",
    ctaProject: "LIHAT PROYEK",

    // about.html
    aboutTitle: "TENTANG_SAYA.EXE",
    aboutSub: "PROFIL SISTEM DIMUAT",
    bioText:
      "Saya adalah developer dan kreator yang penuh semangat, senang membangun sesuatu dengan teknologi. Selalu belajar, selalu berkarya.",
    skillsTitle: "// KEAHLIAN",
    achieveTitle: "// PENCAPAIAN",
    hobbyTitle: "// HOBI",

    // achievement.html
    achPageTitle: "PENCAPAIAN.LOG",
    achSub: "SERTIFIKAT & PENGHARGAAN",
    certTitle4: "Sertifikat Kompetisi",
    certTitle1: "HKICO",
    certDesc1:
      "Gold Award — Kelompok SMA dalam Python, Hong Kong International Computational Olympiad Heat Round 2025–2026",
    certTitle2: "OSP",
    certDesc2: "Medali Emas — Olimpiade Sains Provinsi (OSP) 2026",
    certTitle3: "OSH",
    certDesc3: "Medali Emas — olimpiade sains hari pendidikan nasional 2026",

    // project.html
    projPageTitle: "PROYEK.DIR",
    projSub: "DALAM PENGERJAAN...",
    projDesc: "Proyek website portofolio saya.",
    projEmpty: "Belum ada proyek yang dimuat. Kembali lagi nanti.",
  },
  ja: {
    // index.html
    badge: "// システム起動",
    tagline: "開発者 · クリエイター · イノベーター",
    heroDesc:
      "私のポートフォリオサイトへようこそ。メニューを使ってサイト内を閲覧してください。",
    ctaAbout: "プロフィールを見る",
    ctaProject: "プロジェクトを見る",

    // about.html
    aboutTitle: "ABOUT_ME.EXE",
    aboutSub: "プロフィール読み込み完了",
    bioText:
      "技術で何かを作ることが大好きな情熱的な開発者です。常に学び、常に創造しています。",
    skillsTitle: "// スキル",
    achieveTitle: "// 実績",
    hobbyTitle: "// 趣味",

    // achievement.html
    achPageTitle: "実績ログ",
    achSub: "証明書と受賞歴",
    certTitle4: "コンペティション証明書",
    certTitle1: "HKICO",
    certDesc1:
      "金賞 — 香港国際計算オリンピック ヒートラウンド 2025–2026（高校生部門・Python）",
    certTitle2: "OSP",
    certDesc2: "金メダル — 州科学オリンピック（OSP）2026",
    certTitle3: "OSH",
    certDesc3: "金メダル — 科学オリンピック　国民教育の日 2026",

    // project.html
    projPageTitle: "プロジェクト一覧",
    projSub: "作業中...",
    projDesc: "私のウェブポートフォリオプロジェクト。",
    projEmpty: "まだプロジェクトはありません。後でまたご覧ください。",
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
