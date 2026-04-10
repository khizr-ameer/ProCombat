/* ============================================================
   PROCOMBAT — Hero Banner JS (Enhanced)
   ============================================================ */

const SLIDES = [
  {
    image: 'https://www.prosafetywear.com/new/wp-content/uploads/revslider/video-media/PS_31.jpeg',
    tag: 'Premium Combat Gear',
    headingLine1: 'Built for',
    headingLine2: 'Champions',
    sub: 'Custom BJJ Gis, MMA gear, boxing equipment and athleisure manufactured to your exact specifications.',
    cta: { label: 'Explore Products', href: '/pages/products.html' },
    ctaSecondary: { label: 'Get a Quote', href: '/pages/contact.html' },
    badgeValue: '22+',
    badgeLabel: 'Years of Excellence',
    video: '//www.prosafetywear.com/wp-content/uploads/2024/12/PS.mp4',
    videoPoster: '//www.prosafetywear.com/new/wp-content/uploads/revslider/video-media/PS_31.jpeg'
  },
  {
    image: 'https://www.prosafetywear.com/wp-content/uploads/elementor/thumbs/main-01-1-qxfz2rr0yex6prcqnuh0whrq7rsvndr76wm2owez7o.jpg',
    tag: '22+ Years Manufacturing',
    headingLine1: 'Made to',
    headingLine2: 'Your Vision',
    sub: 'Full-service clothing brand development from concept to creation, with quality that exceeds every expectation.',
    cta: { label: 'Our Story', href: '/pages/about.html' },
    ctaSecondary: { label: 'View Products', href: '/pages/products.html' },
    badgeValue: '500+',
    badgeLabel: 'Global Brand Partners'
  },
  {
    image: 'https://www.prosafetywear.com/wp-content/uploads/elementor/thumbs/main-02-qxfz2rr0yex6prcqnuh0whrq7rsvndr76wm2owez7o.jpg',
    tag: 'ISO 9001:2015 Certified',
    headingLine1: 'Unmatched',
    headingLine2: 'Quality',
    sub: 'Performance fabrics that are lightweight, antibacterial, pre-shrunk and anti-odor — built to endure.',
    cta: { label: 'Our Certifications', href: '/pages/about.html#certs' },
    ctaSecondary: { label: 'Contact Us', href: '/pages/contact.html' },
    badgeValue: '50+',
    badgeLabel: 'Countries Served'
  }
];

const HeroBanner = (() => {

  let current = 0;
  let timer = null;
  let container = null;

  const starIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>`;

  /* ── SKELETON markup (injected inside the video slide's right panel) ── */
  function buildSkeleton() {
    return `
      <div class="pc-hero__skeleton" id="heroSkeleton" aria-hidden="true">
        <div class="pc-hero__skeleton-grid">
          <div class="pc-hero__skel-block pc-hero__skel-block--wide"></div>
          <div class="pc-hero__skel-block"></div>
          <div class="pc-hero__skel-block"></div>
          <div class="pc-hero__skel-block pc-hero__skel-block--bar"></div>
        </div>
        <span class="pc-hero__skel-label">
          <span class="pc-hero__skel-dot"></span>
          Loading factory footage
        </span>
      </div>
    `;
  }

  function buildHTML() {
    const leftSlides = SLIDES.map((s, i) => `
      <div class="pc-hero__slide-content ${i === 0 ? 'is-active' : ''}">
        <span class="pc-hero__tag">${s.tag}</span>
        <h1 class="pc-hero__heading">
          ${s.headingLine1}<em>${s.headingLine2}</em>
        </h1>
        <p class="pc-hero__sub">${s.sub}</p>
        <div class="pc-hero__actions">
          <a href="${s.cta.href}" class="pc-hero__btn pc-hero__btn--primary">${s.cta.label}</a>
          <a href="${s.ctaSecondary.href}" class="pc-hero__btn pc-hero__btn--ghost">${s.ctaSecondary.label}</a>
        </div>
      </div>
    `).join('');

    /* Right slides — slide 0 gets a <video>, the rest get <img> as before */
    const rightSlides = SLIDES.map((s, i) => {
      if (i === 0 && s.video) {
        return `
          <div class="pc-hero__slide-image ${i === 0 ? 'is-active' : ''}">
            ${buildSkeleton()}
            <video
              id="heroBgVideo"
              class="pc-hero__bg-video"
              src="${s.video}"
              poster="${s.videoPoster || ''}"
              muted
              loop
              playsinline
              preload="none"
            ></video>
          </div>
        `;
      }
      return `
        <div class="pc-hero__slide-image ${i === 0 ? 'is-active' : ''}">
          <img
            src="${s.image}"
            alt="${s.headingLine1} ${s.headingLine2}"
            loading="${i === 0 ? 'eager' : 'lazy'}"
          />
        </div>
      `;
    }).join('');

    const badges = SLIDES.map((s, i) => `
      <div class="pc-hero__badge" style="opacity:${i === 0 ? 1 : 0}; transition: opacity 0.5s ease; position:absolute; bottom: var(--space-8); right: var(--space-8); z-index:4; display:${i === 0 ? 'flex' : 'none'}; background:rgba(255,255,255,0.95); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border-radius:16px; padding:var(--space-4) var(--space-6); box-shadow:0 8px 32px rgba(0,0,0,0.12); align-items:center; gap:var(--space-3); min-width:180px;" data-badge="${i}">
        <div class="pc-hero__badge-icon">${starIcon}</div>
        <div class="pc-hero__badge-text">
          <strong>${s.badgeValue}</strong>
          <span>${s.badgeLabel}</span>
        </div>
      </div>
    `).join('');

    const dots = SLIDES.map((_, i) => `
      <button class="pc-hero__dot ${i === 0 ? 'is-active' : ''}" data-dot="${i}" aria-label="Go to slide ${i + 1}"></button>
    `).join('');

    return `
      <section class="pc-hero" aria-label="Hero Banner">

        <div class="pc-hero__left">
          <div style="position:relative; flex:1; display:flex; flex-direction:column; justify-content:center;">
            ${leftSlides}
          </div>
          <div class="pc-hero__controls">
            <div class="pc-hero__counter">
              <span id="heroCurrentNum">01</span> / ${String(SLIDES.length).padStart(2, '0')}
            </div>
            <div class="pc-hero__progress">
              <div class="pc-hero__progress-bar" id="heroProgressBar"></div>
            </div>
            <div class="pc-hero__arrows">
              <button class="pc-hero__arrow" id="heroPrev" aria-label="Previous slide">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button class="pc-hero__arrow" id="heroNext" aria-label="Next slide">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
        </div>

        <div class="pc-hero__right">
          ${rightSlides}
          ${badges}
          <div class="pc-hero__dots">${dots}</div>
        </div>

      </section>
    `;
  }

  /* ── VIDEO helpers ─────────────────────────────────────── */
  function hideSkeleton() {
    const sk = container.querySelector('#heroSkeleton');
    if (!sk) return;
    sk.classList.add('is-hidden');
    setTimeout(() => sk.remove(), 500);
  }

  function initVideo() {
    const vid = container.querySelector('#heroBgVideo');
    if (!vid) return;

    /* Hide skeleton as soon as poster or first frame is ready */
    vid.addEventListener('loadeddata', hideSkeleton, { once: true });
    vid.addEventListener('error', hideSkeleton, { once: true });

    /* Also hide via poster image load so there's no flash of empty canvas */
    if (vid.poster) {
      const img = new Image();
      img.onload = () => setTimeout(hideSkeleton, 400);
      img.src = vid.poster;
    }

    /* Autoplay muted — browsers allow this without a user gesture */
    vid.play().catch(() => {
      /* Silently fail — poster is already visible as fallback */
    });
  }

  function pauseVideo() {
    const vid = container.querySelector('#heroBgVideo');
    if (vid) vid.pause();
  }

  function resumeVideo() {
    const vid = container.querySelector('#heroBgVideo');
    if (vid && vid.paused) vid.play().catch(() => {});
  }

  /* ── SLIDE TRANSITION ──────────────────────────────────── */
  function goTo(index) {
    const leftSlides  = container.querySelectorAll('.pc-hero__slide-content');
    const rightSlides = container.querySelectorAll('.pc-hero__slide-image');
    const dots        = container.querySelectorAll('.pc-hero__dot');
    const allBadges   = container.querySelectorAll('[data-badge]');
    const counter     = container.querySelector('#heroCurrentNum');

    /* Pause video when leaving slide 0 */
    if (current === 0) pauseVideo();

    // hide current
    leftSlides[current].classList.remove('is-active');
    rightSlides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    if (allBadges[current]) {
      allBadges[current].style.opacity = '0';
      setTimeout(() => { allBadges[current].style.display = 'none'; }, 300);
    }

    current = (index + SLIDES.length) % SLIDES.length;

    // show next
    leftSlides[current].classList.add('is-active');
    rightSlides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
    if (allBadges[current]) {
      allBadges[current].style.display = 'flex';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => { allBadges[current].style.opacity = '1'; });
      });
    }

    /* Resume video when returning to slide 0 */
    if (current === 0) resumeVideo();

    if (counter) counter.textContent = String(current + 1).padStart(2, '0');
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    const bar = container.querySelector('#heroProgressBar');
    if (bar) {
      bar.style.transition = 'none';
      bar.style.width = '0%';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          bar.style.transition = 'width 5s linear';
          bar.style.width = '100%';
        });
      });
    }
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  function bindEvents() {
    container.querySelector('#heroPrev').addEventListener('click', () => goTo(current - 1));
    container.querySelector('#heroNext').addEventListener('click', () => goTo(current + 1));

    container.querySelectorAll('.pc-hero__dot').forEach(dot => {
      dot.addEventListener('click', () => goTo(+dot.dataset.dot));
    });

    const hero = container.querySelector('.pc-hero');
    hero.addEventListener('mouseenter', () => clearInterval(timer));
    hero.addEventListener('mouseleave', resetTimer);

    let touchStartX = 0;
    const rightPanel = container.querySelector('.pc-hero__right');
    rightPanel.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    rightPanel.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
    });
  }

  function init(mountSelector = 'main') {
    container = document.querySelector(mountSelector);
    if (!container) return;
    container.insertAdjacentHTML('afterbegin', buildHTML());
    bindEvents();
    resetTimer();
    initVideo();  /* kick off video + skeleton logic after DOM is ready */
  }

  return { init };
})();

export default HeroBanner;