// EMSTYLAR — Compteurs animés ("Nos réalisations en chiffres")
// Anime chaque nombre de 0 jusqu'à sa valeur finale quand la section entre
// dans le viewport (une seule fois). Le HTML affiche déjà la valeur finale
// par défaut (voir index.html) : sans JavaScript, sans IntersectionObserver
// ou avec prefers-reduced-motion, le contenu reste correct et aucune
// animation n'est déclenchée (même principe que reveal.js).

const DURATION = 1400;

export function initCounters(selector = "[data-count-to]") {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  elements.forEach((el) => observer.observe(el));
}

function animateCount(el) {
  const target = Number(el.dataset.countTo);
  if (!Number.isFinite(target)) return;

  const prefix = el.dataset.countPrefix ?? "";
  const suffix = el.dataset.countSuffix ?? "";
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / DURATION, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubique
    const value = Math.round(target * eased);
    el.textContent = `${prefix}${value}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  el.textContent = `${prefix}0${suffix}`;
  requestAnimationFrame(tick);
}

document.addEventListener("DOMContentLoaded", () => initCounters());
