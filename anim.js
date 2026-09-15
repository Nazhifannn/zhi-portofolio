// =====================================================
//  OPENING ANIMATION  (index.html only, once per session)
// =====================================================

const IS_INDEX = document.getElementById('opening-overlay') !== null;

function runOpeningAnimation() {
  const overlay = document.getElementById('opening-overlay');
  if (!overlay) return;

  // Block scroll while overlay is visible
  document.body.style.overflow = 'hidden';

  // Animate the loading bar and the percentage counter together, driven by
  // the same timeline, so the number always matches how "full" the bar is.
  const pctEl = overlay.querySelector('.op-loader-pct');
  const fillEl = overlay.querySelector('.op-loader-fill');

  const startDelay = 900; // ms — matches the loader wrap's fade-in delay
  const duration = 2400; // ms — total time to go from 0% to 100%

  // Approximates the previous cubic-bezier(0.4, 0, 0.2, 1) easing so the
  // motion feels the same as before, just synced.
  function ease(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  let startTime = null;
  function tick(timestamp) {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const t = Math.min(elapsed / duration, 1);
    const progress = ease(t) * 100;

    if (fillEl) fillEl.style.width = progress + '%';
    if (pctEl) pctEl.textContent = Math.round(progress) + '%';

    if (t < 1) {
      requestAnimationFrame(tick);
    }
  }

  setTimeout(() => requestAnimationFrame(tick), startDelay);

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
