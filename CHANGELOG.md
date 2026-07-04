# Changelog

Tous les changements notables de ce projet sont documentés dans ce fichier.

Le format s'inspire de [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/).

## [Non publié]

### À venir

- WhatsApp + Google Maps + Formulaire (intégration réelle Google Maps et Formspree — architecture déjà en place dans `config/`)
- SEO
- Performance
- Optimisation des médias
- Déploiement

## [0.4.0] — 2026-07-04

### Ajouté

- **Configuration centralisée** : nouveau dossier `config/` avec 7 fichiers (`site.js`, `company.js`, `contact.js`, `social.js`, `maps.js`, `seo.js`, `form.js`) constituant la source unique de vérité pour toutes les informations de l'entreprise (nom, slogan, ville/quartier/repère, téléphone, WhatsApp, email, horaires, réseaux sociaux, métadonnées SEO, configuration Formspree).
- Module `assets/js/modules/config-bindings.js` : lie automatiquement `config/` au HTML via des attributs `data-config-text`, `data-config-attr` et `data-whatsapp-message`, sur les 6 pages du site.

### Modifié

- Remplacement des valeurs codées en dur (téléphone, WhatsApp, email, adresse, nom, slogan, horaires, année de copyright) par des liaisons vers `config/` sur `index.html`, `about.html`, `services.html`, `gallery.html`, `videos.html` et `contact.html`, sans aucun changement visuel.
- Le formulaire de contact et le bouton "Ouvrir dans Google Maps" pointent désormais vers les placeholders définis dans `config/form.js` et `config/maps.js`.
- `assets/js/main.js` simplifié : la logique de l'année de copyright est désormais gérée par `config-bindings.js` (source unique avec `config/site.js`).

### Corrigé

- Incohérence des horaires d'ouverture entre `about.html` (2 lignes, Lundi–Samedi confondus) et `contact.html` (3 lignes, Samedi distinct) : un seul jeu d'horaires fait désormais foi, dans `config/contact.js`.
- Format d'affichage du téléphone incohérent selon les pages ("+237 6 96 02 36 73" vs "+237 696 02 36 73") : un seul format canonique est désormais utilisé partout.

## [0.3.0] — 2026-07-04

### Ajouté

- **Contact** : page Contact complète — hero (breadcrumb, titre, sous-titre, image de couverture), cartes de coordonnées à icônes SVG (EMSTYLAR, téléphone, WhatsApp, email, adresse), formulaire HTML5 (Nom, Prénom, Email, Téléphone, Sujet, Type de demande, Message) avec validation native et retour visuel (`is-invalid`), préparé pour Formspree (URL placeholder), section WhatsApp dédiée (message pré-rempli), carte de localisation illustrée (Yaoundé › Nkolbisson › Usine des Eaux) avec bouton "Ouvrir dans Google Maps" (lien placeholder), section Horaires (placeholders), FAQ Contact (accordéon réutilisé), CTA final ("Votre prochaine création commence ici.").

## [0.2.0] — 2026-07-04

### Ajouté

- **Videos** : page Vidéos complète — hero (breadcrumb, titre, sous-titre, image de couverture), grille responsive de 5 cartes vidéo utilisant les fichiers existants (`assets/video/video-01.mp4` à `video-05.mp4`), lecteur HTML5 natif (`controls`, `controlsList="nodownload"`, `preload="metadata"`), catégorie/description/durée par carte, boutons "Demander cette création" et WhatsApp (message pré-rempli par vidéo), module JS `videos.js` (pause automatique des autres lecteurs).
- Fichiers de documentation projet : `PROJECT_PROGRESS.md`, `PROJECT_RULES.md`, `PROJECT_TODO.md`, `CHANGELOG.md`.

## [0.1.0] — 2026-07-04

### Ajouté

- **Foundation** : architecture des dossiers, pages HTML de base, fichiers CSS de base (`variables.css`, `reset.css`, `base.css`, `layout.css`), README, `.gitignore`.
- **Design System** : design tokens (couleurs, typographies, échelles), composants réutilisables (`components.css`).
- **Layout & Navigation** : header responsive avec menu mobile, footer partagé, bouton WhatsApp dans le header.
- **Homepage** : hero et sections de présentation premium.
- **About** : contenu complet de la page À propos.
- **Services** : page complète présentant les formations et les cours de vacances.
- **Gallery** : galerie photos premium avec filtres par catégorie et lightbox accessible.
