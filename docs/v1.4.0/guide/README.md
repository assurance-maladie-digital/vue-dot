# Introduction

This library is meant to help developers in their work with Vue, and will evolve with the contributions of the community, so don't be afraid to make some pull requests!

## Installation

<br>

You need to have Vuetify installed in order to use VueDot, see [Vuetify quick start](https://vuetifyjs.com/en/getting-started/quick-start) for help.

### Install

```bash
yarn add @cnamts/vue-dot # OR npm install @cnamts/vue-dot
```

### Load

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

### You're done!

```bash
# run your project
yarn serve # OR your own command
```

### CDN

<br>
Load Vue, then Vuetify and finally VueDot:

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@1.3.11/vuetify.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@cnamts/vue-dot@1.5.0/dist/vue-dot.umd.min.js"></script>
```

It will load automatically all the components from Vuetify and VueDot.

## Core team

<ul>
	<li>
		<img :src="$withBase('/dylan-broussard.jpg')" alt="">
		<h3>Dylan Broussard</h3>
		<p>Creator and main developer</p>
	</li>
	<li>
		<img :src="$withBase('/user.svg')" alt="">
		<h3>You, maybe?</h3>
		<p>Don't hesitate and contact me if you want to integrate core team!</p>
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
