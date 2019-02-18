# Commencer

VueDot est la bibliothèque de composants officielle de la CNAM, construite avec Vue.js. Son but est d'**aider les développeurs** de l'Assurance Maladie à **construire des interfaces utilisateur plus rapidement**, avec les **avantages du travail réalisé par la communauté**.

## Vuetify

VueDot est construit sur [Vuetify](https://vuetifyjs.com/en/), vous _devez_ donc l'installer en _premier_.

Si vous utilisez la [stack Vue.js](https://www.jiracnamts.co/confluence/display/CDD/Stack+Vue.js), tout est déjà configuré pour vous, vous pouvez donc ignorer cette partie !
Sinon, consultez le [guide d'installation](https://vuetifyjs.com/en/getting-started/quick-start) de la documentation Vuetify.

## Installation

Après avoir installé Vuetify, vous devez ajouter la bibliothèque elle-même.

### Vue CLI

Lorsque vous utilisez Vue CLI, vous pouvez installer la bibliothèque à partir de [npm](https://www.npmjs.com/package/@cnamts/vue-dot).

<Code>
```bash
$ yarn add @cnamts/vue-dot
// OU
$ npm install @cnamts/vue-dot --save
```
</Code>
<br>

#### Chargement

Ensuite, vous devez charger la bibliothèque dans votre fichier d'application principal.

<Code>
```ts
// main.ts
import Vue from 'vue';
import '@/plugins/vuetify';

import '@cnamts/vue-dot/dist/vue-dot.css';
import VueDot from '@cnamts/vue-dot';

Vue.use(VueDot);

new Vue({
	render: (h) => h(App)
}).$mount('#app');
```
</Code>

### CDN

<CDN />

### Rendu côté serveur

Vous pouvez utiliser VueDot avec [Vue.js SSR](https://ssr.vuejs.org/) ou [VuePress](https://vuepress.vuejs.org/guide/).

Vous trouverez ci-dessous un exemple avec VuePress.

<Code>
```ts
// .vuepress/enhanceApp.js

// Polyfill pour IE11
import 'babel-polyfill';
import Vuetify from 'vuetify';

// Import de VueDot et du thème
import VueDot from '@cnamts/vue-dot';
import { default as theme } from './theme.json';

// Styles du thème
import './theme.css';

export default ({
	Vue, // la version de Vue utilisée dans l'application VuePress
	options, // les options pour l'instance racine de Vue
	router, // l'instance du routeur pour l'application
	siteData // métadonnées du site
}) => {
	Vue.use(Vuetify, {
		// Réduction de la taille de la page initiale
		// (see https://vuetifyjs.com/en/framework/theme#options)
		options: {
			minifyTheme: (css) => {
				return process.env.NODE_ENV === 'production'
				? css.replace(/[\s|\r\n|\r|\n]/g, '')
				: css
			}
		}
	});

	Vue.use(VueDot, {
		theme
	});
};
```
</Code>

::: tip
Vous devez extraire les styles de `theme.json` pour qu'ils soient rendus côté serveur.
:::

### Transpilation

Vous devez transpiler Vuetify et VueDot ou vous aurez des erreurs lors du rendu côté serveur.

#### Vue CLI 3

Si vous utilisez Vue CLI 3, il vous suffit de définir `transpileDependencies` dans `vue.config.js`.

<Code>
```js
// vue.config.js
module.exports = {
	transpileDependencies:[/node_modules[/\\\\](vuetify|vue-dot)[/\\\\]/]
};
```
</Code>

#### VuePress

Si vous utilisez VuePress, vous devez mettre à jour la configuration de Webpack dans `config.js` et utiliser un plugin.

<Code>
```js
// .vuepress/config.js
const nodeExternals = require('webpack-node-externals');

module.exports = {
	configureWebpack: (config, isServer) => {
		const myConfig = {
			externals: {}
		};

		if (isServer) {
			myConfig.externals = nodeExternals({
				whitelist: [/vuetify/, /vue\-dot/]
			});
		}

		return myConfig;
	}
};
```
</Code>

::: warning ATTENTION
Vous devez exécuter `yarn add webpack-node-externals` pour ajouter le plugin Webpack.
:::
