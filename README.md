# CNAMTS - Vue dot

Official CNAMTS component library.

Still in active development, please send us feedback !

## Installation

You need to install the dependencies with a package manager, preferably with Yarn.

```bash
 $ yarn add @cnamts/vue-dot

 # or with npm
 $ npm install @cnamts/vue-dot
```

Then, include it in your app entry file :
```ts
// main.ts
import Vue from 'vue';
import '@cnamts/vue-dot';

new Vue({
	render: (h) => h(App)
}).$mount('#app');
```

It automatically load all components of the library and made them available globally.
