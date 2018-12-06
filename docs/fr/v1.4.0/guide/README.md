# Introduction

Cette bibliothèque est destinée à aider les développeurs dans leur travail avec Vue et évoluera avec les contributions de la communauté, alors n'ayez pas peur de faire des pull requests !

## Installation

<br>

Vuetify doit être installé pour pouvoir utiliser VueDot, voir le [quick start de Vuetify](https://vuetifyjs.com/fr/getting-started/quick-start) pour obtenir de l'aide.

### Installer

```bash
yarn add @cnamts/vue-dot # OU npm install @cnamts/vue-dot
```

### Charger

```ts{5,6}
// main.ts
import Vue from 'vue';
import './plugins/vuetify';

import VueDot from '@cnamts/vue-dot';
Vue.use(VueDot);

new Vue({
    render: (h) => h(App)
}).$mount('#app');
```

### Et voilà !

```bash
# lancer votre projet
yarn serve # OU votre propre commande
```

### CDN

<br>
Charger Vue, puis Vuetify et enfin VueDot:

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@1.3.11/vuetify.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@cnamts/vue-dot@1.4.0/dist/vue-dot.umd.min.js"></script>
```

Cela va charger automatiquement tous les composants de Vuetify et VueDot.

## Problèmes connus

Il y a un bug avec une erreur *when trying to laod `vue.common.js chunk 6`*. Mettez à jour vers la dernière version !

## Équipe principale

<ul>
	<li>
		<img :src="$withBase('/dylan-broussard.jpg')" alt="">
		<h3>Dylan Broussard</h3>
		<p>Créateur et développeur principal</p>
	</li>
	<li>
		<img :src="$withBase('/user.svg')" alt="">
		<h3>Vous peut-être ?</h3>
		<p>N'hésitez pas et contactez-moi si vous souhaitez intégrer l'équipe principale !</p>
	</li>
</ul>

<style lang="scss" scoped>
	li {
		max-width: 250px;
		list-style: none;
	}

	ul {
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		margin-top: 30px;
		justify-content: space-around;
	}

	li {
		padding: 5px;
		text-align: center;
	}

	p,
	h3 {
		margin: 0;
	}

	img {
		width: 150px;
		height: 150px;
		object-fit: cover;
		border-radius: 50%;
	}
</style>
