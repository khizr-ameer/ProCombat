/* ============================================================
   PROCOMBAT — Hero Banner Component
   Auto-cycling fullwidth slider with image slides + CTA
   Usage: HeroBanner.init('#hero-mount')
   ============================================================ */

const SLIDES = [
  {
    image: 'https://www.prosafetywear.com/new/wp-content/uploads/revslider/video-media/PS_31.jpeg',
    tag: 'Premium Combat Gear',
    heading: 'Built for<br>Champions',
    sub: 'Custom BJJ Gis, MMA gear, boxing equipment & athleisure — manufactured to your exact specs.',
    cta: { label: 'Explore Products', href: '/pages/products.html' },
    ctaSecondary: { label: 'Get a Quote', href: '/pages/contact.html' }
  },
  {
    image: 'https://www.prosafetywear.com/wp-content/uploads/elementor/thumbs/main-01-1-qxfz2rr0yex6prcqnuh0whrq7rsvndr76wm2owez7o.jpg',
    tag: '22+ Years Manufacturing',
    heading: 'Made to<br>Your Vision',
    sub: 'Full-service clothing brand development. From concept to creation — quality that exceeds expectations.',
    cta: { label: 'Our Story', href: '/pages/about.html' },
    ctaSecondary: { label: 'View Products', href: '/pages/products.html' }
  },
  {
    image: 'https://www.prosafetywear.com/wp-content/uploads/elementor/thumbs/main-02-qxfz2rr0yex6prcqnuh0whrq7rsvndr76wm2owez7o.jpg',
    tag: 'ISO 9001:2015 Certified',
    heading: 'Unmatched<br>Quality',
    sub: 'Performance fabrics — lightweight, antibacterial, pre-shrunk, and anti-odor. Built to last.',
    cta: { label: 'Our Certifications', href: '/pages/about.html#certs' },
    ctaSecondary: { label: 'Contact Us', href: '/pages/contact.html' }
  }
];

const HeroBanner = (() => {

  let current = 0;
  let timer = null;
  let container = null;

  function buildSlide(slide, index) {
    return `
      <div class="pc-hero__slide ${index === 0 ? 'is-active' : ''}" data-index="${index}">
        <div class="pc-hero__bg" style="background-image: url('${slide.image}')"></div>
        <div class="pc-hero__overlay"></div>
        <div class="pc-container">
          <div class="pc-hero__content">
            <span class="pc-hero__tag">${slide.tag}</span>
            <h1 class="pc-hero__heading">${slide.heading}</h1>
            <p class="pc-hero__sub">${slide.sub}</p>
            <div class="pc-hero__actions">
              <a href="${slide.cta.href}" class="pc-hero__btn pc-hero__btn--primary">${slide.cta.label}</a>
              <a href="${slide.ctaSecondary.href}" class="pc-hero__btn pc-hero__btn--outline">${slide.ctaSecondary.label}</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function buildDots() {
    return `
      <div class="pc-hero__dots">
        ${SLIDES.map((_, i) => `
          <button class="pc-hero__dot ${i === 0 ? 'is-active' : ''}" data-dot="${i}" aria-label="Go to slide ${i + 1}"></button>
        `).join('')}
      </div>
    `;
  }

  function buildHTML() {
    return `
      <section class="pc-hero" aria-label="Hero Banner">
        <div class="pc-hero__track">
          ${SLIDES.map((s, i) => buildSlide(s, i)).join('')}
        </div>

        <button class="pc-hero__arrow pc-hero__arrow--prev" id="heroPrev" aria-label="Previous slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button class="pc-hero__arrow pc-hero__arrow--next" id="heroNext" aria-label="Next slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>

        ${buildDots()}

        <div class="pc-hero__progress"><div class="pc-hero__progress-bar" id="heroProgressBar"></div></div>
      </section>
    `;
  }

  function goTo(index) {
    const slides = container.querySelectorAll('.pc-hero__slide');
    const dots   = container.querySelectorAll('.pc-hero__dot');
    slides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    current = (index + SLIDES.length) % SLIDES.length;
    slides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    const bar = container.querySelector('#heroProgressBar');
    if (bar) { bar.style.transition = 'none'; bar.style.width = '0%'; }
    setTimeout(() => {
      if (bar) { bar.style.transition = 'width 5s linear'; bar.style.width = '100%'; }
    }, 50);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  function bindEvents() {
    container.querySelector('#heroPrev').addEventListener('click', () => goTo(current - 1));
    container.querySelector('#heroNext').addEventListener('click', () => goTo(current + 1));
    container.querySelectorAll('.pc-hero__dot').forEach(dot => {
      dot.addEventListener('click', () => goTo(+dot.dataset.dot));
    });
    // Pause on hover
    container.querySelector('.pc-hero').addEventListener('mouseenter', () => clearInterval(timer));
    container.querySelector('.pc-hero').addEventListener('mouseleave', resetTimer);
    // Touch/swipe support
    let touchStartX = 0;
    container.querySelector('.pc-hero__track').addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    container.querySelector('.pc-hero__track').addEventListener('touchend', e => {
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
  }

  return { init };
})();

export default HeroBanner;
