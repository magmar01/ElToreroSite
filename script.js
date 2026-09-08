const ham = document.querySelector('.nav-box');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('#menu-close');
const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');
const img = document.querySelector('.image-slider');
const menuLinks = document.querySelectorAll('.menu a');
let num = 1;

/* The original page has optional/legacy slider controls. Do not let a
   missing slider stop the rest of the site JavaScript from running. */
if (ham) {
  menuLinks.forEach((node) => {
    node.addEventListener('click', function() {
      ham.classList.remove('ham-open');
    });
  });

  ham.addEventListener('click', function() {
    ham.classList.add('ham-open');
  });
}

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

/* ---------------------------------------------------------
   Repair a few malformed legacy menu tags before layout/pricing
   code runs. These were literal /span> strings in the HTML and
   caused descriptions to become nested inside price/name spans.
--------------------------------------------------------- */
function repairMenuMarkup() {
  document.querySelectorAll('.menu-section li').forEach((li) => {
    const nameEl = li.querySelector('.name');
    const priceEl = li.querySelector('.price');
    const descEl = li.querySelector('.desc');

    if (nameEl) {
      nameEl.textContent = nameEl.textContent.replace(/\s*\/span>\s*$/i, '').trim();
    }

    if (priceEl) {
      if (descEl && priceEl.contains(descEl)) {
        const priceText = priceEl.childNodes[0]?.textContent || '';
        priceEl.textContent = priceText.replace(/\s*\/span>\s*$/i, '').trim();
        li.appendChild(descEl);
      } else {
        priceEl.textContent = priceEl.textContent.replace(/\s*\/span>\s*$/i, '').trim();
      }
    }
  });
}

repairMenuMarkup();

/* ---------------------------------------------------------
   CENTRALIZED MENU PRICING
   Prices can now be changed in menu-prices.js only.
   The original HTML prices remain the fallback.
--------------------------------------------------------- */
function normalizeMenuText(text) {
  return (text || '').replace(/\s+/g, ' ').trim();
}

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
