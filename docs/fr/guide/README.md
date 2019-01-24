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
