# Contribuer à Vue Dot

🎉 Tout d'abord, merci d'avoir pris le temps de contribuer !

# Comment contribuer ?

## Rapporter des bugs

Les bugs sont signalés en utilisant les [issues GitHub](https://guides.github.com/features/issues/).

Avant de créer une nouvelle *issue*, [vérifiez si votre bug n’a pas déjà été signalé](https://github.com/assurance-maladie-digital/vue-dot/issues?utf8=%E2%9C%93&q=is%3Aissue).  Si c'est le cas et que vous ne trouvez pas de solution dans les commentaires, contribuez à l'*issue* au lieu d'en créer une nouvelle.

### Soumettre un (bon) rapport de bug

Expliquez le problème et incluez des détails supplémentaires pour aider les responsables à le reproduire :

* **Utilisez un titre clair et descriptif**
* **Décrivez les étapes exactes qui reproduisent le problème**
* **Fournissez des exemples spécifiques pour illustrer les étapes.**Incluez des liens vers des fichiers ou des projets, ou copiez / copiez des extraits que vous utilisez dans ces exemples. Si vous fournissez des extraits dans le problème, utilisez les [blocs de code Markdown](https://help.github.com/articles/markdown-basics/#multiple-lines).

## Proposer des modifications

Les suggestions d'amélioration sont suivies en tant qu'[issues GitHub](https://guides.github.com/features/issues/).

Avant de créer des suggestions d’amélioration, consultez la [Roadmap](https://assurance-maladie-digital.github.io/vue-dot/guide/roadmap.html) pour voir si ce que vous voulez est déjà planifié. Si vous ne voyez pas votre suggestion, [créez une nouvelle issue](#submitting-a-good-bug-report).

## Contribution de code

Vous pouvez rechercher des problèmes étiquetés avec `help-wanted` si vous ne savez pas par où commencer !

### Développement local

Pour démarrer le serveur de développement, utilisez la commande suivante :

```bash
yarn serve
```

Il vous montrera le *Playground*, qui est le fichier `App.vue`.

Pour lzncer les tests :

* unitaires

```bash
yarn test:unit
```

* e2e

```bash
yarn test:e2e
```

### Documentation

Pour démarrer le serveur de développement pour la documentation :

```bash
yarn docs:dev
```

Voir [VuePress](https://vuepress.vuejs.org/guide/) pour obtenir de l'aide.

### 🚨Les autres commandes ne doivent être exécutées que sur la branche master

## Styleguide

### Messages de commit Git

* Utiliser la langue anglaise
* Utilisez le présent ("Add feature" et non pas "Added feature")
* Utilisez le ton impératif ("Move cursor to…" et non "Moves cursor to…")
* Commencez le message de validation avec un emoji applicable de [Gitmoji](https://gitmoji.carloscuesta.me/)

### Vue

La configuration est basée sur la [configuration recommandée (priorité C)](https://vuejs.org/v2/style-guide/#Priority-C-Recommended), avec les modifications suivantes :

* **no-console**: autorisé en `développemment`
* **no-debugger**: autorisé en `développemment`
* **vue/html-indent**: `tab`
* **indent**: `off`
* **vue/no-spaces-around-equal-signs-in-attribute**: `true`
* **semi**: `always`
* **space-before-function-paren**: `never`
* **vue/script-indent**: `tab`
	* **baseIndent**: `1`
	* **switchCase**: `1`

### TypeScript

La configuration est basée sur la [configuration recommandée](https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts), avec les modifications suivantes :

* **quotemark**: `single`
* **indent**: `tabs`
* **interface-name**: `false`
* **ordered-imports**: `false`
* **object-literal-sort-keys**: `false`
* **no-consecutive-blank-lines**: `false`
* **semicolon**: `always`
* **space-before-function-paren**: `never`
* **trailing-comma**: `never`
* **no-shadowed-variable**: `false`
