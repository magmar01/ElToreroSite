/* Load the regular-menu artifact fix after all legacy styles. */
const menuArtifactCss = document.createElement('link');
menuArtifactCss.rel = 'stylesheet';
menuArtifactCss.href = 'menu-artifact-fix.css?v=20260908-1';
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
    node.addEventListener('click', function() {
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

  /* If the old static option is not present, create the floating control. */
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

  /* Override legacy positioning so it cannot remain as a static menu item. */
  Object.assign(backToTop.style, {
    position: 'fixed',
    right: '24px',
    bottom: '24px',
    top: 'auto',
    left: 'auto',
    margin: '0',
    display: 'none',
    width: 'auto',
    minWidth: '150px',
    padding: '12px 18px',
    zIndex: '5000',
    boxSizing: 'border-box',
    cursor: 'pointer',
    border: '2px solid #000',
    borderRadius: '999px',
    background: '#fff',
    color: '#000',
    fontFamily: "'Josefin Sans', Arial, sans-serif",
    fontSize: '1rem',
    fontWeight: '700',
    lineHeight: '1.1',
    textAlign: 'center',
    boxShadow: '0 3px 12px rgba(0,0,0,.25)'
  });

  const goToMenuTop = () => {
    const top = menuSection
      ? menuSection.getBoundingClientRect().top + window.scrollY
      : 0;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  /* Avoid stacking duplicate click handlers if the script is ever loaded twice. */
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
    const shouldShow = window.scrollY >= Math.max(0, threshold - 10);
    backToTop.style.display = shouldShow ? 'block' : 'none';
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

    const name = document.createElement('span');
    name.className = 'name';
    name.textContent = 'POLLO LOCO MIXED';

    const price = document.createElement('span');
    price.className = 'price';
    price.textContent = '18.25';

    const desc = document.createElement('small');
    desc.className = 'desc';
    desc.textContent = 'STEAK, CHICKEN & SHRIMP';

    li.appendChild(name);
    li.appendChild(price);
    li.appendChild(desc);
  });
}

function repairMenuMarkup() {
  cleanMalformedMenuText();
  repairPolloLocoMixed();

  document.querySelectorAll('.menu-section li').forEach((li) => {
    const nameEl = li.querySelector('.name');
    const priceEl = li.querySelector('.price');
    const descEl = li.querySelector('.desc');

    if (nameEl) {
      nameEl.textContent = nameEl.textContent.replace(/\s*\/span>\s*/gi, ' ').replace(/\s{2,}/g, ' ').trim();
    }

    if (priceEl) {
      if (descEl && priceEl.contains(descEl)) {
        const priceText = priceEl.childNodes[0]?.textContent || '';
        priceEl.textContent = priceText.replace(/\s*\/span>\s*/gi, ' ').replace(/\s{2,}/g, ' ').trim();
        li.appendChild(descEl);
      } else {
        priceEl.textContent = priceEl.textContent.replace(/\s*\/span>\s*/gi, ' ').replace(/\s{2,}/g, ' ').trim();
      }
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
        } else {
          priceEl.textContent = override;
        }
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

/* Robust floating Back to Top initialization. This runs after the page body
   exists, removes any legacy/static version, and uses the Hours section's
   actual viewport position as the show/hide trigger. */
function initReliableBackToTop() {
  document.querySelectorAll('.floating-back-to-top').forEach((el) => el.remove());

  const button = document.createElement('button');
  button.type = 'button';
  button.id = 'floating-back-to-top';
  button.className = 'floating-back-to-top';
  button.textContent = 'Back to Top';
  button.setAttribute('aria-label', 'Return to top of menu');
  button.title = 'Return to top of menu';

  Object.assign(button.style, {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    top: 'auto',
    left: 'auto',
    display: 'none',
    visibility: 'hidden',
    opacity: '0',
    zIndex: '2147483647',
    minWidth: '150px',
    padding: '12px 18px',
    margin: '0',
    boxSizing: 'border-box',
    border: '2px solid #000',
    borderRadius: '999px',
    background: '#fff',
    color: '#000',
    cursor: 'pointer',
    fontFamily: "'Josefin Sans', Arial, sans-serif",
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '1.1',
    textAlign: 'center',
    boxShadow: '0 3px 12px rgba(0,0,0,.25)'
  });

  document.body.appendChild(button);

  const show = () => {
    button.style.display = 'block';
    button.style.visibility = 'visible';
    button.style.opacity = '1';
  };

  const hide = () => {
    button.style.display = 'none';
    button.style.visibility = 'hidden';
    button.style.opacity = '0';
  };

  const update = () => {
    const hours = document.querySelector('.hours-section');
    if (!hours) {
      hide();
      return;
    }
    /* Show once the bottom edge of Hours has scrolled above the viewport. */
    if (hours.getBoundingClientRect().bottom <= 0) show();
    else hide();
  };

  button.addEventListener('click', () => {
    const menuSection = document.querySelector('.menu-section');
    const top = menuSection
      ? menuSection.getBoundingClientRect().top + window.scrollY
      : 0;
    window.scrollTo({ top, behavior: 'smooth' });
  });

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReliableBackToTop, { once: true });
} else {
  initReliableBackToTop();
}
