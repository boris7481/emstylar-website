# EMSTYLAR — Charte de développement

## Architecture

- **HTML5** sémantique.
- **CSS3** en cascade organisée (`variables → reset → base → layout → components → pages/*`).
- **JavaScript ES6** natif, organisé en modules (`type="module"`), un fichier par responsabilité.
- Aucun bundler, aucune étape de build : le site s'exécute tel quel dans le navigateur.

## Interdictions

- Bootstrap
- Tailwind CSS
- jQuery
- Tout framework CSS (Foundation, Bulma, etc.)
- Tout framework JavaScript (React, Vue, Angular, Svelte, etc.)

## Bonnes pratiques

- **Mobile First** : concevoir d'abord pour mobile, puis étendre vers desktop.
- **Responsive obligatoire** sur toutes les pages et tous les composants.
- **Accessibilité WCAG AA** : contrastes, navigation clavier, `aria-*`, `skip-link`, alternatives textuelles.
- **SEO Friendly** : structure sémantique, balises meta, hiérarchie de titres cohérente.
- **Lighthouse > 90** sur Performance, Accessibilité, Bonnes pratiques et SEO.
- **Code réutilisable** : privilégier les composants partagés (header, footer, boutons, cartes) plutôt que la duplication.
- **Composants partagés** entre les pages, centralisés dans `components.css` et les modules JS communs.
- **Pas de duplication** de code ou de contenu.
- **Commentaires utiles uniquement** : commenter le pourquoi, jamais l'évident.
- **Images originales jamais modifiées** : les fichiers de `fotos/`, `logo/` et `videos/` restent intacts ; toute optimisation produit une copie dans `assets/`.
- **Toujours tester avant commit** : vérifier visuellement et fonctionnellement chaque changement.
- **Toujours attendre validation** de l'utilisateur avant de passer au Milestone suivant.

## Convention Git — préfixes de commit

- `feat:` — nouvelle fonctionnalité
- `fix:` — correction de bug
- `style:` — changement visuel ou de mise en forme (sans impact fonctionnel)
- `refactor:` — réorganisation du code sans changement de comportement
- `docs:` — documentation
- `test:` — ajout ou modification de tests
- `chore:` — tâches diverses (config, dépendances, maintenance)

## Convention des branches

- `main` — branche stable, toujours déployable.
- `feature/...` — une branche par fonctionnalité ou Milestone (ex. `feature/videos`, `feature/contact-form`).

## Convention des commits

- Format : `type(scope): description courte au présent`
- Exemple : `feat(gallery): build premium gallery with category filters and accessible lightbox`
- La description reste concise, en anglais ou en français de manière cohérente avec l'historique existant, et décrit le *quoi* — le *pourquoi* va dans la description étendue du commit si nécessaire.
