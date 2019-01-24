<template>
	<form
		method="POST"
		action="https://codepen.io/pen/define/"
		target="_blank"
		ref="form"
	>
		<input
			type="hidden"
			name="data"
			:value="value"
		>
	</form>
</template>

<script>
	import { version, devDependencies } from '../../../package.json';
	const vuetify = devDependencies.vuetify.substr(1);
	const title = 'VueDot Example Pen';

	const cssResources = [
		'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons',
		`https://cdn.jsdelivr.net/npm/vuetify@${vuetify}/dist/vuetify.min.css`,
		`https://cdn.jsdelivr.net/npm/@cnamts/vue-dot@${version}/dist/vue-dot.css`
	];

	const jsResources = [
		'https://cdn.jsdelivr.net/npm/babel-polyfill/dist/polyfill.min.js',
		'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
		`https://cdn.jsdelivr.net/npm/vuetify@${vuetify}/dist/vuetify.min.js`,
		`https://cdn.jsdelivr.net/npm/@cnamts/vue-dot@${version}/dist/vue-dot.umd.min.js`
	];

	export default {
		name: 'Codepen',
		props: {
			pen: {
				type: Object,
				default: () => ({})
			},
			title: {
				type: String,
				default: title
			}
		},
		computed: {
			additionalScript() {
				const additional = this.pen.codepenAdditional || '';

				return additional
				.replace(/(<codepen-additional.*?>|<\/codepen-additional>$)/g, '')
				.replace(/\n {2}/g, '\n')
				.trim() + (additional ? '\n\n' : '');
			},
			additionalResources() {
				const resources = this.pen.codepenResources || '{}';

				return Object.assign(
					{ css: [], js: [] },
					JSON.parse(
						resources.replace(/(<codepen-resources.*?>|<\/codepen-resources>$)/g, '')
					)
				);
			},
			script() {
				const imports = /(import*) ([^'\n]*) from ([^\n]*)/g;
				let component = /export default {([\s\S]*)}/g.exec(this.pen.script || '');

				component = ((component && component[1]) || '')
				.replace(/\n {2}/g, '\n')
				.trim();

				let script = /<script>([\s\S]*)export default {/g.exec(this.pen.script || '');

				script = ((script && script[1]) || '')
				.replace(imports, '')
				.replace(/\n {2}/g, '\n')
				.trim();

				script += script ? '\n\n' : '';

				return this.additionalScript + script +
`new Vue({
	el: '#app',
	${component}
});`
			},
			style() {
				const style = this.pen.style || '';

				return {
					content: style.replace('>>> ', '').replace(/(<style.*?>|<\/style>)/g, '').replace(/\n {2}/g, '\n').trim(),
					language: /<style.*lang=["'](.*)["'].*>/.exec(this.pen.style || '')
				};
			},
			template() {
				let template = this.pen.template || '';

				// see https://regex101.com/r/bc2MVk/3
				const PascalCasePlus = /[A-Z]([A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])[A-Za-z0-9]*|(\/>)|(path)/gm;
				let previousMatch;

				template = template.replace(PascalCasePlus, (str) => {
					let ret;

					if (str === '/>' && previousMatch !== 'path') {
						ret = `></${previousMatch}>`;
					} else {
						ret = str.split(/(?=[A-Z])/).join('-').toLowerCase();
					}

					previousMatch = ret;
					return ret;
				});

				return template
				.replace(/(<template>|<\/template>$)/g, '')
				.replace(/\n/g, '\n  ')
				.trim();
			},
			editors() {
				const html = this.template && 0b100;
				const css = this.style.content && 0b010;
				const js = this.script && 0b001;

				return (html | css | js).toString(2);
			},
			value() {
				const data = {
					title: this.title,
					html:
`<div id="app">
	<v-app id="inspire">
		${this.template}
	</v-app>
</div>`,
					css: this.style.content,
					css_pre_processor: this.style.language ? this.style.language[1] : 'none',
					css_external: [...this.additionalResources.css, ...cssResources].join(';'),
					js: this.script,
					js_pre_processor: 'babel',
					js_external: [...this.additionalResources.js, ...jsResources].join(';'),
					editors: this.editors
				}

				return JSON.stringify(data)
			}
		},
		methods: {
			submit() {
				this.$el.submit();
			}
		}
	};
</script>
