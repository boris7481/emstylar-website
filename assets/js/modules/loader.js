// EMSTYLAR — Loader de premier chargement
// Le script inline dans <head> de chaque page pose déjà la classe
// `no-loader` sur <html> si le site a été visité pendant cette session
// (sessionStorage), avant même le premier rendu — ce module n'a donc qu'à
// déclencher la disparition en fondu du loader lors du tout premier
// chargement, puis à le retirer du DOM. Ne retarde jamais l'affichage du
// contenu réel : il réagit au DOMContentLoaded, il ne le fait jamais
// attendre.

export function initLoader() {
  const loader = document.querySelector("[data-loader]");
  if (!loader) return;

  if (document.documentElement.classList.contains("no-loader")) {
    loader.remove();
    return;
  }

  loader.classList.add("is-hidden");
  loader.addEventListener("transitionend", () => loader.remove(), { once: true });
}
