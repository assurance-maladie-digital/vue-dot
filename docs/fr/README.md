---
home: true
heroImage: /vue.js.svg
actionText: Démarrer →
actionLink: /fr/guide/
footer: Sous license MIT | Copyright © 2018-aujourd'hui CNAM
---

<div class="features">
	<div class="feature">
		<h2>Basé sur la communauté</h2>
		<p>Vos contributions sont le cœur de la librarie, n'hésitez pas à contribuer de quelque manière que ce soit dans notre objectif de réduire le temps passé à recréer les mêmes choses.</p>
	</div>
	<div class="feature">
		<h2>Robuste</h2>
		<p>Chaque partie de la librairie est passée à travers une vérification de syntaxe, les tests sont obligatoires dans le but d'aider les autres développeurs et d'assurer la consistence, et nous demandons au moins deux traductions (fr et en).</p>
	</div>
	<div class="feature">
		<h2>Pour vous</h2>
		<p>Nous essayons de fournir des composants hautement configurables et personnalisables, et si l'un d'eux ne correspond pas à vos besoins, demandez-nous ou créez une pull request !</p>
	</div>
</div>

### Simple comme 1, 2, 3

#### Installer

``` bash
yarn add @cnamts/vue-dot # OU npm install @cnamts/vue-dot
```

#### Charger

``` ts{3,5}
// main.ts
import Vue from 'vue';
import VueDot from '@cnamts/vue-dot';

Vue.use(VueDot);

new Vue({
    render: (h) => h(App)
}).$mount('#app');
```

#### Et voilà !

``` bash
# lancer votre projet
yarn serve # OU votre propre commande
```
