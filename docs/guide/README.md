# Introduction

This library is meant to help developers in their work with Vue, and will evolve with the contributions of the community, so don't be afraid to make some pull requests!

## Installation

### Install

``` bash
yarn add @cnamts/vue-dot # OR npm install @cnamts/vue-dot
```

### Load

``` ts{3}
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

## Core team

<ul>
	<li>
		<img :src="$withBase('/dylan-broussard.jpg')" alt="">
		<h3>Dylan Broussard</h3>
		<p>Creator and main developer</p>
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
