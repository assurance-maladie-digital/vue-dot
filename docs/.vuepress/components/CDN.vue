<template>
	<Code
		:code="code"
		lang="html"
	/>
</template>

<script>
	import { version } from '../../../package.json';

	export default {
		name: 'CDN',
		data() {
			return {
				code: `<!DOCTYPE html>
<html>
	<head>
		<link
			href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
			rel="stylesheet"
		>

		<link
			href="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css"
			rel="stylesheet"
		>

		<link
			href="https://cdn.jsdelivr.net/npm/@cnamts/vue-dot@${version}/dist/vue-dot.umd.min.js"
			rel="stylesheet"
		>

		<meta name="viewport" content="width=device-width">
	</head>

	<body>
		<div id="app">
			<v-app>
				<v-content>
					<v-container>Hello world</v-container>
				</v-content>
			</v-app>
		</div>

		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>
		<script src="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.js"><\/script>
		<script src="https://cdn.jsdelivr.net/npm/@cnamts/vue-dot@${version}/dist/vue-dot.umd.min.js"><\/script>

		<script>
			new Vue({ el: '#app' });
		<\/script>
	</body>
</html>`
			};
		}
	};
</script>
