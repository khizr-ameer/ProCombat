/* ============================================================
   PROCOMBAT — App Entry Point
   Imports + initializes all components on the homepage
   ============================================================ */

import Header           from '../components/header.js';
import HeroBanner       from '../components/hero-banner.js';
import Footer           from '../components/footer.js';
import { ProductCard }  from '../components/product-card.js';
import { WhyChooseUs, Certifications } from '../components/trust-badges.js';
import { FEATURED_PRODUCTS } from './data/products.js';

/* ── 1. Header ──────────────────────────────────────────── */
Header.init('body');

/* ── 2. Hero ────────────────────────────────────────────── */
HeroBanner.init('main');

/* ── 3. Our Story ───────────────────────────────────────── */
function buildStory() {
  const section = document.createElement('section');
  section.className = 'pc-story';
  section.innerHTML = `
    <div class="pc-container">
      <div class="pc-story__grid">

        <div class="pc-story__content">
          <span class="pc-story__label">Who We Are</span>

          <div>
            <h2 class="pc-story__title">Our <span>Story</span></h2>
            <div class="pc-story__divider"></div>
          </div>

         <div class="pc-story__text">
          <p>ProCombat was founded on a single belief: that world-class combat sports gear should be built with the same discipline required to wear it. Over 22 years, we have grown from a focused manufacturing operation into a trusted global partner for hundreds of brands across five continents.</p>
          <p>We produce custom BJJ Gis, MMA gear, boxing equipment, and athleisure wear, engineered precisely to each client's specifications. Every order, regardless of size, receives the same level of craftsmanship and attention to detail that has defined us from the beginning.</p>
          <p>Our performance fabrics are lightweight, antibacterial, pre-shrunk, and anti-odor, built to endure the demands of serious training while maintaining comfort across every use.</p>
        </div>

          <div class="pc-story__stats">
            <div class="pc-story__stat">
              <strong class="pc-story__stat-num">22<span>+</span></strong>
              <span class="pc-story__stat-label">Years Experience</span>
            </div>
            <div class="pc-story__stat">
              <strong class="pc-story__stat-num">500<span>+</span></strong>
              <span class="pc-story__stat-label">Brand Partners</span>
            </div>
            <div class="pc-story__stat">
              <strong class="pc-story__stat-num">50<span>+</span></strong>
              <span class="pc-story__stat-label">Countries Served</span>
            </div>
          </div>
        </div>

        <div class="pc-story__image">
          <img
            src="https://www.prosafetywear.com/wp-content/uploads/2024/12/Sportswear-Manufacturer.jpg"
            alt="ProCombat Manufacturing Facility"
          />
          <div class="pc-story__image-badge">
            <strong>100%</strong>
            <span>Made in Pakistan</span>
          </div>
        </div>

      </div>
    </div>
  `;
  return section;
}

/* ── 4. Featured Products — Magazine Sidebar Layout ─────── */
function buildProductsSection() {
  const section = document.createElement('section');
  section.className = 'pc-products-section';

  section.innerHTML = `
    <div class="pc-products-inner">

      <!-- LEFT: sticky info panel -->
      <div class="pc-products-panel">
        <span class="pc-products-panel__eyebrow">Most In Demand</span>
        <h2 class="pc-products-panel__title">Explore<br/><span>Products</span></h2>
        <p class="pc-products-panel__desc">
          Custom-built combat gear shipped to 50+ countries. Every product crafted to your spec.
        </p>

        <div class="pc-products-panel__nav">
          <button class="pc-products-panel__btn" id="carouselPrev" aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div class="pc-products-panel__counter">
            <span class="pc-products-panel__count-cur" id="currentSlide">01</span>
            <svg width="36" height="2" viewBox="0 0 36 2"><line x1="0" y1="1" x2="36" y2="1" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.4"/></svg>
            <span class="pc-products-panel__count-tot" id="totalSlides">08</span>
          </div>
          <button class="pc-products-panel__btn pc-products-panel__btn--filled" id="carouselNext" aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        <div class="pc-products-panel__progress" id="progressBar">
          <div class="pc-products-panel__progress-fill" id="progressFill"></div>
        </div>
      </div>

      <!-- RIGHT: card track (clips overflow) -->
      <div class="pc-products-viewport">
        <div class="pc-products-track" id="pcProductCarousel"></div>
      </div>

    </div>
  `;

  return section;
}

function initCarousel() {
  const track = document.getElementById('pcProductCarousel');
  if (!track) return;

  FEATURED_PRODUCTS.forEach((p, i) => {
    const card = ProductCard(p);
    card.dataset.cardIdx = i;
    track.appendChild(card);
  });

  const total     = FEATURED_PRODUCTS.length;
  const totalEl   = document.getElementById('totalSlides');
  const currentEl = document.getElementById('currentSlide');
  const fillEl    = document.getElementById('progressFill');

  if (totalEl) totalEl.textContent = String(total).padStart(2, '0');

  let currentIdx = 0;

  function getCardStep() {
    const card = track.children[0];
    if (!card) return 0;
    const gap = 24;
    return card.getBoundingClientRect().width + gap;
  }

  function goTo(index) {
    currentIdx = ((index % total) + total) % total;
    track.style.transform = `translateX(-${currentIdx * getCardStep()}px)`;

    if (currentEl) currentEl.textContent = String(currentIdx + 1).padStart(2, '0');
    if (fillEl) fillEl.style.width = `${((currentIdx + 1) / total) * 100}%`;

    Array.from(track.children).forEach((c, i) => {
      c.classList.toggle('is-active', i === currentIdx);
    });
  }

  document.getElementById('carouselPrev')?.addEventListener('click', () => goTo(currentIdx - 1));
  document.getElementById('carouselNext')?.addEventListener('click', () => goTo(currentIdx + 1));

  goTo(0);

  let autoTimer = setInterval(() => goTo(currentIdx + 1), 4500);
  track.closest('.pc-products-section')?.addEventListener('mouseenter', () => clearInterval(autoTimer));
  track.closest('.pc-products-section')?.addEventListener('mouseleave', () => {
    autoTimer = setInterval(() => goTo(currentIdx + 1), 4500);
  });

  let tX = 0;
  track.addEventListener('touchstart', e => { tX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = tX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? currentIdx + 1 : currentIdx - 1);
  });
}

/* ── 5. Assemble Main Content ───────────────────────────── */
const main = document.querySelector('main');
main.appendChild(buildStory());
main.appendChild(buildProductsSection());
main.appendChild(WhyChooseUs());
main.appendChild(Certifications());

initCarousel();

/* ── 6. Footer ──────────────────────────────────────────── */
Footer.init('body');