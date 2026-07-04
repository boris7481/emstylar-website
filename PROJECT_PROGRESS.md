# EMSTYLAR — Suivi de progression du projet

## Informations générales

- **Nom du projet :** EMSTYLAR — L'œil du Design
- **Description :** Site vitrine officiel de l'atelier de mode, couture et stylisme EMSTYLAR, situé à Nkolbisson (Usine des Eaux), Yaoundé, Cameroun.
- **Objectif du site :** Présenter l'atelier, ses services (formations et cours de vacances), sa galerie de créations (photos et vidéos), et permettre aux visiteurs de contacter l'atelier facilement (WhatsApp, formulaire, localisation).
- **Technologies utilisées :** HTML5, CSS3, JavaScript ES6 (natif, sans framework ni bundler).
- **Structure générale du projet :**

```
Emystylar/
├── index.html            Accueil
├── about.html             À propos
├── services.html          Services
├── gallery.html            Galerie photos
├── videos.html             Galerie vidéos
├── contact.html            Contact
├── assets/
│   ├── css/                variables, reset, base, layout, components, pages/*
│   ├── js/                  main.js + modules ES6 (navbar, gallery, contact-form, etc.)
│   ├── img/                  médias optimisés (à venir)
│   └── video/                vidéos utilisées sur le site
├── fotos/                    photos sources (non modifiées)
├── logo/                     logo source (non modifié)
├── videos/                   vidéos sources (non modifiées)
├── README.md
└── .gitignore
```

- **Version actuelle :** v0.3.0
- **Date de création du projet :** 2026-07-02
- **Dernière mise à jour de ce document :** 2026-07-04
- **Dernier commit :** `3d7e6c8` — feat(videos): build responsive videos page and update project documentation *(placeholder — à mettre à jour à chaque fin de Milestone)*
- **Hébergement prévu :** à définir *(placeholder)*
- **Nom de domaine :** à définir *(placeholder)*

## Tableau d'avancement des Milestones

| Milestone | Statut |
|---|---|
| Foundation | ✅ Terminé |
| Design System | ✅ Terminé |
| Layout & Navigation | ✅ Terminé |
| Homepage | ✅ Terminé |
| About | ✅ Terminé |
| Services | ✅ Terminé |
| Gallery | ✅ Terminé |
| Videos | ✅ Terminé |
| Contact | ✅ Terminé |
| WhatsApp + Google Maps + Formulaire | ⬜ Restant *(WhatsApp finalisé ; Google Maps réel et Formspree réel restants)* |
| SEO | ⬜ Restant |
| Performance | ⬜ Restant |
| Optimisation des médias | ⬜ Restant |
| Déploiement | ⬜ Restant |

## Fonctionnalités déjà disponibles

- Fondations HTML5/CSS3/ES6 : reset, design tokens (variables), base typographique, layout responsive.
- Header et navigation principale (menu mobile, bouton WhatsApp dans le header).
- Footer partagé entre les pages.
- Page d'accueil (hero + sections de présentation premium).
- Page À propos complète.
- Page Services complète (formations et cours de vacances).
- Page Galerie complète : filtres par catégorie, lightbox accessible (clavier, `aria-modal`).
- Page Vidéos complète : hero, grille responsive de 5 vidéos avec lecteur HTML5 natif (contrôles natifs, `preload="metadata"`, téléchargement désactivé), catégorie/description/durée par carte, boutons "Demander cette création" et WhatsApp (message pré-rempli par vidéo).
- Page Contact complète : hero, cartes de coordonnées à icônes SVG (identité, téléphone, WhatsApp, email, adresse), formulaire HTML5 (validation native + retour visuel `is-invalid`) préparé pour Formspree (URL placeholder), section WhatsApp dédiée (message pré-rempli), carte de localisation illustrée (placeholder avant Google Maps réel), horaires (placeholders), FAQ (accordéon réutilisé), CTA final.

## Fonctionnalités restantes

- Intégration de la carte Google Maps réelle (actuellement carte illustrée + bouton placeholder `#`).
- Connexion réelle du formulaire à Formspree (actuellement URL placeholder `https://formspree.io/f/xxxxxxxx`).
- Optimisation SEO (balises meta, Open Graph, données structurées, sitemap.xml, robots.txt).
- Optimisation des performances (Lighthouse > 90).
- Optimisation des médias (compression et redimensionnement des photos/vidéos sources vers `assets/img/` et `assets/video/`).
- Déploiement en production (hébergement + nom de domaine à définir).

## Décisions importantes prises durant le projet

- Aucun framework CSS ou JavaScript n'est utilisé : HTML5 / CSS3 / JavaScript ES6 natif uniquement.
- Les fichiers sources (`fotos/`, `logo/`, `videos/`) ne doivent jamais être modifiés directement ; les versions optimisées seront générées séparément dans `assets/`.
- CSS organisé en cascade stricte : `variables → reset → base → layout → components → pages/*`.
- JavaScript organisé en modules ES6 natifs (un fichier par responsabilité), importés depuis `main.js`.
- Chaque page inclut un lien d'évitement (`skip-link`) et une structure sémantique pour l'accessibilité.
- La page Vidéos réutilise uniquement le lecteur HTML5 natif (aucun lecteur personnalisé, aucune bibliothèque externe) ; un module JS minimal (`videos.js`) met en pause les autres lecteurs dès qu'une vidéo démarre, pour éviter que plusieurs pistes audio se superposent.
- Les durées de vidéo sont affichées comme placeholder (`Durée : —`) dans les métadonnées de carte : le lecteur natif affiche la durée réelle une fois les métadonnées chargées.
- La page Contact repose entièrement sur la validation HTML5 native (`required`, `type="email"`, etc.) ; `contact-form.js` ne fait qu'ajouter un retour visuel (`is-invalid`) et n'implémente aucun envoi réel tant que l'URL Formspree n'est pas définitive.
- La localisation est présentée sous forme de carte illustrée (Yaoundé › Nkolbisson › Usine des Eaux) avec un bouton "Ouvrir dans Google Maps" en lien placeholder (`#`), en attendant l'intégration de la vraie carte.
- Les horaires d'ouverture affichés sont des placeholders explicitement marqués comme tels (badge "Placeholder" + légende du tableau).

## Notes pour les prochains développements

- Le README.md existant contient une roadmap (Milestone 0 à 5) antérieure et distincte de la nomenclature utilisée dans ce document ; ce fichier `PROJECT_PROGRESS.md` fait désormais référence pour le suivi d'avancement.
- Mettre à jour ce document à la fin de chaque Milestone (statut, dernier commit, notes).
- Le Milestone 9 sera le prochain chantier après validation de l'utilisateur (intégration réelle Google Maps / Formspree envisageable à ce stade, ou SEO selon la priorité choisie).
