# Directives

VueDot fournit des directives communes et utiles qui manquent dans Vue.js ou des outils tels que Vuetify.

Vous pouvez [en apprendre plus à propos des directives](https://fr.vuejs.org/v2/guide/custom-directive.html) dans la documentation Vue.js.

## v-debounce

La directive `v-debounce` vous permet de reporter une mise à jour de `v-model` sur un champ `input` avec une durée spécifiée en millisecondes.

### Usage

``` html
<input v-model.lazy="input" v-debounce="1000">
```

Si aucun argument n'es fournit, le délai par défaut est `500ms`.

<!-- ::: tip CONSEIL
Vous pouvez utiliser la fonction `debounce` depuis `@/functions/debounce` dans vos scripts.
::: -->

#### Composants personnalisés

Le problème lors de l'utilisation de composants personnalisés comme `input`, est que l'on ne peut pas utiliser les modificateurs sur` v-model`.
Pour faire face à cela,il faut passer un callback à la directive et définir le délai avec un modificateur.

Exemple avec `v-text-field` de Vuetify (voir la démo pour tout le code):

``` html
<v-text-field
    :value="message"
    label="Type here"
    v-debounce.1000="setValue"
    @change="setValue"
/>
```

### Démo
<br>
<CodePen
	id="Jmowqx"
	:height="370"
	title="v-debounce"
/>

### À faire

Nous devons améliorer cette directive pour pouvoir l'utiliser avec n'importe quel événement, ne craignez pas de nous aider à ce sujet!

### Comment ça fonctionne

Nous utilisons la function `debounce` de `@/functions/debounce`, qui prend comme paramètres un callback et une valeur de temps. Cette fonction retourne une function qui contient un `setTimeout`, et chaque fois que cette fonction retournée est appelée, elle efface le précédent `setTimeout`, ainsin lorsque l'événement se déclenche plusieurs fois, le callback n'est appelé qu'une seule fois.

Pour la directive elle-même, lorsqu'elle est insérée, elle trouve le champ, obtient l'intervalle, puis vérifie s'il a été mis à jour et n'effectue rien si ce n'est pas le cas. Si le test réussit, nous définissons un callback pour l'événement `oninput` sur l'élément avec la fonction `debounce`, et lui envoyons un callback qui envoie l'événement `change`, ou excécutons le callback passé en paramètre.<br>
C'est pourquoi, même avec le modificateur `lazy` sur `v-model`, le champ input est toujours mis à jour sans perte de focus.
