<template>
	<div class="theme-container">
		<VApp>
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
					@click="sidebarShow = !sidebarShow"
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

			<VNavigationDrawer
				app
				fixed
				clipped
				:value="sidebar"
				v-model="sidebarShow"
			>
				<VList expand>
					<template v-for="item in $t('toolbar.sidebarItems')">
						<VListTile
							v-if="!item.items"
							:key="item.title"
							:to="item.to || null"
							:href="item.href || null"
							:target="item.href ? '_blank' : null"
							:rel="item.href ? 'noopener noreferrer' : null"
							ripple
							exact
						>
							<VListTileContent>
								<VListTileTitle>
									<SvgIcon
										v-if="item.icon"
										:icon="item.icon"
										class="mr-3"
									/>

									<span>{{ item.title }}</span>
								</VListTileTitle>
							</VListTileContent>
						</VListTile>

						<VListGroup
							v-if="item.items"
							:group="item.group"
							no-action
						>
							<VListTile
								:key="item.title"
								:to="item.to"
								slot="activator"
								ripple
								exact
							>
								<VListTileContent>
									<VListTileTitle>
										<SvgIcon
											v-if="item.icon"
											:icon="item.icon"
											class="mr-3"
										/>

										<span>{{ item.title }}</span>
									</VListTileTitle>
								</VListTileContent>
							</VListTile>

							<VListTile
								v-for="item in item.items"
								:key="item.title"
								:to="item.to"
								ripple
								exact
							>
								<VListTileContent>
									<VListTileTitle>
										<span>{{ item.title }}</span>
									</VListTileTitle>
								</VListTileContent>
							</VListTile>
						</VListGroup>
					</template>
				</VList>
			</VNavigationDrawer>

			<VContent>
				<component :is="layout" />
			</VContent>

			<VFooter
				v-if="$page.frontmatter.home"
				app
				dark
				absolute
				height="auto"
				class="px-3 py-5"
			>
				<VLayout
					column
					align-center
					justify-center
					class="footer-content"
				>
					<img
						:src="$withBase('/img/logo-am.svg')"
						height="70"
					>

					<p class="mt-3 mb-0">
						{{ $page.frontmatter.footerRealease }}
						<a href="https://github.com/assurance-maladie-digital/vue-dot/blob/master/LICENSE">
							{{ $page.frontmatter.footerRealeaseLink }}
						</a>
					</p>
					<p class="mb-0">
						{{ $page.frontmatter.footerMadeWith }}
						<a href="https://fr.vuejs.org/">
							{{ $page.frontmatter.footerVueJs }}
						</a>
					</p>
					<p class="mb-0">{{ $page.frontmatter.footerCopyright }}</p>
				</VLayout>
			</VFooter>
		</VApp>
	</div>
</template>

<script>
	import Home from './layouts/Home.vue';
	import Basic from './layouts/Basic.vue';
	import { version } from '../../../package.json';
	import { loadLanguageAsync } from '../i18n';

	export default {
		name: 'Layout',
		components: {
			Home,
			Basic
		},
		data() {
			return {
				version,
				languages: ['en', 'fr'],
				sidebarShow: false
			};
		},
		computed: {
			layout() {
				if (this.$page.frontmatter.home) {
					return 'Home';
				}

				return this.$page.frontmatter.layout || 'Basic'
			},
			sidebar() {
				return this.sidebarShow;
			}
		},
		methods: {
			updateLang(lang) {
				loadLanguageAsync(lang);

				if (this.$i18n.fallbackLocale !== lang) {
					this.$router.push(`/${lang}/`);
				} else {
					this.$router.push('/');
				}
			}
		},
		watch: {
			$page() {
				this.sidebarShow = !this.$page.frontmatter.home;
			}
		},
		created() {
			if (!this.$vuetify.breakpoint.xsOnly) {
				this.sidebarShow = !this.$page.frontmatter.home;
			}
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

	.footer-content {
		opacity: .9;
	}

	.v-footer a {
		color: #bbb;
	}

	.v-list__tile__title {
		display: flex;
		align-items: center;
	}

	.v-navigation-drawer >>> .v-list .v-list__tile {
		transition: background .15s !important;
	}

	.v-input.search {
		flex: none;
		height: 38px;
		width: 250px;
		overflow: hidden;
		border-radius: 50px;
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

<style lang="stylus">
	@require '~vuetify/src/stylus/main'
	@require '../../../dist/vue-dot.css'

	@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons')
</style>
