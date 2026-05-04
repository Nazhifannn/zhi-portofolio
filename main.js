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
const translations = {
  en: {
    badge: "// SYSTEM ONLINE",
    tagline: "DEVELOPER · CREATOR · INNOVATOR",
    heroDesc:
      "Welcome to my cyber portfolio. Navigate through the system using the menu.",
    ctaAbout: "ACCESS PROFILE",
    ctaProject: "VIEW PROJECTS",
    // About
    aboutTitle: "ABOUT_ME.EXE",
    aboutSub: "SYSTEM PROFILE LOADED",
    bioText:
      "I'm a passionate developer and creator who loves building things with technology. Always learning, always creating.",
    skillsTitle: "// SKILLS",
    achieveTitle: "// ACHIEVEMENTS",
    hobbyTitle: "// HOBBIES",
    // Achievement
    achPageTitle: "ACHIEVEMENT.LOG",
    achSub: "CERTIFICATES & HONORS",
    certTitle1: "HKICO",
    certDesc1: "Gold medalist in Hongkong International Coding Olympiad",
    certTitle2: "Study Exchange Certificate",
    certDesc2: "International study exchange program participant",
    certTitle3: "Excellence Award",
    certDesc3: "Outstanding academic performance recognition",
    certTitle4: "Competition Certificates",
    // Project
    projPageTitle: "PROJECT.DIR",
    projSub: "WORK IN PROGRESS...",
    projEmpty: "No projects loaded yet. Check back soon.",
  },
  id: {
    badge: "// SISTEM AKTIF",
    tagline: "DEVELOPER · KREATOR · INOVATOR",
    heroDesc:
      "Selamat datang di portofolio cyber saya. Navigasi melalui sistem menggunakan menu.",
    ctaAbout: "LIHAT PROFIL",
    ctaProject: "LIHAT PROYEK",
    aboutTitle: "TENTANG_SAYA.EXE",
    aboutSub: "PROFIL SISTEM DIMUAT",
    bioText:
      "Saya adalah developer dan kreator yang penuh semangat, senang membangun sesuatu dengan teknologi. Selalu belajar, selalu berkarya.",
    skillsTitle: "// KEAHLIAN",
    achieveTitle: "// PENCAPAIAN",
    hobbyTitle: "// HOBI",
    achPageTitle: "PENCAPAIAN.LOG",
    achSub: "SERTIFIKAT & PENGHARGAAN",
    certTitle1: "HKICO",
    certDesc1: "Gold medalist dalam Hongkong International Coding Olympiad",
    certTitle2: "Sertifikat Study Exchange",
    certDesc2: "Peserta program pertukaran pelajar internasional",
    certTitle3: "Penghargaan Keunggulan",
    certDesc3: "Pengakuan prestasi akademik luar biasa",
    certTitle4: "Sertifikat Kompetisi",
    projPageTitle: "PROYEK.DIR",
    projSub: "DALAM PENGERJAAN...",
    projEmpty: "Belum ada proyek yang dimuat. Kembali lagi nanti.",
  },
  ja: {
    badge: "// システム起動",
    tagline: "開発者 · クリエイター · イノベーター",
    heroDesc:
      "サイバーポートフォリオへようこそ。メニューからシステムをナビゲートしてください。",
    ctaAbout: "プロフィールを見る",
    ctaProject: "プロジェクトを見る",
    aboutTitle: "ABOUT_ME.EXE",
    aboutSub: "プロフィール読み込み完了",
    bioText:
      "技術で何かを作ることが大好きな情熱的な開発者です。常に学び、常に創造しています。",
    skillsTitle: "// スキル",
    achieveTitle: "// 実績",
    hobbyTitle: "// 趣味",
    achPageTitle: "実績ログ",
    achSub: "証明書と受賞歴",
    certTitle1: "HKICO",
    certDesc1: "全国プログラミングコンテストで金メダル",
    certTitle2: "留学証明書",
    certDesc2: "国際留学プログラム参加者",
    certTitle3: "優秀賞",
    certDesc3: "優秀な学業成績の表彰",
    certTitle4: "コンペティション証明書",
    projPageTitle: "プロジェクト一覧",
    projSub: "作業中...",
    projEmpty: "まだプロジェクトはありません。後でまたご覧ください。",
  },
  ko: {
    badge: "// 시스템 온라인",
    tagline: "개발자 · 창작자 · 혁신자",
    heroDesc:
      "사이버 포트폴리오에 오신 것을 환영합니다. 메뉴를 사용하여 탐색하세요.",
    ctaAbout: "프로필 보기",
    ctaProject: "프로젝트 보기",
    aboutTitle: "ABOUT_ME.EXE",
    aboutSub: "시스템 프로필 로드됨",
    bioText:
      "기술로 무언가를 만드는 것을 좋아하는 열정적인 개발자입니다. 항상 배우고, 항상 창조합니다.",
    skillsTitle: "// 기술",
    achieveTitle: "// 성취",
    hobbyTitle: "// 취미",
    achPageTitle: "성취 로그",
    achSub: "인증서 및 수상",
    certTitle1: "HKICO",
    certDesc1: "홍콩 국제 코딩 올림피아드 금메달",
    certTitle2: "교환학생 인증서",
    certDesc2: "국제 교환학생 프로그램 참가자",
    certTitle3: "우수상",
    certTitle4: "대회 인증서",
    certDesc3: "뛰어난 학업 성취 인정",
    projPageTitle: "프로젝트 디렉토리",
    projSub: "작업 중...",
    projEmpty: "아직 프로젝트가 없습니다. 나중에 다시 확인하세요.",
  },
  zh: {
    badge: "// 系统在线",
    tagline: "开发者 · 创作者 · 创新者",
    heroDesc: "欢迎来到我的赛博作品集。使用菜单浏览系统。",
    ctaAbout: "查看简介",
    ctaProject: "查看项目",
    aboutTitle: "ABOUT_ME.EXE",
    aboutSub: "系统档案已加载",
    bioText:
      "我是一位充满激情的开发者和创作者，热爱用技术创造事物。不断学习，不断创造。",
    skillsTitle: "// 技能",
    achieveTitle: "// 成就",
    hobbyTitle: "// 爱好",
    achPageTitle: "成就日志",
    achSub: "证书与荣誉",
    certTitle1: "HKICO",
    certDesc1: " Hongkong International Coding Olympiad 金牌获得者",
    certTitle2: "交换生证书",
    certDesc2: "国际交换生项目参与者",
    certTitle3: "优秀奖",
    certTitle4: "竞赛证书",
    certDesc3: "杰出学业表现认可",
    projPageTitle: "项目目录",
    projSub: "进行中...",
    projEmpty: "暂无项目。请稍后再来查看。",
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
