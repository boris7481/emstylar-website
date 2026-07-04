// EMSTYLAR — Utilitaires de scroll partagés (header sticky, back-to-top...)

/**
 * Écoute le scroll et exécute callback(scrollY) au plus une fois par frame
 * via requestAnimationFrame, pour éviter de surcharger le thread principal.
 */
export function onScroll(callback) {
  let ticking = false;

  const handle = () => {
    callback(window.scrollY);
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(handle);
        ticking = true;
      }
    },
    { passive: true }
  );

  callback(window.scrollY);
}

/**
 * Bascule le header de transparent (haut de page) à opaque (scrollé)
 * une fois le seuil dépassé, via la classe .site-header--scrolled.
 */
export function initScrollHeader(header, threshold = 24) {
  if (!header) return;

  onScroll((y) => {
    header.classList.toggle("site-header--scrolled", y > threshold);
  });
}

/**
 * Léger effet de parallaxe sur le hero : le conteneur média se déplace un
 * peu plus lentement que le scroll, tant qu'il est visible à l'écran.
 * Appliqué à .hero__media (et non à l'image elle-même, qui porte déjà
 * sa propre animation de zoom "Ken Burns" en CSS). Désactivé pour
 * prefers-reduced-motion.
 */
export function initHeroParallax(heroMedia) {
  if (!heroMedia) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const hero = heroMedia.closest(".hero");
  if (!hero) return;

  onScroll((y) => {
    if (y > hero.offsetHeight) return;
    const offset = Math.min(y * 0.12, 24);
    heroMedia.style.transform = `translateY(${offset}px)`;
  });
}
