// EMSTYLAR — Métadonnées SEO (source unique de vérité)
// Préparé pour le Milestone SEO dédié : ces valeurs restent volontairement
// non injectées dans le <head> par JavaScript (les balises meta/Open Graph
// doivent rester statiques dans le HTML pour être lisibles par les robots
// d'indexation et les aperçus de liens, qui n'exécutent pas toujours le JS).

import { company } from "./company.js";

export const seo = {
  siteName: `${company.name} — ${company.slogan}`,
  description:
    "Atelier de mode, couture et stylisme à Nkolbisson (Usine des Eaux), Yaoundé — créations sur mesure, formations et stages de vacances.",
  author: company.name,
  language: "fr",
  keywords: [
    "EMSTYLAR",
    "couture Yaoundé",
    "atelier de mode Cameroun",
    "stylisme",
    "couture sur mesure",
    "formation couture",
    "Nkolbisson",
  ],
  openGraph: {
    type: "website",
    siteName: company.name,
    locale: "fr_FR",
    // Placeholder — image Open Graph à définir lors du Milestone Optimisation des médias.
    image: "#",
  },
  twitter: {
    card: "summary_large_image",
    // Placeholder — compte Twitter/X à confirmer.
    site: "#",
  },
  // Placeholder — nom de domaine non encore confirmé (utilisé pour le canonical,
  // sitemap.xml et robots.txt en attendant la confirmation du domaine réel).
  canonicalBase: "https://www.emstylar.com",
};

export default seo;
