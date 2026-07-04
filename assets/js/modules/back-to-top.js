// EMSTYLAR — Bouton flottant de retour en haut de page

import { onScroll } from "./scroll.js";

export function initBackToTop() {
  const button = document.getElementById("back-to-top");
  if (!button) return;

  onScroll((y) => {
    button.classList.toggle("is-visible", y > 400);
  });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
