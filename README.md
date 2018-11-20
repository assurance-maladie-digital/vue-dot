Translations: [Français](./gh-docs/fr/README.md)

<p align="center">
	<a
		href="https://assurance-maladie-digital.github.io/vue-dot/"
		target="_blank"
		rel="noopener noreferrer"
	>
		<img
			width="280"
			src="https://firebasestorage.googleapis.com/v0/b/vue-dot.appspot.com/o/vue.js.svg?alt=media&token=8de281bf-97bf-4c1e-a07c-aa859450a7a3"
			alt="VueDot"
		>
	</a>
</p>

<h1 align="center">CNAM – Vue dot</h1>

<p align="center">Official CNAM component library.</p>

<p align="center">
	<a href="https://www.npmjs.com/package/@cnamts/vue-dot">
		<img
			src="https://img.shields.io/npm/v/@cnamts/vue-dot.svg?style=flat-square"
			alt="NPM Version"
		>
	</a>
	<a href="https://www.npmjs.com/package/@cnamts/vue-dot">
		<img
			src="https://img.shields.io/npm/dw/@cnamts/vue-dot.svg?style=flat-square"
			alt="NPM Downloads"
		>
	</a>
	<a
		href="https://github.com/assurance-maladie-digital/vue-dot/blob/master/LICENSE">
		<img
			src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"
			alt="License"
		>
	</a>
	<a
		class="badge-align"
		href="https://www.codacy.com/app/Deraw-/vue-dot?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=assurance-maladie-digital/vue-dot&amp;utm_campaign=Badge_Grade"
	>
		<img
			src="https://api.codacy.com/project/badge/Grade/3d671fb222b04201997aae91c49d510d"
			alt="Codacy Badge"
		>
	</a>
</p>

## As Easy as 1, 2, 3

### Install

```bash
yarn add @cnamts/vue-dot # OR npm install @cnamts/vue-dot
```

### Load

```ts
// main.ts
import Vue from 'vue';
import VueDot from '@cnamts/vue-dot';

Vue.use(VueDot);

new Vue({
    render: (h) => h(App)
}).$mount('#app');
```

### You're done! 🎉

```bash
# run your project
yarn serve # OR your own command
```

It automatically load all components and directives of the library and made them available globally.

## [Documentation](https://assurance-maladie-digital.github.io/vue-dot/)

## License

VueDot is licensed under a [MIT  License](./LICENSE).
