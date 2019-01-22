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
			class="mr-3"
			:aria-label="$t('menu')"
			@click="$emit('drawer:update')"
		>
			<SvgIcon icon="menu" />
		</VBtn>

		<VBtn
			flat
			:to="$t('home')"
			active-class="active"
			class="px-3 ma-0 text-none"
		>
			<SvgIcon
				x-large
				icon="vue-dot-dark"
			/>
			<h1 class="ml-2 mr-2 font-weight-regular">{{ $t('name') }}</h1>
		</VBtn>

		<VSpacer />

		<VTextField
			solo
			light
			:label="$t('toolbar.search')"
			single-line
			hide-details
			id="algolia-search-box"
			class="search mr-3"
			append-icon="search"
		/>

		<VMenu
			left
			bottom
			offset-y
		>
			<VBtn
				flat
				slot="activator"
				class="px-3 ma-0 text-none"
			>
				{{ $t('toolbar.ecosystem') }}
				<SvgIcon
					size=".7em"
					icon="down-arrow"
					class="ml-2"
				/>
			</VBtn>

			<VList>
				<VListTile
					v-for="item in $t('toolbar.items')"
					:key="item.title"
					:href="item.href"
					target="_blank"
					rel="noopener noreferrer"
					ripple
				>
					<VListTileContent>
						<VListTileTitle>
							<SvgIcon
								v-if="item.icon"
								:icon="item.icon"
								class="mr-2"
								color="#888"
							/>

							<span>{{ item.title }}</span>
						</VListTileTitle>
					</VListTileContent>
				</VListTile>
			</VList>
		</VMenu>

		<VBtn
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
			:value="$i18n.locale"
			@change="updateLang"
			:display-text-btn="false"
			:display-arrow="false"
			:available-languages="languages"
			class="ma-0 text-none lang-btn"
			flags-url="https://res.cloudinary.com/deraw/image/upload/v1547044454/"
		/>
	</VToolbar>
</template>

<script>
	import { version } from '../../../package.json';
	import { loadLanguageAsync } from '../i18n';

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
				loadLanguageAsync(lang);

				if (this.initiated) {
					this.$router.push(`/${lang}/`);
				} else {
					this.initiated = true;
				}
			}
		},
		created() {
			Promise.all([
				import(/* webpackChunkName: "docsearch" */ 'docsearch.js/dist/cdn/docsearch.min.js'),
				import(/* webpackChunkName: "docsearch" */ 'docsearch.js/dist/cdn/docsearch.min.css')
			]).then(([docsearch]) => {
				docsearch = docsearch.default;

				docsearch({
					apiKey: '7bea1acb34d336b5535e2287c1a9de8d',
					indexName: 'vue-dot',
					inputSelector: '#algolia-search-box',
					algoliaOptions: {
						'facetFilters': [`lang:${this.$i18n.locale}`]
					}
				});
			});
		}
	}
</script>

<style scoped>
	.v-toolbar {
		z-index: 5 !important;
	}

	.v-toolbar .v-btn:not(.v-btn--icon),
	.v-menu,
	.v-menu >>> .v-menu__activator {
		height: 100%;
	}

	.v-input.search {
		flex: none;
		height: 38px;
		width: 250px;
	}

	.v-input.search >>> .v-input__slot {
		border-radius: 50px !important;
	}

	.v-input.search >>> .v-input__control {
		min-height: 38px !important;
	}

	.lang-btn >>> .v-btn {
		margin: 0;
		height: 100%;
		padding: 20px;
		min-width: 50px;
	}
</style>
