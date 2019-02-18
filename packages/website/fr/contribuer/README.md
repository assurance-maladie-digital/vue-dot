# Contribuer

Tout d'abord, merci de prendre le temps de contribuer ! C'est vraiment important pour nous aider à améliorer la bibliothèque.

## Reporter des bogues

Les bogues sont reportés en utilisant les [issues GitHub](https://guides.github.com/features/issues/).

Avant de créer une nouvelle issue, [vérifiez si votre bogue n’a pas déjà été signalé](https://github.com/assurance-maladie-digital/vue-dot/issues?utf8=%E2%9C%93&q=is%3Aissue). Si c'est le cas et que vous ne trouvez pas de solution dans les commentaires, contribuez à l'issue au lieu d'en créer une nouvelle.

### Soumettre un (bon) rapport de bogue

Expliquez le problème et incluez des détails supplémentaires pour aider les responsables à le reproduire :

-   **Utilisez un titre clair et descriptif**
-   **Décrivez les étapes exactes qui reproduisent le problème**
-   **Fournissez des exemples spécifiques pour illustrer les étapes.** Incluez des liens vers des fichiers ou des projets, ou des extraits copiés que vous utilisez dans ces exemples. Si vous fournissez des extraits dans le problème, utilisez des [blocs de code Markdown](https://help.github.com/articles/markdown-basics/#multiple-lines).

<br>

[Voir les issues](https://github.com/assurance-maladie-digital/vue-dot/issues)

## Proposer des modifications

Les suggestions d'amélioration sont suivies en tant [qu'issues GitHub](https://guides.github.com/features/issues/).

Avant de créer des suggestions d’amélioration, consultez la [Feuille de route](../feuille-de-route/) pour voir si ce que vous voulez est déjà planifié. Si vous ne voyez pas votre suggestion, [créez une nouvelle issue](#soumettre-un-bon-rapport-de-bogue).

## Contribution de code

Vous pouvez rechercher des problèmes marqués `help-wanted` si vous ne savez pas par où commencer !

### Développement local

#### Installation de l'environnement

La configuration de votre environnement de développement est facile ! Pour démarrer, forkez [VueDot](https://github.com/assurance-maladie-digital/vue-dot) dans votre propre dépôt.

<Code>
```bash
// Clonez votre repo forké
$ git clone <forked-vue-dot-repo>

// Passez à votre nouveau répertoire vue-dot
$ cd vue-dot

// Checkez la branche sur laquelle vous travaillez
$ git checkout <branch name>

// Installez les dépendancess
$ yarn

// Lancez le serveur de développement
$ yarn serve
```
</Code>

#### Documentation

Pour travailler sur la documentation, démarrez le serveur de développement de Vuepress.

<Code>
```bash
yarn docs:dev
```
</Code>

Voir la [documentation VuePress]((https://vuepress.vuejs.org/guide/)) pour obtenir de l'aide.

::: danger ATTENTION
Les autres commandes doivent être exécutées uniquement sur la branche principale
:::

### Style du code

Vous devez respecter le style de code défini dans `editorconfig` et résoudre tout avertissement ou toute erreur renvoyé par `TSLint` ou `ESLint`.

#### Directives de commit

Regardez les commits précédents pour l'inspiration ! Mais vous avez besoin que ce soit explicite et vous devez suivre ces règles :

-   Écrivez-le en Anglais
-   Commencez avec un emoji de [gitmoji](https://gitmoji.carloscuesta.me/) correspondant aux modifications apportées
-   Ne terminez pas la ligne du sujet par un point
-   Mettez en majuscule la ligne du sujet
-   Utilisez l'impératif

#### Pull requests

Lorsque vous créez une pull request, suivez et complétez le modèle fourni.
