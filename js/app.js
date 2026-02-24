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
          <h2 class="pc-story__title">Our <span>Story</span></h2>
          <div class="pc-story__text">
            <p>With over 22 years of experience in the manufacturing sector, ProCombat has built a reputation for delivering high-quality combat sports and athleisure gear. Through dedication, we have refined our expertise, assembled a highly skilled team, and invested in state-of-the-art machinery to meet the demands of top-tier brands worldwide.</p>
            <p>We specialize in producing custom BJJ Gis, MMA gear, boxing equipment, athleisure wear, and more — offering tailored solutions to meet your exact specifications.</p>
            <p>Our fabrics are designed for performance — lightweight, antibacterial, pre-shrunk, and anti-odor — ensuring durability and comfort in every product.</p>
          </div>
          <div class="pc-story__stats">
            <div>
              <strong class="pc-story__stat-num">22+</strong>
              <span class="pc-story__stat-label">Years Experience</span>
            </div>
            <div>
              <strong class="pc-story__stat-num">500+</strong>
              <span class="pc-story__stat-label">Brand Partners</span>
            </div>
            <div>
              <strong class="pc-story__stat-num">50+</strong>
              <span class="pc-story__stat-label">Countries Served</span>
            </div>
          </div>
        </div>
        <div class="pc-story__image">
          <img src="https://www.prosafetywear.com/wp-content/uploads/2024/12/Sportswear-Manufacturer.jpg" alt="ProCombat Manufacturing Facility" />
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

/* ── 4. Featured Products Carousel ─────────────────────── */
function buildProductsSection() {
  const section = document.createElement('section');
  section.className = 'pc-products-section';

  const carouselId = 'pcProductCarousel';
  section.innerHTML = `
    <div class="pc-container">
      <div class="pc-section-header">
        <span class="pc-section-tag">Most In Demand</span>
        <h2 class="pc-section-title">Featured <span>Products</span></h2>
      </div>
      <div class="pc-carousel">
        <div class="pc-carousel__track" id="${carouselId}"></div>
      </div>
      <div class="pc-carousel__controls">
        <button class="pc-carousel__btn" id="carouselPrev" aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div class="pc-carousel__dots" id="carouselDots"></div>
        <button class="pc-carousel__btn" id="carouselNext" aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>
  `;

  return section;
}

function initCarousel() {
  const track    = document.getElementById('pcProductCarousel');
  const dotsWrap = document.getElementById('carouselDots');
  if (!track) return;

  // Render cards
  FEATURED_PRODUCTS.forEach(p => track.appendChild(ProductCard(p)));

  // Carousel logic
  const VISIBLE  = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
  const MAX_IDX  = Math.max(0, FEATURED_PRODUCTS.length - VISIBLE);
  let currentIdx = 0;

  // Build dots
  const totalDots = MAX_IDX + 1;
  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement('button');
    dot.className = `pc-carousel__dot ${i === 0 ? 'is-active' : ''}`;
    dot.setAttribute('aria-label', `Page ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  }

  function goTo(index) {
    currentIdx = Math.max(0, Math.min(index, MAX_IDX));
    const cardWidth = track.children[0]?.offsetWidth + 24 || 0; // 24 = gap
    track.style.transform = `translateX(-${currentIdx * cardWidth}px)`;
    dotsWrap.querySelectorAll('.pc-carousel__dot').forEach((d, i) => {
      d.classList.toggle('is-active', i === currentIdx);
    });
  }

  document.getElementById('carouselPrev').addEventListener('click', () => goTo(currentIdx - 1));
  document.getElementById('carouselNext').addEventListener('click', () => goTo(currentIdx + 1));

  // Auto-advance
  let autoTimer = setInterval(() => goTo(currentIdx + 1 > MAX_IDX ? 0 : currentIdx + 1), 4000);
  track.closest('.pc-products-section').addEventListener('mouseenter', () => clearInterval(autoTimer));
  track.closest('.pc-products-section').addEventListener('mouseleave', () => {
    autoTimer = setInterval(() => goTo(currentIdx + 1 > MAX_IDX ? 0 : currentIdx + 1), 4000);
  });

  // Touch swipe
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

// Init carousel after DOM insertion
initCarousel();

/* ── 6. Footer ──────────────────────────────────────────── */
Footer.init('body');
