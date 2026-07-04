# EMSTYLAR — Roadmap détaillée

## Milestones terminés

- [x] **Foundation**
  - [x] Architecture des dossiers
  - [x] Pages HTML de base
  - [x] Fichiers CSS de base (variables, reset, base, layout)
  - [x] README et .gitignore
- [x] **Design System**
  - [x] Design tokens (couleurs, typographies, échelles)
  - [x] Composants réutilisables (boutons, cartes, etc.)
- [x] **Layout & Navigation**
  - [x] Header responsive avec menu mobile
  - [x] Footer partagé
  - [x] Bouton WhatsApp dans le header
- [x] **Homepage**
  - [x] Hero
  - [x] Sections de présentation premium
- [x] **About**
  - [x] Contenu complet de la page À propos
- [x] **Services**
  - [x] Formations
  - [x] Cours de vacances
- [x] **Gallery**
  - [x] Filtres par catégorie
  - [x] Lightbox accessible (clavier, `aria-modal`)
- [x] **Videos**
  - [x] Hero avec breadcrumb, titre, sous-titre et image de couverture
  - [x] Grille responsive de cartes vidéo (vidéo, poster, titre, description, catégorie, durée)
  - [x] Lecteur HTML5 natif (contrôles natifs, `controlsList="nodownload"`, `preload="metadata"`)
  - [x] Boutons "Demander cette création" et WhatsApp (message pré-rempli) sous chaque vidéo
  - [x] Accessibilité (navigation clavier, ARIA labels, hiérarchie de titres, contrastes)
  - [x] Responsive desktop / tablette / mobile
  - [x] Vérification console et régression sur les autres pages
- [x] **Contact**
  - [x] Hero (breadcrumb, titre, sous-titre, image de couverture)
  - [x] Cartes de coordonnées à icônes SVG (identité, téléphone, WhatsApp, email, adresse)
  - [x] Formulaire HTML5 (Nom, Prénom, Email, Téléphone, Sujet, Type de demande, Message) avec validation native
  - [x] Section WhatsApp dédiée (message pré-rempli)
  - [x] Carte de localisation illustrée + bouton "Ouvrir dans Google Maps" (placeholder)
  - [x] Section Horaires (placeholders clairement indiqués)
  - [x] FAQ Contact (accordéon réutilisé)
  - [x] CTA final (Prendre rendez-vous / Discuter sur WhatsApp)
  - [x] Accessibilité, responsive et vérification console/régression

## Milestones restants

- [ ] **WhatsApp + Google Maps + Formulaire**
  - [x] Lien WhatsApp finalisé (numéro, message pré-rempli)
  - [ ] Intégration Google Maps réelle (actuellement carte illustrée + lien `#`)
  - [ ] Endpoint du formulaire de contact configuré (Formspree réel — actuellement URL placeholder)
- [ ] **SEO**
  - [ ] Balises meta (title, description) par page
  - [ ] Open Graph / Twitter Cards
  - [ ] Données structurées (schema.org)
  - [ ] sitemap.xml et robots.txt
- [ ] **Performance**
  - [ ] Audit Lighthouse (Performance > 90)
  - [ ] Réduction du poids des pages
  - [ ] Lazy loading des médias
- [ ] **Optimisation des médias**
  - [ ] Compression et redimensionnement des photos (`fotos/` → `assets/img/`)
  - [ ] Compression des vidéos (`videos/` → `assets/video/`)
  - [ ] Déclinaisons du logo (`logo/` → `assets/img/logo/`)
- [ ] **Déploiement**
  - [ ] Choix de l'hébergement
  - [ ] Configuration du nom de domaine
  - [ ] Mise en production
