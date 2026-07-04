// EMSTYLAR — Grille de vidéos (lecteur HTML5 natif, aucune dépendance externe)
// Met en pause les autres lecteurs dès qu'une vidéo démarre, pour éviter
// que plusieurs pistes audio se superposent dans la grille.

export function initVideos() {
  const players = Array.from(document.querySelectorAll(".video-card__player"));
  if (!players.length) return;

  players.forEach((player) => {
    player.addEventListener("play", () => {
      players.forEach((other) => {
        if (other !== player && !other.paused) other.pause();
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", initVideos);
