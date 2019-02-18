# Getting started

VueDot is the Official CNAM component library, built with Vue.js. It's goal is to **help developers** of the French Social Security to **build User Interfaces more quickly**, with the **benefits of the work made by the community**.

## Vuetify

VueDot is built on top of [Vuetify](https://vuetifyjs.com/en/), so you _need_ to install it _first_.

If you're using the [Vue.js stack](https://www.jiracnamts.co/confluence/display/CDD/Stack+Vue.js), everything is already setup for you, so you can skip this part!
Else, check the [installation guide](https://vuetifyjs.com/en/getting-started/quick-start) fom the Vuetify documentation.

## Installation

After installing Vuetify, you need to add the library itself.

### Vue CLI

When using Vue CLI, you can install the library from [npm](https://www.npmjs.com/package/@cnamts/vue-dot).

<Code>
```bash
$ yarn add @cnamts/vue-dot
// OR
$ npm install @cnamts/vue-dot --save
```
</Code>

#### Load

Then you need to load the library in your main application file.

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

### Server-Side Rendering

You can use VueDot with [Vue.js SSR](https://ssr.vuejs.org/) or [VuePress](https://vuepress.vuejs.org/guide/).

Below is an example with VuePress.

<Code>
```ts
// .vuepress/enhanceApp.js

// Polyfill for IE11
import 'babel-polyfill';
import Vuetify from 'vuetify';

// Import VueDot and the theme
import VueDot from '@cnamts/vue-dot';
import { default as theme } from './theme.json';

// Theme styles
import './theme.css';

export default ({
	Vue, // the version of Vue being used in the VuePress app
	options, // the options for the root Vue instance
	router, // the router instance for the app
	siteData // site metadata
}) => {
	Vue.use(Vuetify, {
		// Reduce the initial page size
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
You need to extract the styles from the `theme.json` in order to make them render on server-side.
:::

### Transpilation

You need to transpile Vuetify and VueDot or you'll have errors when rendering on server-side.

#### Vue CLI 3

If you're using Vue CLI 3, you just need to set `transpileDependencies` in `vue.config.js`.

<Code>
```js
// vue.config.js
module.exports = {
	transpileDependencies:[/node_modules[/\\\\](vuetify|vue-dot)[/\\\\]/]
};
```
</Code>

#### VuePress

If you're using VuePress, you need to update the Webpack configuration in `config.js` and use a plugin.

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

::: warning
You need to run `yarn add webpack-node-externals` to add the Webpack plugin.
:::
