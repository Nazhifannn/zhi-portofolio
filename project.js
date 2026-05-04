// =====================================================
//  PROJECT.JS
//  - Filter tabs: mysite | template | ai
//  - Modal dengan video player HTML5
// =====================================================

// ===== FILTER TABS =====
const ftabs = document.querySelectorAll(".ftab");
const projCards = document.querySelectorAll(".proj-card");

ftabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Update active tab
    ftabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.getAttribute("data-filter");

    projCards.forEach((card) => {
      const cardFilter = card.getAttribute("data-filter");
      if (filter === "all" || cardFilter === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// ===== MODAL ELEMENTS =====
const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("projModalClose");
const modalDot = document.getElementById("projModalDot");
const modalCat = document.getElementById("projModalCategory");
const modalTitle = document.getElementById("projModalTitle");
const modalDesc = document.getElementById("projModalDesc");
const techTags = document.getElementById("projTechTags");
const siteBtn = document.getElementById("projSiteBtn");
const codeBtn = document.getElementById("projCodeBtn");
const actionSoon = document.getElementById("projActionSoon");

// Video elements
const videoWrap = document.getElementById("projVideoWrap");
const videoSoon = document.getElementById("projVideoSoon");
const videoEl = document.getElementById("projVideo");
const videoSrc = document.getElementById("projVideoSrc");
const vsSoonIcon = document.getElementById("projVsSoonIcon");

// Dot colors per category
const dotColors = {
  mysite: "#00f5ff",
  template: "#ff00aa",
  ai: "#a855f7",
};

// ===== OPEN MODAL =====
function openModal(card) {
  const title = card.getAttribute("data-title") || "";
  const cat = card.getAttribute("data-category") || "";
  const filter = card.getAttribute("data-filter") || "ai";
  const desc = card.getAttribute("data-desc") || "";
  const techStr = card.getAttribute("data-tech") || "";
  const videoUrl = card.getAttribute("data-video") || "";
  const siteUrl = card.getAttribute("data-site") || "";
  const codeUrl = card.getAttribute("data-code") || "";
  const imgPrompt = card.getAttribute("data-img-prompt") || "";
  const imgResult = card.getAttribute("data-img-result") || "";

  // Texts
  modalCat.textContent = cat;
  modalTitle.textContent = title;
  modalDesc.textContent = desc;

  // Accent dot color
  const dotColor = dotColors[filter] || "#a855f7";
  modalDot.style.background = dotColor;
  modalDot.style.color = dotColor;
  modalCat.style.color = dotColor;

  // Tech tags
  techTags.innerHTML = "";
  techStr.split(",").forEach((t) => {
    t = t.trim();
    if (!t) return;
    const span = document.createElement("span");
    span.className = "proj-tech-tag";
    span.textContent = t;
    techTags.appendChild(span);
  });

  // ===== AREA VIDEO / GAMBAR / DEMO =====
  const demoKey = card.getAttribute("data-demo") || "";

  if (demoKey) {
    // Sembunyikan video & slider
    videoWrap.style.display = "none";
    videoSoon.style.display = "none";
    const sliderEl = document.getElementById("projImgSlider");
    if (sliderEl) sliderEl.style.display = "none";

    // Buat atau reset demo container
    let demoWrap = document.getElementById("projDemoWrap");
    if (!demoWrap) {
      demoWrap = document.createElement("div");
      demoWrap.id = "projDemoWrap";
      demoWrap.className = "proj-demo-wrap";
      document.getElementById("projVideoArea").appendChild(demoWrap);
    }
    demoWrap.style.display = "flex";
    demoWrap.innerHTML = getDemoHTML(demoKey);

    // Init demo interactivity after render
    initDemo(demoKey, demoWrap);
  } else if (filter === "ai" && (imgPrompt || imgResult)) {
    // Sembunyikan video area bawaan, tampilkan slider gambar
    videoWrap.style.display = "none";
    videoSoon.style.display = "none";

    // Buat atau reset slider container
    let sliderWrap = document.getElementById("projImgSlider");
    if (!sliderWrap) {
      sliderWrap = document.createElement("div");
      sliderWrap.id = "projImgSlider";
      sliderWrap.className = "proj-img-slider";
      document.getElementById("projVideoArea").appendChild(sliderWrap);
    }

    const slides = [
      {
        src: imgPrompt,
        label: "01 // PROMPT",
        sublabel: "Input prompt yang digunakan",
      },
      {
        src: imgResult,
        label: "02 // RESULT",
        sublabel: "Output / hasil dari AI",
      },
    ].filter((s) => s.src);

    let currentSlide = 0;

    function renderSlider() {
      sliderWrap.innerHTML = `
        <div class="pis-track">
          ${slides
            .map(
              (s, i) => `
            <div class="pis-slide ${i === currentSlide ? "active" : ""}">
              <img src="${s.src}" alt="${s.label}" class="pis-img" />
            </div>
          `,
            )
            .join("")}
        </div>
        <div class="pis-controls">
          <button class="pis-arrow pis-prev" id="pisArrowPrev" ${currentSlide === 0 ? "disabled" : ""}>&#8592;</button>
          <div class="pis-info">
            <div class="pis-label">${slides[currentSlide].label}</div>
            <div class="pis-sublabel">${slides[currentSlide].sublabel}</div>
          </div>
          <button class="pis-arrow pis-next" id="pisArrowNext" ${currentSlide === slides.length - 1 ? "disabled" : ""}>&#8594;</button>
        </div>
        <div class="pis-dots">
          ${slides.map((_, i) => `<span class="pis-dot ${i === currentSlide ? "active" : ""}" data-idx="${i}"></span>`).join("")}
        </div>
      `;

      // Bind arrows
      const prevBtn = sliderWrap.querySelector("#pisArrowPrev");
      const nextBtn = sliderWrap.querySelector("#pisArrowNext");
      if (prevBtn)
        prevBtn.addEventListener("click", () => {
          if (currentSlide > 0) {
            currentSlide--;
            renderSlider();
          }
        });
      if (nextBtn)
        nextBtn.addEventListener("click", () => {
          if (currentSlide < slides.length - 1) {
            currentSlide++;
            renderSlider();
          }
        });

      // Bind dots
      sliderWrap.querySelectorAll(".pis-dot").forEach((dot) => {
        dot.addEventListener("click", () => {
          currentSlide = parseInt(dot.getAttribute("data-idx"));
          renderSlider();
        });
      });
    }

    renderSlider();
    sliderWrap.style.display = "flex";
  } else {
    // Sembunyikan slider & demo jika ada
    const sliderWrap = document.getElementById("projImgSlider");
    if (sliderWrap) sliderWrap.style.display = "none";
    const demoWrap2 = document.getElementById("projDemoWrap");
    if (demoWrap2) demoWrap2.style.display = "none";

    // VIDEO normal
    if (videoUrl) {
      videoSoon.style.display = "none";
      videoWrap.style.display = "flex";
      videoSrc.src = videoUrl;
      videoSrc.type = getVideoType(videoUrl);
      videoEl.load();
    } else {
      videoWrap.style.display = "none";
      videoSoon.style.display = "flex";
      vsSoonIcon.textContent =
        filter === "ai" ? "🤖" : filter === "mysite" ? "🌐" : "📄";
    }
  }

  // Links
  const hasLink = siteUrl || codeUrl;

  if (siteUrl) {
    siteBtn.href = siteUrl;
    siteBtn.style.display = "inline-block";
  } else {
    siteBtn.style.display = "none";
  }

  if (codeUrl) {
    codeBtn.href = codeUrl;
    codeBtn.style.display = "inline-block";
  } else {
    codeBtn.style.display = "none";
  }

  actionSoon.style.display = hasLink ? "none" : "inline-block";

  // Open overlay
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

// Detect video MIME type from filename
function getVideoType(url) {
  if (url.endsWith(".webm")) return "video/webm";
  if (url.endsWith(".ogg") || url.endsWith(".ogv")) return "video/ogg";
  return "video/mp4"; // default
}

// =====================================================
//  INTERACTIVE DEMO SYSTEM
// =====================================================

function getDemoHTML(key) {
  if (key === "checkboxes") {
    return `
  <fieldset>
  <legend class="sr-only">Checkboxes</legend>

  <div class="flex flex-col items-start gap-3">
    <label for="Option1" class="inline-flex items-center gap-3">
      <input type="checkbox" class="size-5 rounded border-gray-300 shadow-sm" id="Option1">

      <span class="font-medium text-gray-700"> Option 1 </span>
    </label>

    <label for="Option2" class="inline-flex items-center gap-3">
      <input type="checkbox" class="size-5 rounded border-gray-300 shadow-sm" id="Option2">

      <span class="font-medium text-gray-700"> Option 2 </span>
    </label>

    <label for="Option3" class="inline-flex items-center gap-3">
      <input type="checkbox" class="size-5 rounded border-gray-300 shadow-sm" id="Option3">

      <span class="font-medium text-gray-700"> Option 3 </span>
    </label>
  </div>
</fieldset>
    `;
  }
  return '<div style="padding:40px;text-align:center;color:#a855f7;font-family:monospace">// DEMO NOT FOUND</div>';
}
function getDemoHTML(key) {
  if (key === "options group") {
    return `
 <label for="Headline">
  <span class="text-sm font-semibold"> Headliner </span>

  <select name="Headline" id="Headline" class="mt-0.5 w-full border-2 border-black shadow-[4px_4px_0_0] focus:ring-2 focus:ring-yellow-300 sm:text-sm">
    <option value="">Please select</option>

    <optgroup label="A">
      <option value="AK">Albert King</option>
    </optgroup>

    <optgroup label="B">
      <option value="BBK">B.B King</option>
      <option value="BG">Buddy Guy</option>
    </optgroup>

    <optgroup label="E">
      <option value="EC">Eric Clapton</option>
    </optgroup>

    <optgroup label="J">
      <option value="JM">John Mayer</option>
      <option value="JH">Jimi Hendrix</option>
    </optgroup>

    <optgroup label="S">
      <option value="SRV">Stevie Ray Vaughn</option>
    </optgroup>
  </select>
</label>
    `;
  }
  return '<div style="padding:40px;text-align:center;color:#a855f7;font-family:monospace">// DEMO NOT FOUND</div>';
}
function initDemo(key, wrap) {
  if (key !== "cyber-portfolio") return;

  // NAV switching
  const navItems = wrap.querySelectorAll(".cpd-nav-item");
  const sections = wrap.querySelectorAll(".cpd-section");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const target = item.getAttribute("data-section");
      navItems.forEach((n) => n.classList.remove("active"));
      item.classList.add("active");
      sections.forEach((s) => {
        s.classList.toggle("active", s.id === "cpd-" + target);
      });
    });
  });

  // Animate skill bars after slight delay
  setTimeout(() => {
    wrap.querySelectorAll(".cpd-bar-fill").forEach((bar) => {
      const w = bar.style.width;
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.width = w;
      }, 100);
    });
  }, 300);

  // Particles on home
  const particlesEl = wrap.querySelector("#cpdParticles");
  if (particlesEl) {
    for (let i = 0; i < 18; i++) {
      const p = document.createElement("div");
      p.className = "cpd-particle";
      p.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-delay:${Math.random() * 4}s;animation-duration:${3 + Math.random() * 4}s`;
      particlesEl.appendChild(p);
    }
  }

  // Typewriter cursor blink on hero name
  let visible = true;
  const cursorEl = wrap.querySelector(".cpd-cursor");
  if (cursorEl) {
    setInterval(() => {
      cursorEl.style.opacity = (visible = !visible) ? "1" : "0";
    }, 500);
  }

  // Contact send button
  const sendBtn = wrap.querySelector("#cpdSendBtn");
  const confirm = wrap.querySelector("#cpdConfirm");
  if (sendBtn && confirm) {
    sendBtn.addEventListener("click", () => {
      const name = wrap.querySelector("#cpdName").value.trim();
      const msg = wrap.querySelector("#cpdMsg").value.trim();
      if (!name || !msg) {
        sendBtn.textContent = "⚠ FILL ALL FIELDS";
        setTimeout(() => {
          sendBtn.textContent = "SEND.MSG →";
        }, 1500);
        return;
      }
      sendBtn.style.display = "none";
      confirm.style.display = "block";
      setTimeout(() => {
        confirm.style.display = "none";
        sendBtn.style.display = "";
        sendBtn.textContent = "SEND.MSG →";
        wrap.querySelector("#cpdName").value = "";
        wrap.querySelector("#cpdMsg").value = "";
      }, 2500);
    });
  }
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  // Stop & clear video when closing
  if (videoEl) {
    videoEl.pause();
    videoSrc.src = "";
    videoEl.load();
  }

  // Reset demo wrap
  const demoWrap = document.getElementById("projDemoWrap");
  if (demoWrap) {
    demoWrap.style.display = "none";
    demoWrap.innerHTML = "";
  }
}

// ===== EVENT BINDINGS =====

// VIEW PROJECT buttons
document.querySelectorAll(".proj-view-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".proj-card");
    if (card) openModal(card);
  });
});

// Close button
modalClose.addEventListener("click", closeModal);

// Click outside modal box
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
