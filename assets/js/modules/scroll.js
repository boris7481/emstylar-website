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
