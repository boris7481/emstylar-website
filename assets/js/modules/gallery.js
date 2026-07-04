// EMSTYLAR — Galerie filtrable + lightbox (aucune dépendance externe)

export function initGallery() {
  const grid = document.querySelector("[data-gallery-grid]");
  if (!grid) return;

  const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
  const emptyState = document.querySelector("[data-gallery-empty]");
  const listItems = Array.from(grid.querySelectorAll("[data-category]"));
  const cards = Array.from(grid.querySelectorAll(".gallery-card"));

  initFilters(filterButtons, listItems, emptyState);
  initLightbox(cards);
}

function initFilters(filterButtons, listItems, emptyState) {
  if (!filterButtons.length) return;

  function applyFilter(category) {
    let visibleCount = 0;

    listItems.forEach((item) => {
      // Une réalisation peut appartenir à plusieurs catégories
      // (ex. data-category="femmes robes") : on découpe la liste de mots.
      const categories = item.dataset.category.split(/\s+/);
      const isMatch = category === "all" || categories.includes(category);
      item.hidden = !isMatch;
      if (isMatch) visibleCount += 1;
    });

    if (emptyState) emptyState.hidden = visibleCount > 0;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => {
        btn.classList.remove("is-active");
        btn.setAttribute("aria-pressed", "false");
      });
      button.classList.add("is-active");
      button.setAttribute("aria-pressed", "true");
      applyFilter(button.dataset.filter);
    });
  });
}

function initLightbox(cards) {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox || !cards.length) return;

  const image = document.getElementById("lightbox-image");
  const categoryEl = document.getElementById("lightbox-category");
  const titleEl = document.getElementById("lightbox-title");
  const closeTargets = Array.from(lightbox.querySelectorAll("[data-lightbox-close]"));
  const closeButton = lightbox.querySelector("button[data-lightbox-close]");
  const prevButton = lightbox.querySelector("[data-lightbox-prev]");
  const nextButton = lightbox.querySelector("[data-lightbox-next]");
  const focusable = [closeButton, prevButton, nextButton].filter(Boolean);

  let currentIndex = 0;
  let lastFocused = null;

  const visibleCards = () => cards.filter((card) => !card.closest("[data-category]").hidden);

  function render(list) {
    const card = list[currentIndex];
    const cardImage = card.querySelector("img");
    const category = card.querySelector(".gallery-card__category")?.textContent ?? "";

    // La grille utilise des vignettes compressées (-sm) ; la lightbox affiche
    // l'image en grand format et doit donc utiliser la version pleine (-lg).
    image.src = cardImage.dataset.full || cardImage.src;
    image.alt = cardImage.alt;
    categoryEl.textContent = category;
    titleEl.textContent = cardImage.alt;
  }

  function open(card) {
    const list = visibleCards();
    currentIndex = list.indexOf(card);
    if (currentIndex === -1) currentIndex = 0;

    lastFocused = document.activeElement;
    render(list);
    lightbox.hidden = false;
    document.body.classList.add("has-lightbox-open");
    closeButton?.focus();
  }

  function close() {
    lightbox.hidden = true;
    document.body.classList.remove("has-lightbox-open");
    lastFocused?.focus();
  }

  function step(delta) {
    const list = visibleCards();
    if (!list.length) return;
    currentIndex = (currentIndex + delta + list.length) % list.length;
    render(list);
  }

  cards.forEach((card) => {
    card.addEventListener("click", () => open(card));
  });

  closeTargets.forEach((target) => target.addEventListener("click", close));
  prevButton?.addEventListener("click", () => step(-1));
  nextButton?.addEventListener("click", () => step(1));

  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;

    if (event.key === "Escape") {
      close();
    } else if (event.key === "ArrowLeft") {
      step(-1);
    } else if (event.key === "ArrowRight") {
      step(1);
    } else if (event.key === "Tab") {
      trapFocus(event, focusable);
    }
  });

  // Swipe mobile (seuil simple, sans bibliothèque)
  let touchStartX = 0;

  lightbox.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.touches[0].clientX;
    },
    { passive: true }
  );

  lightbox.addEventListener(
    "touchend",
    (event) => {
      const delta = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) > 50) step(delta > 0 ? -1 : 1);
    },
    { passive: true }
  );
}

function trapFocus(event, elements) {
  if (elements.length === 0) return;

  const first = elements[0];
  const last = elements[elements.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

document.addEventListener("DOMContentLoaded", initGallery);
