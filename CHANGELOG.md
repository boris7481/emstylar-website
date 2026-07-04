# Changelog

Tous les changements notables de ce projet sont documentés dans ce fichier.

Le format s'inspire de [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/).

## [Non publié]

### À venir

- WhatsApp + Google Maps + Formulaire (intégration réelle Google Maps et Formspree — architecture déjà en place dans `config/`)
- Nom de domaine réel (remplacement du placeholder `https://www.emstylar.com`)
- Image Open Graph / Twitter Card réelle
- Déploiement

## [0.6.0] — 2026-07-04

### Ajouté

- **Médias optimisés** : nouveau dossier `assets/optimized/` —
  - `img/` : chaque photo (`fotos/`) et le logo (`logo/`) sont désormais disponibles en WebP + JPEG optimisé, en deux tailles (`-lg` pleine résolution pour les héros/contenus, `-sm` ~640px pour les vignettes de galerie et les posters vidéo). Le logo est réduit à 120×120 (affiché à 44-48px).
  - `video/` : les 5 vidéos sont réencodées en H.264 (CRF 26, CRF 28 pour la plus complexe) avec `-movflags +faststart`, sans changement de résolution ni de framerate.
  - Les fichiers sources (`fotos/`, `logo/`, `videos/`, `assets/video/`) restent strictement intacts : uniquement des copies ont été créées.
- **Préparation cache/CDN** : `netlify.toml` et `vercel.json`, cache long pour les médias/CSS/JS et revalidation systématique des pages HTML (aucun backend ajouté ; ignorés sans risque par GitHub Pages).

### Modifié

- Les 6 pages (`index.html`, `about.html`, `services.html`, `gallery.html`, `videos.html`, `contact.html`) utilisent désormais les médias optimisés via `<picture>`/`<source type="image/webp">` (photos, logo, favicon) et les vidéos/posters optimisés, sans aucun changement visuel, de design ou d'animation.
- `assets/js/modules/gallery.js` : la lightbox affiche désormais l'image en pleine résolution (`-lg`, via un attribut `data-full`) plutôt que la vignette compressée de la grille (`-sm`), pour éviter tout flou.
- `config/site.js` : version passée à `v0.6.0`.

### Vérifié (audit, sans modification)

- HTML/CSS/JS : aucun `console.log`/`debugger` résiduel, aucune duplication significative, tous les imports ES6 utilisés.
- Un seul H1 par page, hiérarchie H2/H3 sans saut de niveau, `alt` sur toutes les images, `loading="lazy"`/`fetchpriority`/dimensions déjà conformes.

## [0.5.0] — 2026-07-04

### Ajouté

- **Documentation de développement** : `DEVELOPMENT.md` (présentation du projet, prérequis, structure, lancement via Live Server/Python/npx serve, explication de la restriction `file:///` sur les modules ES6, fonctionnement de `config/`, procédures de test/commit/push/Milestone).
- **Scripts de développement** : `scripts/start-server.bat` et `scripts/start-server.ps1`, qui lancent `python -m http.server 8000` et rappellent l'URL locale.
- **Préparation GitHub Pages** : fichier `.nojekyll` à la racine, pour désactiver le traitement Jekyll par défaut.
- **SEO professionnel** sur les 6 pages (`index.html`, `about.html`, `services.html`, `gallery.html`, `videos.html`, `contact.html`) :
  - Title et meta description uniques, optimisés et remplaçant les placeholders "Description à venir".
  - Meta keywords, author, language, robots (`index, follow`), theme-color.
  - `<link rel="canonical">` et favicon (logo existant, non modifié, utilisé en placeholder).
  - Balises Open Graph (title, description, type, image placeholder, url, site_name, locale) et Twitter Cards (card, title, description, image placeholder).
  - Données structurées JSON-LD `LocalBusiness` (nom, slogan, téléphone, adresse, ville, quartier, pays, horaires, url), identiques sur les 6 pages et alimentées par les valeurs de `config/`.
- **`sitemap.xml`** listant les 6 pages (domaine placeholder `https://www.emstylar.com`) et **`robots.txt`** autorisant l'indexation et référençant le sitemap.

### Modifié

- `config/seo.js` : `canonicalBase` renseigné avec le domaine placeholder `https://www.emstylar.com` (remplaçait `#`).
- `config/site.js` : version passée à `v0.5.0`.

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
