/* ============================================================
   PROCOMBAT — Header Component
   Renders: topbar + logo navbar + mega menu + mobile drawer
   Usage:  Header.init()  — call once in app.js
   ============================================================ */

import { NAV_LINKS } from '../js/data/navigation.js';

const Header = (() => {

  /* ── 1. Build Topbar ─────────────────────────────────── */
  function buildTopbar() {
    return `
      <div class="pc-topbar">
        <div class="pc-container">
          <div class="pc-topbar__inner">
            <ul class="pc-topbar__left">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.37 9.5 19.79 19.79 0 01.27 4.9 2 2 0 012.26 2.73h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 17.92v-.01z"/></svg>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:info@procombat.com">info@procombat.com</a>
              </li>
            </ul>
            <ul class="pc-topbar__right">
              <li><a href="#">Free Worldwide Shipping on Orders $150+</a></li>
              <li class="pc-topbar__divider"></li>
              <li><a href="#">Custom Orders Welcome</a></li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  /* ── 2. Build Dropdown Items ─────────────────────────── */
  function buildDropdown(children) {
    return `
      <ul class="pc-dropdown">
        ${children.map(child => `
          <li class="pc-dropdown__item">
            <a href="${child.href}" class="pc-dropdown__link">
              <span>${child.label}</span>
              <svg class="pc-dropdown__arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          </li>
        `).join('')}
      </ul>
    `;
  }

  /* ── 3. Build Mega Menu ──────────────────────────────── */
  function buildMegaMenu(columns) {
    return `
      <div class="pc-mega">
        <div class="pc-container">
          <div class="pc-mega__grid">
            ${columns.map(col => `
              <div class="pc-mega__col">
                <a href="${col.href}" class="pc-mega__heading">${col.heading}</a>
                <ul class="pc-mega__list">
                  ${col.items.map(item => `
                    <li><a href="${item.href}" class="pc-mega__link">${item.label}</a></li>
                  `).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  /* ── 4. Build Desktop Nav Items ──────────────────────── */
  function buildNavItems() {
    return NAV_LINKS.map(link => {
      const hasMega     = link.megaMenu && link.columns?.length;
      const hasDropdown = !hasMega && link.children?.length;
      const hasChildren = hasMega || hasDropdown;

      return `
        <li class="pc-nav__item ${hasChildren ? 'has-children' : ''}">
          <a href="${link.href}" class="pc-nav__link">
            ${link.label}
            ${hasChildren ? `<svg class="pc-nav__caret" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>` : ''}
          </a>
          ${hasMega     ? buildMegaMenu(link.columns)  : ''}
          ${hasDropdown ? buildDropdown(link.children) : ''}
        </li>
      `;
    }).join('');
  }

  /* ── 5. Build Mobile Drawer ──────────────────────────── */
  function buildMobileDrawer() {
    function mobileItems(links) {
      return links.map(link => {
        const hasChildren = link.megaMenu
          ? link.columns?.length
          : link.children?.length;

        let subItems = '';
        if (link.megaMenu) {
          subItems = link.columns?.map(col => `
            <li class="pc-drawer__subitem pc-drawer__subheading">
              <a href="${col.href}">${col.heading}</a>
            </li>
            ${col.items.map(item => `
              <li class="pc-drawer__subitem">
                <a href="${item.href}">${item.label}</a>
              </li>
            `).join('')}
          `).join('') || '';
        } else {
          subItems = link.children?.map(child => `
            <li class="pc-drawer__subitem">
              <a href="${child.href}">${child.label}</a>
            </li>
          `).join('') || '';
        }

        return `
          <li class="pc-drawer__item ${hasChildren ? 'has-children' : ''}">
            <div class="pc-drawer__row">
              <a href="${link.href}" class="pc-drawer__link">${link.label}</a>
              ${hasChildren ? `<button class="pc-drawer__toggle" aria-label="Expand">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </button>` : ''}
            </div>
            ${hasChildren ? `<ul class="pc-drawer__sub">${subItems}</ul>` : ''}
          </li>
        `;
      }).join('');
    }

    return `
      <div class="pc-drawer" id="pcDrawer" aria-hidden="true">
        <div class="pc-drawer__overlay" id="pcDrawerOverlay"></div>
        <nav class="pc-drawer__panel">
          <div class="pc-drawer__header">
            <a href="/" class="pc-drawer__logo">
              <span class="pc-logo__pro">PRO</span><span class="pc-logo__combat">COMBAT</span>
            </a>
            <button class="pc-drawer__close" id="pcDrawerClose" aria-label="Close menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <ul class="pc-drawer__nav">
            ${mobileItems(NAV_LINKS)}
          </ul>
        </nav>
      </div>
    `;
  }

  /* ── 6. Build Full Header HTML ───────────────────────── */
  function buildHTML() {
    return `
      <header class="pc-header" id="pcHeader">

        ${buildTopbar()}

        <div class="pc-navbar">
          <div class="pc-container">
            <div class="pc-navbar__inner">

              <!-- Logo -->
              <a href="/" class="pc-logo" aria-label="ProCombat Home">
                <span class="pc-logo__pro">PRO</span><span class="pc-logo__combat">COMBAT</span>
              </a>

              <!-- Desktop Nav -->
              <nav class="pc-nav" aria-label="Main navigation">
                <ul class="pc-nav__list">
                  ${buildNavItems()}
                </ul>
              </nav>

              <!-- Right Actions -->
              <div class="pc-navbar__actions">
                <a href="/pages/contact.html" class="pc-btn-quote">Get a Quote</a>
                <button class="pc-hamburger" id="pcHamburger" aria-label="Open menu" aria-expanded="false">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>

            </div>
          </div>
        </div>

      </header>

      ${buildMobileDrawer()}
    `;
  }

  /* ── 7. Bind Events ──────────────────────────────────── */
  function bindEvents() {
    const hamburger = document.getElementById('pcHamburger');
    const drawer    = document.getElementById('pcDrawer');
    const overlay   = document.getElementById('pcDrawerOverlay');
    const closeBtn  = document.getElementById('pcDrawerClose');
    const header    = document.getElementById('pcHeader');

    // Mobile drawer open/close
    function openDrawer() {
      drawer.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.classList.remove('is-active');
      document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);

    // Mobile accordion toggles
    document.querySelectorAll('.pc-drawer__toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.pc-drawer__item');
        const sub  = item.querySelector('.pc-drawer__sub');
        const isOpen = item.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', isOpen);
        sub.style.maxHeight = isOpen ? sub.scrollHeight + 'px' : '0';
      });
    });

    // Sticky header on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const current = window.scrollY;
      if (current > 80) {
        header.classList.add('is-sticky');
      } else {
        header.classList.remove('is-sticky');
      }
      // Hide on scroll down, show on scroll up
      if (current > lastScroll && current > 200) {
        header.classList.add('is-hidden');
      } else {
        header.classList.remove('is-hidden');
      }
      lastScroll = current;
    }, { passive: true });

    // Close mega/dropdown on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  /* ── 8. Public Init ──────────────────────────────────── */
  function init(mountSelector = 'body') {
    const mount = document.querySelector(mountSelector);
    if (!mount) return console.warn('Header: mount not found');

    // Insert header before first child
    mount.insertAdjacentHTML('afterbegin', buildHTML());
    bindEvents();
  }

  return { init };
})();

export default Header;
