/* ============================================================
   PROCOMBAT — Product Card Component
   Reusable card used in carousel + grid
   ============================================================ */

export function ProductCard({ id, name, category, categoryHref, href, image, badge }) {
  const el = document.createElement('div');
  el.className = 'pc-product-card';
  el.innerHTML = `
    <a href="${href}" class="pc-product-card__image-wrap">
      ${badge ? `<span class="pc-product-card__badge">${badge}</span>` : ''}
      <img src="${image}" alt="${name}" loading="lazy" />
      <div class="pc-product-card__overlay">
        <span class="pc-product-card__view">View Details</span>
      </div>
    </a>
    <div class="pc-product-card__body">
      <a href="${categoryHref}" class="pc-product-card__cat">${category}</a>
      <h3 class="pc-product-card__name"><a href="${href}">${name}</a></h3>
      <div class="pc-product-card__footer">
        <a href="${href}" class="pc-product-card__btn">Read More</a>
        <a href="/pages/contact.html?product=${id}" class="pc-product-card__quote">Get Quote</a>
      </div>
    </div>
  `;
  return el;
}
