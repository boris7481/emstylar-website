// EMSTYLAR — Point d'entrée JavaScript
// Charge et initialise les modules communs à toutes les pages.

import { initNavbar } from "./modules/navbar.js";
import { initBackToTop } from "./modules/back-to-top.js";
import { initWhatsappButton } from "./modules/whatsapp-button.js";
import { initScrollHeader, initHeroParallax } from "./modules/scroll.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initBackToTop();
  initWhatsappButton();
  initScrollHeader(document.getElementById("site-header"));
  initHeroParallax(document.querySelector(".hero__media"));

  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
