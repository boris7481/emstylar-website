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
├── 404.html                 Page d'erreur personnalisée (noindex)
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
│   ├── video/                vidéos sources utilisées historiquement (non optimisées)
│   └── optimized/            Copies optimisées utilisées par le site
│       ├── img/                WebP + JPEG optimisé, tailles -lg/-sm, par photo + logo
│       └── video/               Vidéos réencodées (H.264/CRF, faststart)
├── fotos/                    photos sources (jamais modifiées)
├── logo/                     logo source (jamais modifié)
├── videos/                   vidéos sources (jamais modifiées)
├── scripts/                  start-server.bat / start-server.ps1 (lancement du serveur local)
├── sitemap.xml, robots.txt, .nojekyll   Préparation SEO et hébergement (GitHub Pages)
├── netlify.toml, vercel.json   Cache navigateur (Netlify / Vercel)
├── README.md
├── DEVELOPMENT.md            Guide de développement (lancement, tests, procédures Git)
└── .gitignore
```

- **Version actuelle :** v0.11.0
- **Date de création du projet :** 2026-07-02
- **Dernière mise à jour de ce document :** 2026-07-07
- **Dernier commit :** *(à renseigner après ce commit — placeholder mis à jour à chaque fin de Milestone/amélioration)*
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
| WhatsApp + Google Maps + Formulaire (intégrations réelles) | ⬜ Restant *(WhatsApp et Google Maps terminés ; il ne reste que l'endpoint Formspree réel)* |
| SEO Professionnel & Préparation au Déploiement | ✅ Terminé |
| Performance & Optimisation | ✅ Terminé |
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
- Optimisation des médias : `assets/optimized/img/` (WebP + JPEG optimisé, tailles `-lg`/`-sm`, pour les 20 photos et le logo) et `assets/optimized/video/` (5 vidéos réencodées H.264/CRF avec `faststart`), utilisés par les 6 pages via `<picture>`/`<source type="image/webp">` — les originaux (`fotos/`, `logo/`, `videos/`, `assets/video/`) restent strictement intacts.
- Lightbox de la galerie : affiche désormais l'image en pleine résolution (`-lg`) via `data-full` sur chaque vignette, pour éviter tout flou malgré l'usage de miniatures compressées (`-sm`) dans la grille.
- Préparation cache/CDN : `netlify.toml` et `vercel.json` (cache long pour les médias/CSS/JS, revalidation systématique des pages HTML) — sans backend, ignorés sans risque par GitHub Pages.
- Identité visuelle homepage : nouvelle image Hero (`assets/optimized/img/hero-home.jpg`/`.webp`, générée à partir d'un visuel fourni, non modifié) remplaçant l'ancienne photo de détail — même layout, parallaxe, animation Ken Burns et overlay conservés.
- Image de partage Open Graph / Twitter Card : `assets/optimized/img/og/og-image.jpg` (placeholder de marque 1200×630, à remplacer par le visuel définitif sans toucher au code — voir `config/seo.js`), balises `og:image*`/`twitter:image*` complètes et champ `image` ajouté au JSON-LD `LocalBusiness` sur les 6 pages.
- Section "Avis de nos clientes" (page d'accueil, juste avant le CTA final) : grille de 6 témoignages **réels** (nom + note 5 étoiles + citation, sans ville), carte "Partager votre expérience" ouvrant une modale de formulaire (Nom, Ville, Email, note 1-5 étoiles en CSS pur, témoignage) reliée à Formspree (URL placeholder), avec mention explicite que les avis sont relus avant publication. Nouveaux composants réutilisables : `.modal` (fenêtre superposée générique) et `.star-rating` (notation accessible, sans JavaScript).
- Section "Nos réalisations en chiffres" (page d'accueil, entre le Hero et "Nos engagements") : 4 cartes de statistiques (+400 créations, +200 clientes, 10+ années, 100% sur mesure — valeurs provisoires) avec animation de comptage progressif (0 → valeur finale) au passage dans le viewport, déclenchée une seule fois, désactivée si `prefers-reduced-motion` est actif. Nouveau module `assets/js/modules/counters.js`, aucun nouveau composant CSS structurel (réutilise `.card`, `.grid grid--2 grid--4`, `.section__header`).
- Extension de la section "Avis de nos clientes" : les 6 témoignages restent affichés par défaut, complétés par 11 nouveaux témoignages réels (Nina, Jessica, Ornella, Stella, Daniella, Ida, Allan, Mme Solange, Mme Geneviève, Camillia, Jason) révélés via un bouton "Voir plus de témoignages". Aucun nouveau composant CSS structurel : réutilise entièrement `.testimonial-card`, `.btn--outline` et le mécanisme `[data-reveal]`/`reveal.js` déjà actif (fondu, respect de `prefers-reduced-motion`, sans animation dupliquée). Focus déplacé automatiquement vers le premier nouveau témoignage après révélation.
- `assets/img/logo/logo-primary.png` : nouveau logo officiel EMSTYLAR (fond transparent, 665×665 px) déposé dans le dépôt. Le fichier avait été initialement nommé par erreur `logo-primary.svg` alors qu'il s'agit en réalité d'un PNG (signature binaire vérifiée) ; renommé sans aucune modification des pixels. **Non encore intégré** au header/footer/favicon — en attente d'une prochaine étape.
- **Carte Google Maps interactive réelle** (page Contact, section "Localisation") : remplace l'ancienne carte illustrée placeholder. Intégration sans clé API (iframe `output=embed`, comme sur le projet Watt Security), construite depuis `config/maps.js`/`config/company.js` (préfère `maps.coordinates` dès que renseignées, sinon utilise `maps.address` déjà affiché ailleurs sur la page — aucune adresse dupliquée). Nouveau module `assets/js/modules/contact-map.js`. Responsive par ratio d'aspect croissant (4/3 mobile → 16/9 tablette → 21/9 desktop), style aligné sur `.why-us__media` (`--radius-md`/`--shadow-md`). Bouton "Ouvrir dans Google Maps" conservé à l'identique (toujours en attente du lien réel).
- **Loader de premier chargement** (sur les 7 pages) : overlay plein écran noir profond avec un anneau doré qui se dessine (esprit fil de couture) autour du monogramme "EM" en fondu, pur CSS/SVG (aucune image, aucune bibliothèque). Affiché uniquement au tout premier chargement du site pendant la session du visiteur (`sessionStorage`, posé par un script inline dans `<head>` *avant* le premier rendu pour garantir zéro flash lors des navigations internes suivantes) ; nouveau module `assets/js/modules/loader.js`, appelé depuis `assets/js/main.js`. Respecte nativement `prefers-reduced-motion` via la règle globale déjà présente dans `reset.css` (aucun code dédié nécessaire).
- **Page 404 personnalisée** (`404.html`) : reprend intégralement le header, le footer et le Design System du site. Grand chiffre "404", sous-titre, texte d'aide et deux boutons ("Retour à l'accueil", "Découvrir nos créations"), accompagnés d'une illustration aiguille et fil en SVG pur (aucune image). `robots: noindex, follow` (page exclue de l'indexation, comme il se doit pour une page d'erreur), sans Open Graph ni JSON-LD. Servie automatiquement par GitHub Pages / Netlify / Vercel sans configuration supplémentaire (convention `404.html` à la racine).

## Fonctionnalités restantes

- Lien "Ouvrir dans Google Maps" réel (actuellement `#`, en attente de coordonnées/lien confirmés dans `config/maps.js`).
- Connexion réelle du formulaire de contact et du formulaire de témoignage à Formspree (actuellement URL placeholder `config/form.js` → `https://formspree.io/f/xxxxxxxx`).
- Remplacement du domaine placeholder `https://www.emstylar.com` (canonical, Open Graph, sitemap.xml, robots.txt, JSON-LD) une fois le nom de domaine réel confirmé.
- Remplacement de l'image Open Graph placeholder par le visuel de marque définitif.
- Intégration du logo définitif (`assets/img/logo/logo-primary.png`, fond transparent, déposé dans le projet et versionné) dans le header, le footer et le favicon — actuellement toujours sur l'ancien logo.
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
- La localisation utilise désormais une vraie carte Google Maps interactive (iframe `output=embed`, sans clé API — même approche que le projet Watt Security), construite depuis `config/maps.js`. Le bouton "Ouvrir dans Google Maps" reste en lien placeholder (`#`) en attendant un lien réel confirmé.
- Les horaires d'ouverture affichés sont des placeholders explicitement marqués comme tels (badge "Placeholder" + légende du tableau) ; leur unique source est désormais `config/contact.js` (l'incohérence entre les horaires de about.html et de contact.html, qui différaient avant ce Milestone, a été corrigée à cette occasion).
- Toutes les données de l'entreprise (téléphone, WhatsApp, email, adresse, nom, slogan, horaires, année de copyright) sont centralisées dans `config/` et synchronisées au DOM par `assets/js/modules/config-bindings.js` via des attributs `data-config-text` / `data-config-attr` / `data-whatsapp-message`. Le HTML garde toujours un texte correct par défaut (fallback statique, lisible sans JavaScript et par les robots d'indexation) ; le module se contente de le resynchroniser avec `config/` au chargement.
- `config/seo.js` est volontairement **non** injecté dans le `<head>` par JavaScript : les balises meta/Open Graph doivent rester statiques dans le HTML pour être lisibles par les robots d'indexation et les aperçus de liens (Facebook, WhatsApp...), qui n'exécutent pas toujours le JavaScript. Les valeurs des balises `<head>` de chaque page sont donc écrites en dur, mais restent cohérentes avec `config/seo.js`, `config/company.js` et `config/contact.js` : en cas de changement, mettre à jour ces deux endroits.
- Le domaine `https://www.emstylar.com` (canonical, Open Graph, sitemap.xml, robots.txt, JSON-LD, `config/seo.js`) est un **placeholder** : à remplacer partout par le nom de domaine réel une fois confirmé.
- `.nojekyll` est un fichier vide à la racine : il désactive le traitement Jekyll par défaut de GitHub Pages pour garantir un service fichier-à-fichier fidèle au dépôt.
- Les médias optimisés (`assets/optimized/`) sont générés une seule fois avec des outils de build locaux (Pillow pour les images, un binaire ffmpeg obtenu via `imageio-ffmpeg`) : ces outils ne sont pas des dépendances du site (aucun `package.json`, aucun runtime nécessaire pour servir le site), uniquement des utilitaires ponctuels utilisés pour produire les fichiers statiques versionnés dans le dépôt.
- Chaque photo optimisée existe en 2 tailles (`-lg` pleine résolution pour les héros/contenus, `-sm` ~640px pour les vignettes de galerie et les posters vidéo) et 2 formats (`.webp` prioritaire via `<picture><source>`, `.jpg` en repli). Le logo est réduit à 120×120 (affiché à 44-48px, donc suffisant même en écran retina).
- Les vidéos sont réencodées en H.264 avec un CRF ajusté par vidéo (26 par défaut, 28 pour la vidéo la plus complexe) et `-movflags +faststart`, sans changement de résolution ni de framerate : qualité visuelle vérifiée à l'identique, poids réduit de ~39 % en moyenne.
- Les témoignages affichés sont exclusivement des avis réels transmis par l'utilisateur : aucun faux témoignage n'a été inventé à aucun moment (les placeholders initiaux disaient explicitement "votre témoignage apparaîtra ici").
- Le champ "ville" a été retiré des cartes de témoignages (information non fournie pour les vrais avis, décision explicite de l'utilisateur pour ne rien inventer) ; la règle CSS correspondante (`.testimonial-card__city`) est laissée en place mais n'est plus utilisée par aucun élément.
- Les chiffres de la section "Nos réalisations en chiffres" sont explicitement provisoires (annoncé par l'utilisateur) ; le HTML affiche toujours la valeur finale par défaut (fallback statique sans JavaScript), le compteur ne fait que l'animer visuellement au chargement.
- Le loader de premier chargement utilise `sessionStorage` (et non `localStorage`) : il réapparaît à chaque nouvelle session de navigation (nouvel onglet/fenêtre), mais jamais lors des navigations internes au sein d'une même visite — comportement volontaire cohérent avec "premier chargement du site", pas "une seule fois pour toujours".
- La classe `no-loader` est posée sur `<html>` par un script inline placé *avant* tout CSS dans `<head>` (et non par le module `loader.js`, chargé en `type="module"` donc différé) : c'est la seule façon de garantir zéro flash du loader lors des navigations internes, puisque chaque page de ce site multi-pages statique est un rechargement complet du document.
- La page `404.html` est volontairement en `robots: noindex, follow` et sans Open Graph/JSON-LD : une page d'erreur ne doit jamais être indexée ni partagée comme du contenu, mais ses liens (header/footer) doivent rester suivables par les robots.

## Notes pour les prochains développements

- Le README.md existant contient une roadmap (Milestone 0 à 5) antérieure et distincte de la nomenclature utilisée dans ce document ; ce fichier `PROJECT_PROGRESS.md` fait désormais référence pour le suivi d'avancement.
- Mettre à jour ce document à la fin de chaque Milestone (statut, dernier commit, notes).
- Pour changer le téléphone, le WhatsApp, l'email, l'adresse, le slogan ou les horaires du site : modifier uniquement les fichiers dans `config/`, jamais le HTML directement.
- Voir [DEVELOPMENT.md](DEVELOPMENT.md) pour le guide complet de lancement, de test et de contribution.
- Pour régénérer les médias optimisés après une mise à jour d'une photo/vidéo source : relancer un traitement Pillow/ffmpeg équivalent à celui utilisé pour ce Milestone (aucun script réutilisable n'a été committé, volontairement, pour ne pas ajouter d'outillage de build permanent au dépôt).
- Intégration du nouveau logo (`assets/img/logo/logo-primary.png`, fond transparent, déjà versionné) dans le header/footer/favicon : reste à faire au prochain Milestone.
- Les valeurs de "Nos réalisations en chiffres" sont à remplacer par les chiffres réels dès qu'ils seront confirmés (il suffit de modifier les attributs `data-count-to`/`data-count-prefix`/`data-count-suffix` et le texte affiché dans `index.html`, aucun changement de code nécessaire).
- Le Milestone 12 sera le prochain chantier après validation de l'utilisateur (Déploiement, ou intégration réelle Google Maps/Formspree selon la priorité choisie).
