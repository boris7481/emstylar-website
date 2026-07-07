# Changelog

Tous les changements notables de ce projet sont documentés dans ce fichier.

Le format s'inspire de [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/).

## [Non publié]

### À venir

- Endpoint(s) Formspree réel(s) (contact et témoignages — architecture déjà en place dans `config/`)
- Lien "Ouvrir dans Google Maps" réel (actuellement `#`, en attente de coordonnées/lien confirmés)
- Nom de domaine réel (remplacement du placeholder `https://www.emstylar.com`)
- Image Open Graph / Twitter Card définitive
- Intégration du nouveau logo (`assets/img/logo/logo-primary.png`, déjà versionné) dans header/footer/favicon
- Chiffres réels pour la section "Nos réalisations en chiffres" (valeurs actuellement provisoires)
- Déploiement

## [0.12.0] — 2026-07-07

### Ajouté

- **Email officiel dans le footer** (sur les 7 pages) : `Emostyvimlarissa@gmail.com` ajouté à la colonne "Coordonnées" (entre WhatsApp et l'adresse), lien `mailto:` cliquable, accessible et responsive, réutilisant exactement le balisage déjà utilisé pour le téléphone (aucun nouveau composant CSS).

### Modifié

- `config/contact.js` : retrait de la mention "placeholder — à confirmer" sur l'email, l'adresse `email`/`emailHref` étant désormais officiellement confirmée (elle était déjà centralisée, aucun déplacement nécessaire).
- `config/site.js` : version passée à `v0.12.0`.

## [0.11.0] — 2026-07-07

### Ajouté

- **Loader de premier chargement** (sur les 7 pages) : overlay plein écran noir profond avec un anneau doré qui se dessine (esprit fil de couture) autour du monogramme "EM" en fondu — pur CSS/SVG, JavaScript natif uniquement, aucune bibliothèque externe, aucune image supplémentaire. Affiché uniquement lors du tout premier chargement de la session du visiteur (`sessionStorage`), jamais lors des navigations internes suivantes (zéro flash, grâce à un script inline posé avant le premier rendu dans `<head>`). Ne retarde jamais l'affichage du contenu réel (réagit au `DOMContentLoaded`, ne le bloque jamais) et respecte nativement `prefers-reduced-motion` via la règle globale déjà présente dans `reset.css`.
- Nouveaux fichiers `assets/css/loader.css` et `assets/js/modules/loader.js` (fonction `initLoader()`, appelée depuis `assets/js/main.js`).
- **Page 404 personnalisée** (`404.html`) : reprend intégralement le header, le footer, les polices, les couleurs et le Design System du site. Grand chiffre "404", sous-titre "Oups... cette page est introuvable.", texte d'aide, deux boutons ("Retour à l'accueil", "Découvrir nos créations") et une illustration aiguille et fil en SVG pur (aucune image externe). `robots: noindex, follow` (page exclue de l'indexation, liens toujours suivis par les robots), sans Open Graph ni JSON-LD (non pertinents pour une page d'erreur). Servie automatiquement par GitHub Pages / Netlify / Vercel sans configuration supplémentaire (convention `404.html` à la racine du dépôt).
- Nouveau fichier `assets/css/pages/error.css` : réutilise `.section`, `.container`, `.btn` et `.cta-section__actions` du Design System existant ; seuls le grand chiffre, le sous-titre, le texte et l'illustration sont propres à cette page (`.error-page*`).

### Modifié

- `assets/js/main.js` : appel de `initLoader()` ajouté à l'initialisation commune (en premier, avant `applyConfig()`).
- `index.html`, `about.html`, `services.html`, `gallery.html`, `videos.html`, `contact.html` : ajout du script inline anti-flash, du lien vers `loader.css` et du balisage du loader en tout premier élément du `<body>`.
- `config/site.js` : version passée à `v0.11.0`.

## [0.10.0] — 2026-07-07

### Ajouté

- **Carte Google Maps interactive réelle** (page Contact, section "Localisation") : remplace l'ancienne carte illustrée placeholder. Intégration sans clé API ni bibliothèque externe (iframe pointant vers l'endpoint public `https://www.google.com/maps?q=...&output=embed`), en réutilisant l'approche déjà éprouvée sur le projet Watt Security, adaptée à l'architecture `config/*.js` d'EMSTYLAR (au lieu d'un fichier JSON séparé).
- Nouveau module `assets/js/modules/contact-map.js` : construit l'URL d'intégration depuis `config/maps.js`/`config/company.js` — préfère `maps.coordinates` (lat/lng) dès qu'elles seront renseignées, avec repli automatique sur `maps.address` (déjà affiché ailleurs sur la page, aucune adresse dupliquée) tant qu'elles restent à `null`. Titre d'iframe accessible généré dynamiquement, `<noscript>` de repli.
- Aucun nouveau composant CSS structurel : la carte reprend le langage visuel de `.why-us__media` (`--radius-md`/`--shadow-md`). Seules règles ajoutées à `assets/css/pages/contact.css` : `.contact-map`, `.contact-map__frame` (ratio d'aspect responsive 4/3 mobile → 16/9 tablette ≥768px → 21/9 desktop ≥992px), `.contact-map__noscript`, `.contact-map__cta`.
- L'ancien CSS `.map-placeholder*` (illustration de repère avec anneaux et épingle) a été retiré, n'étant plus référencé nulle part.

### Modifié

- Sous-titre de la section "Localisation" (page Contact) mis à jour pour refléter la carte désormais interactive.
- `config/site.js` : version passée à `v0.10.0`.

## [0.9.0] — 2026-07-07

### Ajouté

- **Extension de la section "Avis de nos clientes"** (page d'accueil) : les 6 témoignages existants restent affichés par défaut, complétés par 11 nouveaux témoignages réels (Nina, Jessica, Ornella, Stella, Daniella, Ida, Allan, Mme Solange, Mme Geneviève, Camillia, Jason), révélés via un bouton "Voir plus de témoignages" plutôt qu'une seconde modale — choix motivé par la cohérence avec la grille existante (une modale aurait comprimé la grille multi-colonnes dans une seule colonne étroite).
- Nouvelle fonction `initShowMoreTestimonials()` dans `assets/js/modules/testimonials.js` : révèle les cartes masquées (attribut natif `hidden`), masque le bouton et déplace le focus vers le premier nouveau témoignage pour une navigation clavier/lecteur d'écran cohérente.
- Aucun nouveau composant CSS structurel : réutilise entièrement `.testimonial-card`, `.btn--outline`, et le mécanisme `[data-reveal]`/`reveal.js` déjà actif pour le fondu d'apparition (respect natif de `prefers-reduced-motion`, aucune animation dupliquée). Seule règle ajoutée à `assets/css/pages/home.css` : `.testimonial-more` (espacement/centrage du bouton).
- **Logo officiel EMSTYLAR déposé** : `assets/img/logo/logo-primary.png` (665×665, fond transparent), ajouté au dépôt. Le fichier avait été initialement nommé par erreur `logo-primary.svg` (signature binaire PNG vérifiée avant renommage, aucune modification des pixels). Non encore intégré au header/footer/favicon, à la demande explicite de l'utilisateur — étape volontairement différée à un prochain Milestone.

### Modifié

- `config/site.js` : version passée à `v0.9.0`.

## [0.8.0] — 2026-07-07

### Ajouté

- **Section "Nos réalisations en chiffres"** (page d'accueil, entre le Hero et "Nos engagements") : 4 cartes de statistiques (+400 créations, +200 clientes, 10+ années d'expérience, 100% sur mesure — valeurs provisoires), avec animation de comptage progressif (0 → valeur finale) déclenchée une seule fois à l'entrée dans le viewport.
- Nouveau module `assets/js/modules/counters.js` : compteur animé en JavaScript natif (`requestAnimationFrame`, ease-out cubique, ~1,4s), sur le même principe que `reveal.js` — le HTML affiche toujours la valeur finale par défaut, et respecte `prefers-reduced-motion` (aucune animation si activé).
- Aucun nouveau composant CSS structurel : la section réutilise entièrement `.card`, `.grid grid--2 grid--4` et `.section__header` déjà existants (seuls `.stat-card`, `.stat-card__value` et `.stat-card__label` ont été ajoutés à `assets/css/pages/home.css`).

## [0.7.0] — 2026-07-07

### Ajouté

- **Nouvelle image Hero** (page d'accueil) : `assets/optimized/img/hero-home.jpg`/`.webp`, générée à partir d'un nouveau visuel fourni (source non modifiée), remplaçant l'ancienne photo — layout, parallaxe, animation Ken Burns et overlay inchangés.
- **Image de partage Open Graph/Twitter** : `assets/optimized/img/og/og-image.jpg` (placeholder de marque 1200×630, prêt à être remplacé sans toucher au code), balises `og:image*`/`twitter:image*` complètes et champ `image` ajouté au JSON-LD `LocalBusiness` sur les 6 pages, pilotés par `config/seo.js`.
- **Section "Avis de nos clientes"** (page d'accueil, avant le CTA final) : grille de 6 témoignages, carte "Partager votre expérience" ouvrant une modale de formulaire (Nom, Ville, Email, note 1-5 étoiles, témoignage) reliée à Formspree (URL placeholder), avec mention explicite de relecture avant publication.
- Nouveaux composants réutilisables dans `assets/css/components.css` : `.modal` (fenêtre superposée générique) et `.star-rating` (notation par étoiles en CSS pur, accessible au clavier, sans JavaScript).
- Nouveau module `assets/js/modules/testimonials.js` (ouverture/fermeture de la modale, piège à focus, validation HTML5).

### Modifié

- Les 6 témoignages placeholder de la section "Avis de nos clientes" ont été remplacés par de **vrais avis clients** (Junior M., Davila T., Georvanie N., Alex B., Hermann K., Kennedy F.) ; le champ "ville" a été retiré de chaque carte (information non disponible, aucune donnée inventée).
- `config/site.js` : version passée à `v0.7.0`.

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
