<template>
	<div class="theme-container">
		<VApp>
			<Toolbar @drawer:update="sidebarShow = !sidebarShow" />

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
							:key="item.title"
							:group="item.group"
							no-action
							active-class="primary--text your-class"
						>
							<VListTile
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
						alt="l'Assurance Maladie"
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
	import Toolbar from '../components/Toolbar.vue';
	import Home from './layouts/Home.vue';
	import Basic from './layouts/Basic.vue';

	export default {
		name: 'Layout',
		components: {
			Toolbar,
			Home,
			Basic
		},
		data() {
			return {
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
			guard() {
				// If the route doesn't match selected langage, redirect
				if (!this.$route.path.includes(this.$i18n.locale)) {
					this.$router.push(`/${this.$i18n.locale}/`);
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

			// Redirect default route
			if (this.$route.path === '/') {
				this.$router.push(`/${this.$i18n.locale}/`);
			}

			this.guard();
		}
	}
</script>

<style scoped>
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

	.v-list__group__header--active span {
		color: #0c4887 !important;
	}
</style>

<style lang="stylus">
	@require '~vuetify/src/stylus/main'
	@require '../../../dist/vue-dot.css'

	@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons')
</style>
