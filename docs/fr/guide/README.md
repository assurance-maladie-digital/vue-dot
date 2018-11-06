# Introduction

Cette bibliothèque est destinée à aider les développeurs dans leur travail avec Vue et évoluera avec les contributions de la communauté, alors n'ayez pas peur de faire des pull requests !

## Installation

### Installer

```bash
yarn add @cnamts/vue-dot # OU npm install @cnamts/vue-dot
```

### Charger

```ts{3}
// main.ts
import Vue from 'vue';
import '@cnamts/vue-dot';

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
<script src="https://cdn.jsdelivr.net/npm/vuetify@1.2.6/vuetify.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@cnamts/vue-dot@1.4.0/dist/vue-dot.umd.min.js"></script>
```

Cela va charger automatiquement tous les composants de Vuetify et VueDot.

## Équipe principale

<ul>
	<li>
		<img :src="$withBase('/dylan-broussard.jpg')" alt="">
		<h3>Dylan Broussard</h3>
		<p>Créateur et développeur principal</p>
	</li>
</ul>

<style lang="scss" scoped>
	li {
		list-style: none;
	}

	ul {
		padding: 0;
		margin-top: 30px;
	}

	li {
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
