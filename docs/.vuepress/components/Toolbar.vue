<template>
	<VToolbar
		app
		dark
		fixed
		clipped-left
		color="secondary"
	>
		<VBtn
			icon
			class="mr-3 menu-btn"
			:to="isClient ? null : '/sitemap/'"
			:aria-label="t('menu')"
			:class="{ 'is-not-client': !isClient }"
			@click="$emit('drawer:update')"
		>
			<SvgIcon icon="menu" />
		</VBtn>

		<VBtn
			flat
			:to="t('home')"
			active-class="active"
			class="px-3 ma-0 text-none"
		>
			<SvgIcon
				x-large
				icon="vue-dot-dark"
			/>

			<h1
				v-show="!isClient || !$vuetify.breakpoint.xsOnly"
				class="ml-2 mr-2 font-weight-regular"
			>
				{{ t('name') }}
			</h1>
		</VBtn>

		<VSpacer />

		<VTextField
			v-show="isClient"
			solo
			light
			:label="t('toolbar.search')"
			single-line
			hide-details
			id="algolia-search-box"
			class="search mr-3"
			append-icon="search"
		/>

		<VMenu
			v-show="isClient"
			left
			bottom
			offset-y
		>
			<VBtn
				flat
				slot="activator"
				class="px-3 ma-0 text-none"
			>
				<template v-if="!$vuetify.breakpoint.xsOnly">
					{{ t('toolbar.ecosystem') }}
					<SvgIcon
						size=".7em"
						icon="down-arrow"
						class="ml-2"
					/>
				</template>

				<template v-else>
					<SvgIcon
						icon="earth"
					/>
				</template>
			</VBtn>

			<VList>
				<VListTile
					v-for="item in t('toolbar.items')"
					:key="item.title"
					:href="item.href"
					target="_blank"
					rel="noopener noreferrer"
					ripple
				>
					<VListTileContent>
						<VListTileTitle>
							<SvgIcon
								v-show="item.icon"
								:icon="item.icon"
								class="mr-2"
								color="#888"
							/>

							<span>{{ item.title }}</span>
						</VListTileTitle>
					</VListTileContent>
				</VListTile>

				<VListTile v-show="$vuetify.breakpoint.xsOnly">
					<VListTileContent>
						<VListTileTitle>
							v{{ version }}
						</VListTileTitle>
					</VListTileContent>
				</VListTile>
			</VList>
		</VMenu>

		<VBtn
			v-show="!$vuetify.breakpoint.xsOnly"
			flat
			class="px-3 ma-0 text-none"
		>
			v{{ version }}
		</VBtn>

		<LangBtn
			flat
			flags
			menu-left
			menu-bottom
			:outline="false"
			:disabled="!isClient"
			:value="currentLang"
			:display-text-btn="false"
			:display-arrow="false"
			:available-languages="languages"
			class="ma-0 text-none lang-btn"
			flags-url="https://res.cloudinary.com/deraw/image/upload/v1547044454/"
			@change="updateLang"
		/>
	</VToolbar>
</template>

<script>
	import { version } from '../../../package.json';

	export default {
		name: 'Toolbar',
		data() {
			return {
				version,
				initiated: false,
				languages: ['en', 'fr']
			};
		},
		methods: {
			updateLang(lang) {
				if (this.initiated) {
					this.$router.push(`/${lang}/`);
				} else {
					this.initiated = true;
				}
			}
		},
		mounted() {
			Promise.all([
				import(/* webpackChunkName: "docsearch" */ 'docsearch.js/dist/cdn/docsearch.min.js'),
				import(/* webpackChunkName: "docsearch" */ 'docsearch.js/dist/cdn/docsearch.min.css')
			]).then(([docsearch]) => {
				docsearch = docsearch.default;

				if (typeof docsearch === 'function') {
					docsearch({
						apiKey: '7bea1acb34d336b5535e2287c1a9de8d',
						indexName: 'vue-dot',
						inputSelector: '#algolia-search-box'
					});
				}
			}).catch((e) => console.error(e));
		}
	}
</script>

<style lang="scss" scoped>
	.v-toolbar {
		z-index: 7 !important;

		/deep/ .v-toolbar__content {
			height: 64px !important;
		}
	}

	.v-toolbar .v-btn:not(.v-btn--icon),
	.v-menu,
	.v-menu /deep/ .v-menu__activator {
		height: 100%;
	}

	.v-input.search {
		flex: none;
		height: 38px;
		width: 250px;

		/deep/ .v-input__slot {
			border-radius: 50px !important;
		}

		/deep/ .v-input__control {
			min-height: 38px !important;
		}
	}

	.lang-btn {
		/deep/ .v-btn {
			margin: 0;
			height: 100%;
			padding: 20px;
			min-width: 50px;
		}

		/deep/ .v-menu__activator--disabled {
			cursor: default;
		}
	}

	.menu-btn.is-not-client {
		display: none;
	}

	@media only screen and (max-width: 1000px) {
		.v-input.search {
			width: 145px;
			margin: 0 10px !important;
		}

		.v-toolbar .v-btn,
		.lang-btn /deep/ .v-btn {
			min-width: 0 !important;
			padding: 0 16px !important;
		}

		.menu-btn {
			margin: 0 !important;
		}

		.menu-btn.is-not-client {
			display: flex;
		}
	}

	@media only screen and (max-width: 400px) {
		.v-toolbar .v-btn,
		.lang-btn /deep/ .v-btn {
			padding: 0 10px !important;
		}
	}

	@media only screen and (max-width: 360px) {
		.v-input.search {
			display: none;
		}
	}
</style>
