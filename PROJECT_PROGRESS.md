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
├── config/                 Configuration centralisée (source unique de vérité)
│   ├── site.js              Version, environnement, copyright
│   ├── company.js            Identité (nom, slogan, ville, quartier, repère, pays)
│   ├── contact.js             Téléphone, WhatsApp, email, horaires
│   ├── social.js              Réseaux sociaux (placeholders)
│   ├── maps.js                 Adresse, coordonnées GPS et lien Google Maps (placeholders)
│   ├── seo.js                  Métadonnées SEO (préparées, non injectées par JS)
│   └── form.js                 Endpoint Formspree (placeholder) et messages
├── assets/
│   ├── css/                variables, reset, base, layout, components, pages/*
│   ├── js/                  main.js + modules ES6 (navbar, gallery, contact-form,
│   │                        config-bindings, etc.)
│   ├── img/                  médias optimisés (à venir)
│   └── video/                vidéos utilisées sur le site
├── fotos/                    photos sources (non modifiées)
├── logo/                     logo source (non modifié)
├── videos/                   vidéos sources (non modifiées)
├── scripts/                  start-server.bat / start-server.ps1 (lancement du serveur local)
├── sitemap.xml, robots.txt, .nojekyll   Préparation SEO et hébergement (GitHub Pages)
├── README.md
├── DEVELOPMENT.md            Guide de développement (lancement, tests, procédures Git)
└── .gitignore
```

- **Version actuelle :** v0.5.0
- **Date de création du projet :** 2026-07-02
- **Dernière mise à jour de ce document :** 2026-07-04
- **Dernier commit :** `3e223be` — refactor(config): centralize project configuration and prepare production settings *(placeholder — à mettre à jour à chaque fin de Milestone)*
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
| Intégrations & Configuration Centralisée | ✅ Terminé |
| WhatsApp + Google Maps + Formulaire (intégrations réelles) | ⬜ Restant *(architecture prête dans `config/` ; il ne reste qu'à renseigner l'endpoint Formspree réel et la carte Google Maps réelle)* |
| SEO Professionnel & Préparation au Déploiement | ✅ Terminé |
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
- Architecture de configuration centralisée (`config/`) : 7 fichiers (site, company, contact, social, maps, seo, form) qui constituent désormais la source unique de vérité pour le nom de l'entreprise, le slogan, l'adresse, le téléphone, le WhatsApp, l'email, les horaires, les réseaux sociaux, les métadonnées SEO et la configuration du formulaire.
- Module `config-bindings.js` : lie automatiquement les valeurs de `config/` au HTML (attributs `data-config-text`, `data-config-attr`, `data-whatsapp-message`), sur les 6 pages du site — un futur changement de téléphone, WhatsApp, adresse, slogan ou horaires ne nécessite plus qu'une seule modification dans `config/`.
- SEO professionnel complet sur les 6 pages : title et meta description uniques et optimisés, meta keywords/author/language/robots/theme-color, `<link rel="canonical">`, favicon (logo existant en placeholder), balises Open Graph et Twitter Cards, données structurées JSON-LD `LocalBusiness` (nom, slogan, téléphone, adresse, horaires), `sitemap.xml` (6 pages) et `robots.txt` (indexation autorisée, sitemap référencé).
- Préparation au déploiement : `.nojekyll` (compatibilité GitHub Pages), `DEVELOPMENT.md` (guide de développement complet) et `scripts/start-server.bat` / `scripts/start-server.ps1` (lancement rapide du serveur local).

## Fonctionnalités restantes

- Intégration de la carte Google Maps réelle (actuellement carte illustrée + bouton placeholder piloté par `config/maps.js`).
- Connexion réelle du formulaire à Formspree (actuellement URL placeholder `config/form.js` → `https://formspree.io/f/xxxxxxxx`).
- Remplacement du domaine placeholder `https://www.emstylar.com` (canonical, Open Graph, sitemap.xml, robots.txt, JSON-LD) une fois le nom de domaine réel confirmé.
- Image Open Graph / Twitter Card réelle (actuellement `content="#"` en placeholder) — à produire lors du Milestone Optimisation des médias.
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
- Les horaires d'ouverture affichés sont des placeholders explicitement marqués comme tels (badge "Placeholder" + légende du tableau) ; leur unique source est désormais `config/contact.js` (l'incohérence entre les horaires de about.html et de contact.html, qui différaient avant ce Milestone, a été corrigée à cette occasion).
- Toutes les données de l'entreprise (téléphone, WhatsApp, email, adresse, nom, slogan, horaires, année de copyright) sont centralisées dans `config/` et synchronisées au DOM par `assets/js/modules/config-bindings.js` via des attributs `data-config-text` / `data-config-attr` / `data-whatsapp-message`. Le HTML garde toujours un texte correct par défaut (fallback statique, lisible sans JavaScript et par les robots d'indexation) ; le module se contente de le resynchroniser avec `config/` au chargement.
- `config/seo.js` est volontairement **non** injecté dans le `<head>` par JavaScript : les balises meta/Open Graph doivent rester statiques dans le HTML pour être lisibles par les robots d'indexation et les aperçus de liens (Facebook, WhatsApp...), qui n'exécutent pas toujours le JavaScript. Les valeurs des balises `<head>` de chaque page sont donc écrites en dur, mais restent cohérentes avec `config/seo.js`, `config/company.js` et `config/contact.js` : en cas de changement, mettre à jour ces deux endroits.
- Le domaine `https://www.emstylar.com` (canonical, Open Graph, sitemap.xml, robots.txt, JSON-LD, `config/seo.js`) est un **placeholder** : à remplacer partout par le nom de domaine réel une fois confirmé.
- `.nojekyll` est un fichier vide à la racine : il désactive le traitement Jekyll par défaut de GitHub Pages pour garantir un service fichier-à-fichier fidèle au dépôt.

## Notes pour les prochains développements

- Le README.md existant contient une roadmap (Milestone 0 à 5) antérieure et distincte de la nomenclature utilisée dans ce document ; ce fichier `PROJECT_PROGRESS.md` fait désormais référence pour le suivi d'avancement.
- Mettre à jour ce document à la fin de chaque Milestone (statut, dernier commit, notes).
- Pour changer le téléphone, le WhatsApp, l'email, l'adresse, le slogan ou les horaires du site : modifier uniquement les fichiers dans `config/`, jamais le HTML directement.
- Voir [DEVELOPMENT.md](DEVELOPMENT.md) pour le guide complet de lancement, de test et de contribution.
- Le Milestone 11 sera le prochain chantier après validation de l'utilisateur (intégration réelle Google Maps/Formspree, Performance, ou Optimisation des médias selon la priorité choisie).
