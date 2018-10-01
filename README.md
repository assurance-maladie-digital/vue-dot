# CNAM – Vue dot

Official CNAM component library.

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
</p>

## As Easy as 1, 2, 3

### Install

``` bash
yarn add @cnamts/vue-dot # OR npm install @cnamts/vue-dot
```

### Load

``` ts
// main.ts
import Vue from 'vue';
import '@cnamts/vue-dot';

new Vue({
    render: (h) => h(App)
}).$mount('#app');
```

### You're done!

``` bash
# run your project
yarn serve # OR your own command
```

It automatically load all components and directives of the library and made them available globally.

## Documentation

See full documentation on [Github Pages](https://assurance-maladie-digital.github.io/vue-dot/).
