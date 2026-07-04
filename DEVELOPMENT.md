# EMSTYLAR — Guide de développement

## Présentation rapide du projet

EMSTYLAR est le site vitrine de l'atelier de mode, couture et stylisme du même nom, situé à
Nkolbisson (Usine des Eaux), Yaoundé, Cameroun. Le site est un **site multi-pages statique** :
HTML5, CSS3 et JavaScript ES6 natif, sans framework, sans bundler et sans étape de build. Il
s'exécute tel quel dans n'importe quel navigateur moderne, à condition d'être servi via HTTP (voir
[Pourquoi `file:///` ne fonctionne pas](#pourquoi-file-ne-fonctionne-pas-correctement)).

Pour le contexte produit (objectifs, avancement, décisions), voir [PROJECT_PROGRESS.md](PROJECT_PROGRESS.md).
Pour les règles de code et les conventions Git, voir [PROJECT_RULES.md](PROJECT_RULES.md).

## Prérequis

- Un navigateur moderne (Chrome, Firefox, Edge, Safari récents).
- Un des environnements suivants pour servir le site en local :
  - [Visual Studio Code](https://code.visualstudio.com/) avec l'extension **Live Server**, ou
  - **Python 3** (déjà présent sur la plupart des systèmes), ou
  - **Node.js** (uniquement pour la commande `npx serve`).
- **Git**, pour cloner le dépôt et gérer les versions.
- Aucune installation de dépendances n'est nécessaire (pas de `npm install`, pas de `package.json`).

## Structure du projet

```
Emystylar/
├── index.html, about.html, services.html,   Les 6 pages du site
│   gallery.html, videos.html, contact.html
├── config/                    Configuration centralisée (source unique de vérité)
│   ├── site.js                  Version, environnement, copyright
│   ├── company.js                Identité (nom, slogan, ville, quartier, repère, pays)
│   ├── contact.js                 Téléphone, WhatsApp, email, horaires
│   ├── social.js                   Réseaux sociaux (placeholders)
│   ├── maps.js                      Adresse, coordonnées GPS et lien Google Maps (placeholders)
│   ├── seo.js                        Métadonnées SEO de référence
│   └── form.js                        Endpoint Formspree (placeholder) et messages
├── assets/
│   ├── css/                   variables → reset → base → layout → components → pages/*
│   ├── js/                     main.js + modules ES6 (un fichier = une responsabilité)
│   ├── img/                     médias optimisés (à venir)
│   └── video/                    vidéos utilisées sur le site
├── fotos/, logo/, videos/     Médias sources, jamais modifiés directement
├── scripts/                   Scripts de lancement du serveur local
├── sitemap.xml, robots.txt, .nojekyll   Fichiers de préparation SEO / déploiement
├── PROJECT_PROGRESS.md, PROJECT_RULES.md, PROJECT_TODO.md, CHANGELOG.md
└── DEVELOPMENT.md             Ce document
```

## Lancer le site en local

Le site doit toujours être servi via un serveur HTTP (jamais ouvert directement en double-cliquant
sur `index.html`). Trois méthodes équivalentes :

### 1. VS Code + Live Server

1. Ouvrir le dossier du projet dans VS Code.
2. Installer l'extension **Live Server** (si ce n'est pas déjà fait).
3. Clic droit sur `index.html` → **Open with Live Server**.
4. Le site s'ouvre automatiquement, généralement sur `http://127.0.0.1:5500`.

### 2. Python

```bash
python -m http.server 8000
```

Puis ouvrir [http://localhost:8000](http://localhost:8000). Un raccourci est disponible dans
`scripts/start-server.bat` (Windows/cmd) et `scripts/start-server.ps1` (PowerShell) : ces scripts
lancent cette même commande et rappellent l'URL à ouvrir.

### 3. npx serve

```bash
npx serve .
```

Nécessite Node.js (aucune installation permanente : `npx` télécharge `serve` à la volée).

## Pourquoi `file:///` ne fonctionne pas correctement

Le site utilise des **modules JavaScript ES6** (`<script type="module">` et `import`/`export`,
voir plus bas). Or, pour des raisons de sécurité, les navigateurs bloquent le chargement des
modules ES6 via des requêtes `fetch`/`import` internes lorsque la page est ouverte directement
depuis le disque (protocole `file:///`) : la politique **CORS** considère chaque fichier local
comme une origine différente et refuse la requête (`Access to script ... has been blocked by CORS
policy`). Résultat : en ouvrant `index.html` en double-clic, la navigation, les animations, la
galerie, les vidéos et la configuration centralisée (`config/`) ne s'initialisent pas.

En servant le site via HTTP (Live Server, `python -m http.server`, `npx serve`, ou un hébergeur
comme GitHub Pages/Netlify/Vercel), toutes les pages sont servies depuis la **même origine**
(`http://localhost:8000`, `https://mon-domaine.com`...) et les modules se chargent normalement.

## Fonctionnement des modules ES6

- Chaque fichier de `assets/js/modules/` a une seule responsabilité (navbar, back-to-top, bouton
  WhatsApp, scroll, reveal au scroll, formulaire de contact, galerie, vidéos, liaison de la
  configuration...).
- `assets/js/main.js` est le point d'entrée commun à toutes les pages : il importe et initialise
  les modules partagés au chargement du DOM (`DOMContentLoaded`).
- Certaines pages chargent en plus un module spécifique (ex. `gallery.js` sur `gallery.html`,
  `videos.js` sur `videos.html`, `contact-form.js` sur `contact.html`), via une seconde balise
  `<script type="module" src="...">` en fin de `<body>`.
- Aucun bundler : les imports sont des chemins relatifs classiques (`./modules/navbar.js`,
  `../../../config/company.js`...), résolus directement par le navigateur.

## Fonctionnement du dossier `config/`

`config/` centralise toutes les informations de l'entreprise (téléphone, WhatsApp, email, adresse,
nom, slogan, horaires, réseaux sociaux, métadonnées SEO, configuration du formulaire) : **une
information ne doit jamais être recopiée en dur dans plusieurs fichiers HTML**.

- Chaque fichier exporte un objet JS simple (`export const company = {...}`).
- `assets/js/modules/config-bindings.js` importe ces objets et les applique au DOM au chargement,
  via des attributs :
  - `data-config-text="chemin.vers.la.valeur"` → remplace le texte de l'élément ;
  - `data-config-attr="attribut:chemin.vers.la.valeur"` → définit un attribut (ex. `href`, `alt`,
    `action`) ;
  - `data-whatsapp-message="message en clair"` → reconstruit un lien `wa.me` avec le numéro
    centralisé et ce message pré-rempli.
- Le HTML garde toujours un **contenu correct par défaut** (visible sans JavaScript, lisible par
  les robots d'indexation) : le module ne fait que le resynchroniser avec `config/` au chargement.
- **Pour changer un numéro de téléphone, une adresse, un slogan ou des horaires : modifier
  uniquement le fichier concerné dans `config/`, jamais le HTML.**
- Exception assumée : les balises `<meta>`, Open Graph et JSON-LD du `<head>` restent **statiques**
  dans chaque page HTML (elles ne sont pas injectées par JavaScript), car les robots d'indexation
  et les aperçus de liens (Facebook, WhatsApp...) ne lisent pas toujours le contenu généré par JS.
  Leurs valeurs doivent rester cohérentes avec `config/seo.js`, `config/company.js` et
  `config/contact.js` en cas de changement.

## Comment effectuer les tests avant un commit

Avant tout commit, vérifier systématiquement :

1. **Visuel** : ouvrir chaque page modifiée (desktop, tablette, mobile — via les outils de
   développement du navigateur ou en redimensionnant la fenêtre).
2. **Console** : aucune erreur JavaScript dans la console du navigateur.
3. **Réseau** : aucune requête en échec (404) dans l'onglet réseau des outils de développement.
4. **Liens et boutons** : navigation, boutons WhatsApp, formulaire (validation HTML5), liens de
   téléchargement/lecture des médias.
5. **Régression** : vérifier que les pages non concernées par le changement n'ont pas été
   affectées (le design, les animations, la galerie et les vidéos ne doivent jamais être modifiés
   sans demande explicite).
6. **HTML/CSS/JS** : balises bien fermées, pas de faute de syntaxe évidente (un simple survol du
   diff avant de committer suffit généralement à les repérer).

## Procédure de commit

1. Vérifier l'état du dépôt : `git status`.
2. Ajouter uniquement les fichiers concernés par le changement (éviter `git add -A` si des
   fichiers non liés traînent) : `git add <fichiers>`.
3. Rédiger un message de commit conforme à la convention (voir [PROJECT_RULES.md](PROJECT_RULES.md)) :

   ```
   type(scope): description courte au présent
   ```

   Exemples : `feat(contact): ...`, `fix(navbar): ...`, `docs(project): ...`, `refactor(config): ...`.
4. Committer : `git commit -m "type(scope): description"`.

## Procédure de push

1. Vérifier que la branche est à jour : `git status` doit indiquer *"Your branch is up to date
   with 'origin/main'"* avant de pousser (sinon, resynchroniser d'abord).
2. Pousser : `git push origin main`.
3. Vérifier la synchronisation : `git fetch origin` puis comparer `git rev-parse HEAD` et
   `git rev-parse origin/main` (les deux hash doivent être identiques).

## Procédure de création d'un nouveau Milestone

1. Le Milestone précédent doit être **validé explicitement** avant de commencer le suivant.
2. Développer les fonctionnalités demandées, en respectant strictement le périmètre défini (ne pas
   modifier le design, les animations ou les composants sauf demande explicite).
3. Tester entièrement (voir section [tests](#comment-effectuer-les-tests-avant-un-commit)).
4. Mettre à jour [PROJECT_PROGRESS.md](PROJECT_PROGRESS.md), [PROJECT_TODO.md](PROJECT_TODO.md) et
   [CHANGELOG.md](CHANGELOG.md) pour refléter la fin du Milestone (statut, version, notes).
5. Présenter un résumé complet du travail effectué et **attendre la validation** avant de committer.
6. Une fois validé : committer et pousser (voir procédures ci-dessus), puis afficher le hash du
   commit et confirmer la synchronisation avec le dépôt distant.
