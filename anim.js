// =====================================================
//  OPENING ANIMATION  (index.html only, once per session)
// =====================================================

const IS_INDEX = document.getElementById('opening-overlay') !== null;

function runOpeningAnimation() {
  const overlay = document.getElementById('opening-overlay');
  if (!overlay) return;

  // Block scroll while overlay is visible
  document.body.style.overflow = 'hidden';

  // Animate loader percentage counter
  const pctEl = overlay.querySelector('.op-loader-pct');
  let pct = 0;
  const pctInterval = setInterval(() => {
    pct = Math.min(pct + Math.floor(Math.random() * 4) + 1, 100);
    if (pctEl) pctEl.textContent = pct + '%';
    if (pct >= 100) clearInterval(pctInterval);
  }, 35);

  // Total animation is ~3.8s, then exit
  setTimeout(() => {
    overlay.classList.add('op-exit');
    // After exit anim (0.7s), remove overlay and unlock scroll
    setTimeout(() => {
      overlay.remove();
      document.body.style.overflow = '';
      // Now trigger page content reveal
      initScrollReveal(true);
    }, 700);
  }, 3800);
}

function skipOpening() {
  const overlay = document.getElementById('opening-overlay');
  if (!overlay) return;
  overlay.remove();
  document.body.style.overflow = '';
  initScrollReveal(true);
}

// =====================================================
//  SCROLL REVEAL
// =====================================================

let revealObserver = null;

function initScrollReveal(immediate) {
  const elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  if (immediate) {
    // Reveal elements already in viewport immediately (with tiny stagger)
    // Others will be revealed on scroll
    elements.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        // Already visible — reveal with small built-in delay
        setTimeout(() => el.classList.add('revealed'), 0);
      }
    });
  }

  // IntersectionObserver for scroll-triggered reveals
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => {
    if (!el.classList.contains('revealed')) {
      revealObserver.observe(el);
    }
  });
}

// =====================================================
//  INIT ON LOAD
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('opening-overlay');

  if (overlay) {
    // index.html: check sessionStorage
    const seen = sessionStorage.getItem('cyber_intro_seen');
    if (seen) {
      // Skip animation - seen this session
      skipOpening();
    } else {
      sessionStorage.setItem('cyber_intro_seen', '1');
      runOpeningAnimation();
    }
  } else {
    // Other pages: reveal immediately on load
    initScrollReveal(true);
  }
});
