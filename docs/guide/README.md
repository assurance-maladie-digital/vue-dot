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
<br>

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
