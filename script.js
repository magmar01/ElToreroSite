/* Load the regular-menu artifact fix after all legacy styles. */
const menuArtifactCss = document.createElement('link');
menuArtifactCss.rel = 'stylesheet';
menuArtifactCss.href = 'menu-artifact-fix.css?v=' + Date.now();
document.head.appendChild(menuArtifactCss);

/* Load the final mobile cleanup after the legacy styles so the old
   absolutely-positioned menu decorations cannot paint over content. */
if (window.matchMedia && window.matchMedia('(max-width: 800px)').matches) {
  const mobileCss = document.createElement('link');
  mobileCss.rel = 'stylesheet';
  mobileCss.href = 'mobile-final.css?v=20260908-7';
  document.head.appendChild(mobileCss);
}

const ham = document.querySelector('.nav-box');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('#menu-close');
const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');
const img = document.querySelector('.image-slider');
const menuLinks = document.querySelectorAll('.menu a');
let num = 1;

if (ham) {
  menuLinks.forEach((node) => {
    if (node.getAttribute('href') === '#menu') return;
    node.addEventListener('click', function(event) {
      const text = normalizeMenuText(node.textContent).toLowerCase();
      if (text === 'location') {
        const target = document.getElementById('location') || document.querySelector('.location');
        if (target) {
          event.preventDefault();
          ham.classList.remove('ham-open');
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
      ham.classList.remove('ham-open');
    });
  });

  /* The hamburger itself becomes the close button when it is open. */
  ham.addEventListener('click', function() {
    ham.classList.toggle('ham-open');
  });
}

/* The legacy red close icon is hidden on mobile; keep this handler harmless
   for any non-mobile/legacy rendering where the icon may still exist. */
if (menuClose && ham) {
  menuClose.addEventListener('click', function() {
    ham.classList.remove('ham-open');
  });
}

if (leftArrow && img) {
  leftArrow.addEventListener('click', function() {
    num--;
    if (num > 0) {
      img.style.backgroundImage = 'url(img/fam-' + num + '.jpeg)';
    } else {
      num = 4;
      img.style.backgroundImage = 'url(img/fam-' + num + '.jpeg)';
    }
  });
}

if (rightArrow && img) {
  rightArrow.addEventListener('click', function() {
    num++;
    if (num <= 4) {
      img.style.backgroundImage = 'url(img/fam-' + num + '.jpeg)';
    } else {
      num = 1;
      img.style.backgroundImage = 'url(img/fam-' + num + '.jpeg)';
    }
  });
}

/* Floating Back to Top: the control is removed from normal document flow and
   appears only after the visitor has scrolled past the entire Hours section. */
function setupFloatingBackToTop() {
  const hoursSection = document.querySelector('.hours-section');
  const menuSection = document.querySelector('.menu-section');
  const candidates = Array.from(document.querySelectorAll('a,button,[role="button"],div,p,span'));
  let backToTop = candidates.find((el) => {
    const text = (el.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
    return /back\s+to\s+(the\s+)?top/.test(text) && el.children.length <= 2;
  });

  if (!backToTop) {
    backToTop = document.createElement('button');
    backToTop.type = 'button';
    backToTop.textContent = 'Back to Top';
    document.body.appendChild(backToTop);
  }

  backToTop.classList.add('floating-back-to-top');
  backToTop.setAttribute('aria-label', 'Return to top of menu');
  backToTop.setAttribute('title', 'Return to top of menu');
  backToTop.setAttribute('role', 'button');
  backToTop.setAttribute('tabindex', '0');

  Object.assign(backToTop.style, {
    position: 'fixed', right: '24px', bottom: '24px', top: 'auto', left: 'auto',
    margin: '0', display: 'none', width: 'auto', minWidth: '150px',
    padding: '12px 18px', zIndex: '5000', boxSizing: 'border-box', cursor: 'pointer',
    border: '2px solid #000', borderRadius: '999px', background: '#fff', color: '#000',
    fontFamily: "'Josefin Sans', Arial, sans-serif", fontSize: '1rem', fontWeight: '700',
    lineHeight: '1.1', textAlign: 'center', boxShadow: '0 3px 12px rgba(0,0,0,.25)'
  });

  const goToMenuTop = () => {
    const top = menuSection ? menuSection.getBoundingClientRect().top + window.scrollY : 0;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  if (!backToTop.dataset.floatingBound) {
    backToTop.addEventListener('click', goToMenuTop);
    backToTop.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        goToMenuTop();
      }
    });
    backToTop.dataset.floatingBound = 'true';
  }

  const updateVisibility = () => {
    const threshold = hoursSection
      ? hoursSection.getBoundingClientRect().bottom + window.scrollY
      : window.innerHeight;
    backToTop.style.display = window.scrollY >= Math.max(0, threshold - 10) ? 'block' : 'none';
  };

  window.addEventListener('scroll', updateVisibility, { passive: true });
  window.addEventListener('resize', updateVisibility);
  updateVisibility();
}

setupFloatingBackToTop();

function cleanMalformedMenuText(root = document) {
  root.querySelectorAll('.menu-section .name, .menu-section .price, .menu-section .desc').forEach((el) => {
    if (!el.textContent) return;
    const cleaned = el.textContent.replace(/\s*\/span>\s*/gi, ' ').replace(/\s{2,}/g, ' ').trim();
    if (cleaned !== el.textContent) el.textContent = cleaned;
  });
}

function repairPolloLocoMixed() {
  document.querySelectorAll('.menu-section li').forEach((li) => {
    const text = (li.textContent || '').replace(/\s+/g, ' ').trim();
    if (!text.includes('POLLO LOCO MIXED') || !text.includes('STEAK, CHICKEN & SHRIMP')) return;

    const existingName = li.querySelector('.name');
    const existingPrice = li.querySelector('.price');
    const existingDesc = li.querySelector('.desc');
    const alreadyCorrect = existingName && existingPrice && existingDesc &&
      normalizeMenuText(existingName.textContent) === 'POLLO LOCO MIXED' &&
      normalizeMenuText(existingPrice.textContent) === '18.25' &&
      normalizeMenuText(existingDesc.textContent) === 'STEAK, CHICKEN & SHRIMP';

    if (alreadyCorrect && li.children.length === 3) return;

    li.innerHTML = '';
    const name = document.createElement('span'); name.className = 'name'; name.textContent = 'POLLO LOCO MIXED';
    const price = document.createElement('span'); price.className = 'price'; price.textContent = '18.25';
    const desc = document.createElement('small'); desc.className = 'desc'; desc.textContent = 'STEAK, CHICKEN & SHRIMP';
    li.appendChild(name); li.appendChild(price); li.appendChild(desc);
  });
}

function repairMenuMarkup() {
  cleanMalformedMenuText();
  repairPolloLocoMixed();
  document.querySelectorAll('.menu-section li').forEach((li) => {
    const nameEl = li.querySelector('.name');
    const priceEl = li.querySelector('.price');
    const descEl = li.querySelector('.desc');
    if (nameEl) nameEl.textContent = nameEl.textContent.replace(/\s*\/span>\s*/gi, ' ').replace(/\s{2,}/g, ' ').trim();
    if (priceEl) {
      if (descEl && priceEl.contains(descEl)) {
        const priceText = priceEl.childNodes[0]?.textContent || '';
        priceEl.textContent = priceText.replace(/\s*\/span>\s*/gi, ' ').replace(/\s{2,}/g, ' ').trim();
        li.appendChild(descEl);
      } else priceEl.textContent = priceEl.textContent.replace(/\s*\/span>\s*/gi, ' ').replace(/\s{2,}/g, ' ').trim();
    }
  });
}

function normalizeMenuText(text) {
  return (text || '').replace(/\s+/g, ' ').trim();
}

repairMenuMarkup();

function applyMenuPriceOverrides() {
  const overrides = window.MENU_PRICE_OVERRIDES || {};
  const sectionCounts = {};
  document.querySelectorAll('.menu-section .column').forEach((column) => {
    let currentSection = '';
    Array.from(column.children).forEach((child) => {
      if (child.matches('h2')) {
        currentSection = normalizeMenuText(child.textContent);
        sectionCounts[currentSection] = sectionCounts[currentSection] || {};
        return;
      }
      if (!child.matches('ul.leaders, ul.drinks')) return;
      Array.from(child.querySelectorAll('li')).forEach((li) => {
        const nameEl = li.querySelector('.name');
        const priceEl = li.querySelector('.price');
        if (!nameEl || !priceEl || !currentSection) return;
        const itemName = normalizeMenuText(nameEl.textContent);
        const key = currentSection + ' > ' + itemName;
        const override = overrides[key];
        if (override === undefined) return;
        sectionCounts[currentSection][itemName] = (sectionCounts[currentSection][itemName] || 0) + 1;
        const occurrence = sectionCounts[currentSection][itemName] - 1;
        if (Array.isArray(override)) {
          if (override[occurrence] !== undefined) priceEl.textContent = override[occurrence];
        } else priceEl.textContent = override;
      });
    });
  });
}

function loadCentralizedMenuPrices() {
  const script = document.createElement('script');
  script.src = 'menu-prices.js?v=' + Date.now();
  script.onload = applyMenuPriceOverrides;
  script.onerror = () => console.error('Unable to load menu-prices.js');
  document.head.appendChild(script);
}

loadCentralizedMenuPrices();

/* Expandable Menu submenu. Categories are generated from the actual h2
   headings in the menu, so the list stays synchronized with the menu. */
function setupMenuCategorySubmenu() {
  if (!menu) return;

  const menuLink = Array.from(menu.querySelectorAll('a')).find((link) =>
    link.getAttribute('href') === '#menu' || normalizeMenuText(link.textContent).toLowerCase() === 'menu'
  );
  if (!menuLink) return;

  const oldSubmenu = menu.querySelector('.menu-category-submenu');
  if (oldSubmenu) oldSubmenu.remove();

  const headings = Array.from(document.querySelectorAll('.menu-section h2.menu-h2, .menu-section h2'));
  if (!headings.length) return;

  const submenu = document.createElement('div');
  submenu.className = 'menu-category-submenu';
  submenu.setAttribute('aria-label', 'Menu categories');
  submenu.style.display = 'none';
  submenu.style.flexDirection = 'column';
  submenu.style.width = '100%';
  submenu.style.boxSizing = 'border-box';
  submenu.style.padding = '6px 0 8px';
  submenu.style.margin = '0';
  submenu.style.background = '#fff';
  submenu.style.borderTop = '1px solid #ddd';
  submenu.style.borderBottom = '1px solid #ddd';
  submenu.style.position = 'relative';
  submenu.style.zIndex = '4100';

  headings.forEach((heading, index) => {
    const base = normalizeMenuText(heading.textContent).toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '') || 'section-' + index;
    let id = 'menu-' + base;
    let suffix = 2;
    while (document.getElementById(id) && document.getElementById(id) !== heading) id = 'menu-' + base + '-' + suffix++;
    heading.id = id;
    heading.style.scrollMarginTop = '90px';

    const link = document.createElement('a');
    link.href = '#' + id;
    link.textContent = normalizeMenuText(heading.textContent);
    link.className = 'menu-category-link';
    link.setAttribute('role', 'menuitem');
    Object.assign(link.style, {
      display: 'block', width: '100%', boxSizing: 'border-box', padding: '9px 24px 9px 42px',
      margin: '0', color: '#000', background: '#fff', fontFamily: "'Josefin Sans', Arial, sans-serif",
      fontSize: '15px', fontWeight: '600', lineHeight: '1.2', textDecoration: 'none', textAlign: 'left'
    });

    link.addEventListener('click', (event) => {
      event.preventDefault();
      heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
      submenu.style.display = 'none';
      menuLink.setAttribute('aria-expanded', 'false');
      ham?.classList.remove('ham-open');
    });
    submenu.appendChild(link);
  });

  menuLink.setAttribute('aria-haspopup', 'true');
  menuLink.setAttribute('aria-expanded', 'false');
  menuLink.style.cursor = 'pointer';
  menuLink.addEventListener('click', (event) => {
    event.preventDefault();
    const isOpen = submenu.style.display === 'flex';
    submenu.style.display = isOpen ? 'none' : 'flex';
    menuLink.setAttribute('aria-expanded', String(!isOpen));
  });

  menuLink.insertAdjacentElement('afterend', submenu);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupMenuCategorySubmenu, { once: true });
} else {
  setupMenuCategorySubmenu();
}

/* Location address: mobile opens the device's default maps app;
   desktop opens Google Maps. */
function setupLocationMapChooser() {
  const locationSection = document.querySelector('.location');
  if (!locationSection) return;

  const addressText = '3656 Satellite Boulevard, Duluth, GA 30043';
  let addressLink = Array.from(locationSection.querySelectorAll('a')).find((el) =>
    normalizeMenuText(el.textContent).toLowerCase() === addressText.toLowerCase()
  );

  if (!addressLink) {
    addressLink = document.createElement('a');
    addressLink.textContent = addressText;
    addressLink.href = '#';
    addressLink.className = 'location-address-link';
    const heading = locationSection.querySelector('h1, h2');
    const map = locationSection.querySelector('.map');
    if (heading) heading.insertAdjacentElement('afterend', addressLink);
    else if (map) map.insertAdjacentElement('beforebegin', addressLink);
  }

  addressLink.href = '#';
  addressLink.setAttribute('role', 'link');
  addressLink.setAttribute('aria-label', 'Open directions to 3656 Satellite Boulevard, Duluth, GA 30043');
  addressLink.style.cursor = 'pointer';

  if (addressLink.dataset.mapChooserBound) return;
  addressLink.dataset.mapChooserBound = 'true';

  addressLink.addEventListener('click', (event) => {
    event.preventDefault();
    const encodedAddress = encodeURIComponent(addressText);
    const userAgent = navigator.userAgent || '';
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isAndroid = /Android/i.test(userAgent);
    const isMobile = isIOS || isAndroid || /Mobile|IEMobile|Opera Mini/i.test(userAgent);

    if (isIOS) {
      window.location.href = 'maps://?address=' + encodedAddress;
    } else if (isAndroid) {
      window.location.href = 'geo:0,0?q=' + encodedAddress;
    } else if (isMobile) {
      window.location.href = 'geo:0,0?q=' + encodedAddress;
    } else {
      window.location.href = 'https://www.google.com/maps/search/?api=1&query=' + encodedAddress;
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupLocationMapChooser, { once: true });
} else {
  setupLocationMapChooser();
}
