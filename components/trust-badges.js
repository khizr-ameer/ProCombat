/* ============================================================
   PROCOMBAT — Trust Badges / Why Choose Us Component
   ============================================================ */

const BADGES = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z"/></svg>`,
    title: 'Competitive Pricing',
    desc: 'We offer the best pricing to keep your clothing brand ahead in the market.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
    title: 'Free Product Design',
    desc: 'Our professional design team creates custom designs to your exact requirements.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    title: 'Premier Quality',
    desc: 'Top-notch fabric quality in athletic wear gives your brand a unique position.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    title: 'On-Time Delivery',
    desc: 'We fulfill commitments ensuring your package arrives promptly and hassle-free.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    title: 'Transparent Process',
    desc: 'Streamlined production from concept to creation — quality at every stage.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
    title: '24/7 Customer Support',
    desc: 'Always available to assist — your needs met promptly and efficiently.'
  }
];

const CERTS = [
  { title: 'ISO 9001:2015',        desc: 'Quality Management System' },
  { title: 'ISO 14001:2015',       desc: 'Environmental Management' },
  { title: 'ISO 45001:2018',       desc: 'Occupational Health & Safety' },
  { title: 'AMFORI BSCI',         desc: 'Business Social Compliance' },
  { title: 'GSV Certified',        desc: 'Global Security Verification' },
  { title: 'SA 8000',              desc: 'Social Accountability Standard' }
];

export function WhyChooseUs() {
  const el = document.createElement('section');
  el.className = 'pc-why';
  el.innerHTML = `
    <div class="pc-container">
      <div class="pc-section-header">
        <span class="pc-section-tag">Why Partner With Us</span>
        <h2 class="pc-section-title">What Clients <span>Love</span> About ProCombat</h2>
      </div>
      <div class="pc-why__grid">
        ${BADGES.map(b => `
          <div class="pc-why__card">
            <div class="pc-why__icon">${b.icon}</div>
            <h3 class="pc-why__title">${b.title}</h3>
            <p class="pc-why__desc">${b.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  return el;
}

export function Certifications() {
  const el = document.createElement('section');
  el.className = 'pc-certs';
  el.innerHTML = `
    <div class="pc-container">
      <div class="pc-section-header pc-section-header--light">
        <h2 class="pc-section-title">Compliance &amp; <span>Certifications</span></h2>
      </div>
      <div class="pc-certs__grid">
        ${CERTS.map(c => `
          <div class="pc-certs__item">
            <div class="pc-certs__badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z"/><polyline points="9 12 11 14 15 10" stroke-width="2"/></svg>
            </div>
            <div>
              <strong class="pc-certs__title">${c.title}</strong>
              <p class="pc-certs__desc">${c.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  return el;
}
