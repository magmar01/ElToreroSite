/* Centralized menu price/markup hook.
   Restore the two appetizer items that are present in the menu source but were
   missing from the deployed legacy HTML. This runs after the page markup loads. */
(function restoreMissingAppetizers() {
  const heading = Array.from(document.querySelectorAll('.menu-section h2.menu-h2, .menu-section h2'))
    .find((el) => (el.textContent || '').trim().toLowerCase() === 'appetizers');

  if (!heading) return;

  const list = heading.nextElementSibling;
  if (!list || !list.matches('ul.leaders')) return;

  const names = Array.from(list.querySelectorAll(':scope > li .name'))
    .map((el) => (el.textContent || '').trim().toUpperCase());

  const makeItem = (name, price, description) => {
    const li = document.createElement('li');
    const nameEl = document.createElement('span');
    nameEl.className = 'name';
    nameEl.textContent = name;
    const priceEl = document.createElement('span');
    priceEl.className = 'price';
    priceEl.textContent = price;
    li.append(nameEl, priceEl);
    if (description) {
      const descEl = document.createElement('small');
      descEl.className = 'desc';
      descEl.textContent = description;
      li.append(descEl);
    }
    return li;
  };

  const first = list.firstElementChild;
  if (!names.includes('GUACAMOLE DIP')) {
    list.insertBefore(makeItem('GUACAMOLE DIP', '8.50', 'CREAMY OR CHUNKY'), first);
  }
  if (!names.includes('CHEESE DIP')) {
    list.insertBefore(makeItem('CHEESE DIP', '8.50', ''), list.firstElementChild);
  }
})();

window.MENU_PRICE_OVERRIDES = window.MENU_PRICE_OVERRIDES || {};
