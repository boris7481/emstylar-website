// EMSTYLAR — Apparition progressive des éléments au scroll
// Ajoute .is-visible aux éléments [data-reveal] quand ils entrent dans le
// viewport (une seule fois). Dégrade en affichage immédiat si
// IntersectionObserver est indisponible ou si l'utilisateur préfère un
// mouvement réduit : le contenu reste toujours visible dans tous les cas.

export function initScrollReveal(selector = "[data-reveal]") {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}
