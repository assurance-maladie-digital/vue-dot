<p align="center">
    <a
        href="https://assurance-maladie-digital.github.io/vue-dot/"
        target="_blank"
        rel="noopener noreferrer"
    >
        <img
            width="280"
            src="https://res.cloudinary.com/deraw/image/upload/v1547049133/vue-dot.svg"
            alt="VueDot"
        >
    </a>
</p>

<h1 align="center">CNAM – VueDot</h1>

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
            src="https://img.shields.io/codacy/grade/3d671fb222b04201997aae91c49d510d/master.svg?style=flat-square&label=Code+Quality"
            alt="Codacy Badge"
        >
    </a>
    <a
        class="badge-align"
        href="https://www.browserstack.com/"
    >
        <img
            src="https://img.shields.io/badge/powered%20by-BrowserStack-brightgreen.svg?style=flat-square"
            alt="BrowserStack"
        >
    </a>
</p>

## As Easy as 1, 2, 3

### Install

```bash
$ yarn add @cnamts/vue-dot
// OR
$ npm install @cnamts/vue-dot --save
```

### Load

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

### You're done! 🎉

```bash
# run your project
yarn serve # OR your own command
```

## [Documentation](https://assurance-maladie-digital.github.io/vue-dot/)

## License

VueDot is licensed under [MIT License](./LICENSE).

## Translations

-   [FR](./gh-docs/fr/README.md)
