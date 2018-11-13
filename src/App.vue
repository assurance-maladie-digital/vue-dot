<template>
	<v-app class="pa-5 white">
		<h1 class="mb-3">VueDot</h1>
		<XSvgIcon
			x-large
			icon="svg"
		/>
		 <XExpansionPanel>
			<v-expansion-panel-content
				v-for="(item, i) in 5"
				:key="i"
			>
				<div slot="header">Item</div>
				<v-card>
					<v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
				</v-card>
			</v-expansion-panel-content>
		</XExpansionPanel>
		<h2 class="mb-3">Components</h2>
		<div class="ml-3">
			<h3 class="mb-1">
				<XSvgIcon
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
			<XDivider class="my-3" />
			<h3 class="mb-3">DatePicker</h3>
			<XDatePicker
				label="Date de naissance"
				v-model="date"
				birthdate
				append-icon-color="#3eaf7c"
				color="#3eaf7c"
				date-format="DD/MM/YYYY"
				date-format-return="Le dddd D MMMM YYYY"
			/>
			<p class="ma-0 mt-2 result">Date: {{ date }}</p>
			<XDivider class="my-3" />
			<h3 class="mb-3">LangBtn</h3>
			<XLangBtn
				v-model="lang"
				:available-languages="['en', 'fr']"
			/>
			<p class="ma-0 result">Lang: {{ lang }}</p>
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

		<h2 class="my-3">Ameli Pro</h2>
		<div class="ml-3">
			<h3 class="mb-3">Components</h3>
			<h4>Buttons</h4>
			<XBtn primary>Success</XBtn>
			<XBtn secondary>Secondary</XBtn>
			<XBtn tertiary>Tertiary</XBtn>

			<XBreadcrumbs :items="items">
				<template slot="item" slot-scope="props">
					<a :href="props.item.href">{{ props.item.text.toUpperCase() }}</a>
				</template>
				<v-icon slot="divider">forward</v-icon>
			</XBreadcrumbs>

			<h3 class="mb-3">Color theme</h3>
			<ul>
				<li
					v-for="(colorObj, index) in this.$vuetify.theme"
					:key="index"
					class="mt-4"
				>
					<h4>{{ index }}</h4>
					<ul v-if="colorObj && typeof colorObj === 'object'">
						<li
							v-for="(color, index) in colorObj"
							:key="index"
							class="mt-2"
						>
							<span class="color-label">{{ index }}</span>
							<XSvgIcon
								:color="color"
								class="color-square"
							>
								<svg
									width="10"
									height="10"
									viewBox="0 0 24 24"
								>
									<rect
										width="24"
										height="24"
									/>
								</svg>
							</XSvgIcon>
							{{ color }}
						</li>
					</ul>
					<div
						v-else
						class="color-el mt-2"
					>
						<XSvgIcon
							:color="colorObj"
							class="color-square"
						>
							<svg
								width="10"
								height="10"
								viewBox="0 0 24 24"
							>
								<rect
									width="24"
									height="24"
								/>
							</svg>
						</XSvgIcon>
						{{ colorObj }}
					</div>
				</li>
			</ul>
		</div>
	</v-app>
</template>

<script lang="ts">
	// This is a playground, it is not tested because it isn't a part of the library
	import Vue from 'vue';

	import CodePen from '../docs/.vuepress/components/CodePen.vue';

	export default Vue.extend({
		name: 'App',
		data() {
			return {
				date: '14/09/1998',
				text: '',
				lang: 'en',
				items: [
					{
					text: 'Dashboard',
					disabled: false,
					href: 'breadcrumbs_dashboard'
					},
					{
					text: 'Link 1',
					disabled: false,
					href: 'breadcrumbs_link_1'
					},
					{
					text: 'Link 2',
					disabled: true,
					href: 'breadcrumbs_link_2'
					}
				]
			};
		},
		created() {
			this.$vuetify.theme = this.$theme.config.colors;
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

	.color-square {
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, .5);
	}

	.color-label {
		width: 100px;
		display: inline-block;
	}

	.color-el {
		padding-left: 24px;
	}
</style>
