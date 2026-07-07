// EMSTYLAR — Point d'entrée JavaScript
// Charge et initialise les modules communs à toutes les pages.

import { initLoader } from "./modules/loader.js";
import { initNavbar } from "./modules/navbar.js";
import { initBackToTop } from "./modules/back-to-top.js";
import { initWhatsappButton } from "./modules/whatsapp-button.js";
import { initScrollHeader, initHeroParallax } from "./modules/scroll.js";
import { initScrollReveal } from "./modules/reveal.js";
import { applyConfig } from "./modules/config-bindings.js";

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  applyConfig();
  initNavbar();
  initBackToTop();
  initWhatsappButton();
  initScrollHeader(document.getElementById("site-header"));
  initHeroParallax(document.querySelector(".hero__media"));
  initScrollReveal();
});
