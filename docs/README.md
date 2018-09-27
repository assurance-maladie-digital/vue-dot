---
home: true
heroImage: /vue.js.svg
actionText: Get Started →
actionLink: /guide/
footer: MIT Licensed | Copyright © 2018-present CNAM
---

<div class="features">
	<div class="feature">
		<h2>Community based</h2>
		<p>Your contributions are the core of the library, feel free to contribute in any way to help us in our way to reduce time passed to recreating the same things!</p>
	</div>
	<div class="feature">
		<h2>Robust</h2>
		<p>Each part of the library is passed through linting, tests are mandatory in order to help others developers and ensure consistency, and we ask for at least two translations (en and fr).</p>
	</div>
	<div class="feature">
		<h2>For you</h2>
		<p>We try to provide highly configurable and customizable components, and if one doesn't fit your requirements, ask us or create a pull request!</p>
	</div>
</div>

### As Easy as 1, 2, 3

#### Install

``` bash
yarn add @cnamts/vue-dot # OR npm install @cnamts/vue-dot
```

#### Load

``` ts{3}
// main.ts
import Vue from 'vue';
import '@cnamts/vue-dot';

new Vue({
    render: (h) => h(App)
}).$mount('#app');
```

#### You're done!

``` bash
# run your project
yarn serve # OR your own command
```
