// EMSTYLAR — Navigation responsive (menu mobile, focus, clavier)

export function initNavbar() {
  const header = document.getElementById("site-header");
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("primary-menu-panel");
  const backdrop = document.getElementById("nav-backdrop");

  if (!header || !toggle || !nav) return;

  markActiveLink(nav);

  const links = Array.from(nav.querySelectorAll("a"));
  const trapElements = [toggle, ...links];

  let lastFocused = null;

  const isOpen = () => toggle.getAttribute("aria-expanded") === "true";

  const openMenu = () => {
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fermer le menu de navigation");
    nav.classList.add("is-open");
    backdrop?.classList.add("is-open");
    document.body.classList.add("has-nav-open");
    lastFocused = document.activeElement;
    links[0]?.focus();
  };

  const closeMenu = ({ restoreFocus = true } = {}) => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Ouvrir le menu de navigation");
    nav.classList.remove("is-open");
    backdrop?.classList.remove("is-open");
    document.body.classList.remove("has-nav-open");
    if (restoreFocus) {
      (lastFocused || toggle).focus();
    }
  };

  toggle.addEventListener("click", () => {
    isOpen() ? closeMenu() : openMenu();
  });

  backdrop?.addEventListener("click", () => closeMenu());

  links.forEach((link) => {
    link.addEventListener("click", () => closeMenu({ restoreFocus: false }));
  });

  document.addEventListener("keydown", (event) => {
    if (!isOpen()) return;

    if (event.key === "Escape") {
      closeMenu();
      return;
    }

    if (event.key === "Tab") {
      trapFocus(event, trapElements);
    }
  });

  // Referme le menu si le viewport repasse en desktop (évite un tiroir
  // resté ouvert en arrière-plan après un redimensionnement).
  const desktopQuery = window.matchMedia("(min-width: 768px)");
  desktopQuery.addEventListener("change", (event) => {
    if (event.matches && isOpen()) {
      closeMenu({ restoreFocus: false });
    }
  });
}

function trapFocus(event, elements) {
  const focusable = elements.filter((el) => el.offsetParent !== null);
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function markActiveLink(nav) {
  const current = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

  nav.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href").toLowerCase();
    if (href === current) {
      link.setAttribute("aria-current", "page");
    }
  });
}
