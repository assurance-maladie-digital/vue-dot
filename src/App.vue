<template>
	<v-app class="pa-5 white">
		<h1 class="mb-3">VueDot</h1>
		<h2 class="mb-3">Components</h2>
		<div class="ml-3">
			<h3 class="mb-1">
				<SvgIcon
					small
					icon="heart"
					class="mr-1"
				/>
				SvgIcon
			</h3>
			<CodePen
				id="yxRJOO"
				title="SvgIcon"
			/>
			<v-divider class="my-3" />
			<h3 class="mb-3">DatePicker</h3>
			<DatePicker
				label="Date de naissance"
				v-model="date"
				birthdate
				append-icon-color="#3eaf7c"
				value="1998-09-14"
				color="#3eaf7c"
				date-format-return="Le dddd D MMMM YYYY"
			/>
			<p class="ma-0 mt-2 result">Date: {{ date }}</p>
			<!-- <LangBtn
				:availableLanguages="['en', 'fr']"
				@updatedLanguage="log"
			/> -->
		</div>
		<h2 class="my-3">Directives</h2>
		<div class="ml-3">
			<h3 class="mb-3">v-debounce</h3>
			<p class="ma-0">Native input</p>
			<input
				v-model.lazy="text"
				placeholder="Type here"
				v-debounce="1000"
				class="simple-input mb-4"
			>
			<p class="ma-0">Custom input (eg. Vuetify)</p>
			<v-text-field
				:value="message"
				label="Type here"
				v-debounce.1000="setText"
				@change="setText"
			></v-text-field>
			<p class="ma-0 result">Debounced text: {{ text }}</p>
		</div>
	</v-app>
</template>

<script lang="ts">
	import Vue from 'vue';

	import CodePen from '../docs/.vuepress/components/CodePen.vue';

	export default Vue.extend({
		name: 'App',
		data() {
			return {
				date: '14/09/1998',
				text: ''
			};
		},
		methods: {
			log(e: any) {
				// tslint:disable no-console
				console.log(e);
			},
			setText(value: string) {
				this.text = value;
			}
		},
		computed: {
			message: {
				get(): string {
					return this.text;
				},
				set(value: string) {
					this.text = value;
				}
			}
		},
		components: {
			CodePen
		}
	});
</script>

<style lang="scss">
	* {
		$transparent: rgba(0, 0, 0, 0);

		max-width: 100%;
		margin: 0;
		padding: 0;
		border: 0;
		scroll-behavior: smooth;
		font-family: 'Roboto', sans-serif;
		box-sizing: border-box;
		word-break: break-word;
		hyphens: auto;
		-moz-osx-font-smoothing: grayscale;
		-webkit-tap-highlight-color: $transparent;
	}

	html,
	body {
		font-size: 100%;
	}

	body {
		min-height: 100vh;
		line-height: 1.25;
	}

	input {
		appearance: none;
	}

	ul {
		list-style: none;
	}

	a,
	input,
	button {
		transition: .25s;
	}

	.sr-only {
		position: absolute !important;
		top: 0;
		left: -999px;
		width: 1px !important;
		height: 1px !important;
		white-space: nowrap;
		overflow: hidden;
		clip: rect(1px, 1px, 1px, 1px);
	}

	.v-ripple__container {
		&,
		& * {
			max-width: none;
		}
	}

	h1 {
		color: #333;
		font-size: 2rem;
	}

	h2,
	h3,
	h4 {
		color: #5a5a5a;
	}

	h4 ~ h4 {
		margin-top: 30px;
	}

	iframe {
		border: 1px solid #f3f3f3;
	}

	.application--wrap {
		margin: 0 auto;
		max-width: 1200px;

		> div {
			padding: 10px 15px;
			background: #fafafa;
		}
	}

	.simple-input {
		width: 100%;
		padding: 5px 0;
		font-size: 1rem;
		border-bottom: 1px solid #3eaf7c;
	}

	.result {
		color: #3eaf7c;
		font-size: .9rem;
		font-weight: 700;
	}
</style>
