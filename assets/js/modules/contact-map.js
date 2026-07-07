// EMSTYLAR — Carte de localisation (Google Maps)
// Intégration sans clé API : simple <iframe> pointant vers l'endpoint public
// Google Maps "output=embed" (aucune bibliothèque externe, aucune dépendance
// payante). Préfère les coordonnées GPS de config/maps.js dès qu'elles sont
// renseignées ; utilise en attendant l'adresse textuelle déjà affichée par la
// carte "Adresse" de cette même page (config/maps.js reste l'unique source
// de vérité, aucune adresse n'est dupliquée ici).

import { maps } from "../../../config/maps.js";
import { company } from "../../../config/company.js";

const MAP_BASE_URL = "https://www.google.com/maps";

function buildMapQuery() {
  const { lat, lng } = maps.coordinates;
  if (typeof lat === "number" && typeof lng === "number") {
    return `${lat},${lng}`;
  }
  return maps.address;
}

function buildMapEmbedUrl() {
  const query = encodeURIComponent(buildMapQuery());
  return `${MAP_BASE_URL}?q=${query}&output=embed`;
}

export function initContactMap() {
  const wrapper = document.querySelector("[data-contact-map]");
  if (!wrapper) return;

  const title = `Localisation de ${company.name} — ${maps.address}`;

  wrapper.innerHTML = `
    <iframe
      class="contact-map__frame"
      src="${buildMapEmbedUrl()}"
      title="${title}"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  `;
}

document.addEventListener("DOMContentLoaded", initContactMap);
