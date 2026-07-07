// EMSTYLAR — Métadonnées SEO (source unique de vérité)
// Préparé pour le Milestone SEO dédié : ces valeurs restent volontairement
// non injectées dans le <head> par JavaScript (les balises meta/Open Graph
// doivent rester statiques dans le HTML pour être lisibles par les robots
// d'indexation et les aperçus de liens, qui n'exécutent pas toujours le JS).

import { company } from "./company.js";

// Domaine canonique officiel (sans www — www.emstylar.com redirige vers cette
// adresse). Utilisé pour le canonical, sitemap.xml, robots.txt et les URLs
// absolues Open Graph/Twitter.
const canonicalBase = "https://emstylar.com";

// Image de partage (Open Graph / Twitter Card / JSON-LD), 1200×630.
// Placeholder de marque en attendant le visuel définitif : il suffit de
// remplacer ce fichier (même nom, mêmes dimensions) pour que le site utilise
// automatiquement la nouvelle image, sans toucher au code.
const ogImagePath = "assets/optimized/img/og/og-image.jpg";
const ogImageUrl = `${canonicalBase}/${ogImagePath}`;

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
  canonicalBase,
  openGraph: {
    type: "website",
    siteName: company.name,
    locale: "fr_FR",
    image: ogImageUrl,
    imageWidth: 1200,
    imageHeight: 630,
    imageType: "image/jpeg",
    imageAlt: `${company.name} — ${company.slogan}`,
  },
  twitter: {
    card: "summary_large_image",
    // Placeholder — compte Twitter/X à confirmer.
    site: "#",
    image: ogImageUrl,
    imageAlt: `${company.name} — ${company.slogan}`,
  },
};

export default seo;
