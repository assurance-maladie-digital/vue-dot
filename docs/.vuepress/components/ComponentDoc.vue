<template>
	<div v-if="component">
		<p>{{ component.description }}</p>
		<h2
			class="mb-3 mt-5"
			id="api"
		>
			<a
				href="#api"
				aria-hidden="true"
				class="header-anchor"
			>#</a>
			API
		</h2>
		<v-card
			flat
			class="main-card"
		>
			<v-tabs
				color="grey lighten-3"
				slider-color="green"
			>
				<v-tab
					v-for="(data, key) in componentData"
					:key="key"
					ripple
				>
					{{ key }}
				</v-tab>
				<v-tab-item
					v-for="(data, key) in componentData"
					:key="key"
				>
					<v-card
						flat
						class="grey lighten-5"
					>
						<v-card-text class="grey lighten-5">
							<v-data-iterator
								:items="data"
								hide-actions
							>
								<div
									slot="item"
									slot-scope="props"
									class="row"
								>
									<h2 v-if="props.item.name === 'separator'">{{ props.item.title }}</h2>
									<template v-else>
										<div
											class="pa-2 white d-flex align-top"
										>
											<div class="flex xs3 text-xs-left">
												<div class="header grey--text text--darken-1">Name</div>
												<div class="mono name">{{ props.item.name }}</div>
											</div>
											<div
												class="flex xs6 text-xs-left"
												v-if="props.item.default"
											>
												<div class="header grey--text text--darken-1">Default</div>
												<div class="mono default">{{ props.item.default }}</div>
											</div>
											<div
												class="flex xs3 text-xs-right"
												v-if="props.item.type"
											>
												<div class="header grey--text text--darken-1">Type</div>
												<div class="mono type">{{ typeof props.item.type === 'object' ? props.item.type.join(' | ') : props.item.type }}</div>
											</div>
											<v-spacer v-if="props.item.value" />
											<div
												class="flex xs3 text-xs-right"
												v-if="props.item.value"
											>
												<div class="header grey--text text--darken-1">Value</div>
												<div class="mono type">{{ props.item.value }}</div>
											</div>
										</div>
										<div class="pa-2 grey lighten-3 grey--text text--darken-2 d-flex">
											<div class="flex">
												<div class="justify">
													<p class="mb-0" v-html="props.item.description"></p>
												</div>
											</div>
										</div>
									</template>
								</div>
							</v-data-iterator>
						</v-card-text>
					</v-card>
				</v-tab-item>
			</v-tabs>
		</v-card>
	</div>
</template>

<script>
	import Vue from 'vue';
	import Vuetify from 'vuetify';

	Vue.use(Vuetify);

	import api from '../assets/api';

	export default Vue.extend({
		name: 'ComponentDoc',
		data() {
			return {
				api
			};
		},
		props: {
			current: {
				type: String,
				required: true
			}
		},
		computed: {
			component() {
				return this.api[this.current];
			},
			componentData() {
				const component = Object.assign({}, this.component);
				delete component.description;

				return component;
			}
		}
	});
</script>

<style lang="scss">
	span.title {
		font-size: .9rem !important;
	}

	span.right {
		float: none !important;
	}

	.v-tabs__item:hover {
		text-decoration: none !important;
	}
</style>

<style lang="scss" scoped>
	@import '~vuetify/dist/vuetify.min.css';

	.main-card {
		border: 1px solid #e4e4e4;
	}

	.v-data-iterator {
		.name {
			font-family: monospace;
			color: #3eaf7c;
		}

		.header {
			font-family: monospace;
			font-size: .8rem;
		}

		.mono {
			font-family: monospace;
			font-weight: 900;
		}

		h2 {
			color: #333;
			font-size: 1.3rem;
		}

		.row {
			border: 1px solid #e4e4e4;
		}

		.row + .row {
			margin-top: 15px;
		}
	}

	code {
		color: #3eaf7c;
	}
</style>
