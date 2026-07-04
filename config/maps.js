// EMSTYLAR — Localisation (source unique de vérité)
// La vraie carte Google Maps et les coordonnées GPS seront intégrées dans un
// prochain Milestone : ce fichier ne contient pour l'instant que des
// placeholders explicites.

import { company } from "./company.js";

export const maps = {
  address: `${company.district} (${company.landmark}), ${company.city}, ${company.country}`,
  // Placeholder — coordonnées GPS réelles à renseigner avant l'intégration de Google Maps.
  coordinates: {
    lat: null,
    lng: null,
  },
  // Placeholder — lien Google Maps réel à intégrer au prochain Milestone.
  googleMapsUrl: "#",
};

export default maps;
