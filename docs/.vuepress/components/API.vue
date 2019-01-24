<template>
	<VCard
		class="main-card"
	>
		<VTabs
			color="grey lighten-3"
			slider-color="secondary"
		>
			<VTab
				v-for="(data, key) in component"
				:key="key"
				ripple
			>
				{{ key }}
			</VTab>

			<VTabItem
				v-for="(data, key) in component"
				:key="key"
			>
				<VCard
					flat
					class="grey lighten-5"
				>
					<VCardText class="grey lighten-5">
						<VDataIterator
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
									<VLayout
										wrap
										class="pa-2 white align-top"
										:column="$vuetify.breakpoint.xs"
									>
										<div
											class="text-xs-left"
											:style="{
												'min-width': '20%'
											}"
										>
											<div class="header grey--text text--darken-1">{{ $t('api.name') }}</div>
											<div class="mono name">{{ props.item.name }}</div>
										</div>

										<div
											class="text-xs-left"
											v-if="props.item.default"
										>
											<div class="header grey--text text--darken-1">{{ $t('api.default') }}</div>
											<div class="mono default">{{ props.item.default }}</div>
										</div>

										<VSpacer />

										<div
											:class="{
												'text-xs-right': $vuetify.breakpoint.smAndUp
											}"
											v-if="props.item.type"
										>
											<div class="header grey--text text--darken-1">Type</div>
											<div class="mono type">{{ typeof props.item.type === 'object' ? props.item.type.join(' | ') : props.item.type }}</div>
										</div>

										<VSpacer v-if="props.item.value" />

										<div
											class="text-xs-right"
											v-if="props.item.value"
										>
											<div class="header grey--text text--darken-1">Value</div>
											<div class="mono type">{{ props.item.value }}</div>
										</div>
									</VLayout>

									<div class="pa-2 grey lighten-3 grey--text text--darken-2 d-flex">
										<div class="flex">
											<div class="justify">
												<p
													class="mb-0"
													v-html="md(props.item.description)"
												/>
											</div>
										</div>
									</div>
								</template>
							</div>
						</VDataIterator>
					</VCardText>
				</VCard>
			</VTabItem>
		</VTabs>
	</VCard>
</template>

<script>
	import md from '../theme/functions/md';

	export default {
		name: 'API',
		props: {
			component: {
				type: [Object, Array],
				required: true
			}
		},
		methods: {
			md
		}
	};
</script>

<style scoped>
	.name {
		font-family: monospace;
		color: #01579b;
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

	code {
		color: #01579b;
	}
</style>
