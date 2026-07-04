# EMSTYLAR — L'œil du Design

Site vitrine officiel de **EMSTYLAR**, atelier de mode, couture et stylisme situé à Nkolbisson (Usine des Eaux), Yaoundé, Cameroun.

## À propos du projet

Site statique (HTML5 / CSS3 / JavaScript ES6), sans backend ni étape de build, conçu pour être :

- Rapide et performant (objectif Lighthouse Performance > 90)
- Optimisé pour le référencement (objectif SEO > 95)
- Accessible (objectif Accessibility > 95)
- Conforme aux bonnes pratiques web (objectif Best Practices > 95)
- Responsive et mobile-first

**Palette :** noir profond, blanc cassé, doré, gris clair
**Typographies :** Playfair Display (titres), Poppins (texte courant)

## Structure du projet

```
Emystylar/
├── index.html              Accueil
├── about.html               À propos
├── services.html            Services
├── gallery.html              Galerie photos
├── videos.html               Galerie vidéos
├── contact.html              Contact
│
├── assets/
│   ├── css/
│   │   ├── variables.css   Design tokens (couleurs, typographies, échelles)
│   │   ├── reset.css       Reset CSS minimal
│   │   ├── base.css        Styles de base (typographie, accessibilité)
│   │   ├── layout.css      Structure générale (header/main/footer, conteneur)
│   │   ├── components.css Composants réutilisables (boutons, cartes, nav...)
│   │   └── pages/          Styles spécifiques à chaque page
│   │
│   ├── js/
│   │   ├── main.js         Point d'entrée, initialise les modules communs
│   │   └── modules/         Un module ES6 par fonctionnalité (navbar, galerie,
│   │                        formulaire de contact, bouton retour en haut, etc.)
│   │
│   ├── img/
│   │   ├── gallery/         Photos optimisées pour la galerie (à venir)
│   │   ├── logo/             Déclinaisons du logo (à venir)
│   │   └── icons/            Icônes SVG (à venir)
│   │
│   └── video/                Vidéos utilisées sur le site
│
├── fotos/                     Photos originales (sources, non modifiées)
├── logo/                      Logo original (sources, non modifiées)
├── videos/                    Vidéos originales (sources, non modifiées)
│
├── .gitignore
└── README.md
```

Les dossiers `fotos/`, `logo/` et `videos/` contiennent les fichiers **sources** fournis par l'atelier. Ils ne doivent pas être modifiés directement : les versions optimisées pour le web (redimensionnées, compressées) seront générées dans `assets/img/` et `assets/video/` lors d'un milestone dédié à l'optimisation des médias.

## Architecture technique

- **CSS** chargé par fichiers séparés (pas de préprocesseur ni de bundler) : `variables → reset → base → layout → components → pages/*`, dans cet ordre, pour respecter la cascade.
- **JavaScript** organisé en modules ES6 natifs (`type="module"`), un fichier par responsabilité, importés depuis `main.js`.
- Pas de framework, pas d'étape de build : le site s'exécute tel quel dans le navigateur.
- Bootstrap 5, AOS (animations) et Swiper.js pourront être ajoutés ultérieurement, uniquement si le besoin est confirmé.

## Lancer le projet en local

Aucune installation n'est requise. Deux options :

1. Ouvrir directement `index.html` dans un navigateur.
2. Lancer un petit serveur local pour un rendu plus fidèle (chemins relatifs, cache) :
   ```bash
   npx serve .
   ```

## Feuille de route

- [x] **Milestone 0 — Foundation** : architecture des dossiers, pages HTML vides, fichiers CSS/JS de base, README, .gitignore.
- [ ] **Milestone 1 — Contenu** : rédaction et intégration du contenu réel de chaque page.
- [ ] **Milestone 2 — Design** : mise en page complète, navigation, footer, composants visuels selon la charte EMSTYLAR.
- [ ] **Milestone 3 — Médias** : optimisation des photos, vidéos et déclinaisons du logo.
- [ ] **Milestone 4 — Interactions** : animations (AOS), galerie/lightbox, formulaire de contact (Formspree), bouton WhatsApp, Google Maps.
- [ ] **Milestone 5 — SEO & Performance** : sitemap.xml, robots.txt, données structurées, audit Lighthouse, accessibilité WCAG.

## Contact

- WhatsApp : +237 6 96 02 36 73
- Formulaire de contact : Formspree (endpoint à configurer)
