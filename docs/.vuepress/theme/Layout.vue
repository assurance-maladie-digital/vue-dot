<template>
	<div class="theme-container">
		<VApp :class="{ 'is-not-client': !isClient, 'sidebar': sidebarShow }">
			<Toolbar @drawer:update="sidebarShow = !sidebarShow" />

			<VNavigationDrawer
				v-model="sidebarShow"
				app
				fixed
				clipped
				:value="sidebar"
				:class="{ 'is-not-client': !isClient, 'drawer': sidebarShow }"
			>
				<Sitemap />
			</VNavigationDrawer>

			<VContent>
				<component :is="layout" />
			</VContent>

			<VFooter
				v-show="$page.frontmatter.home"
				app
				dark
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

					<p class="text-center mt-3 mb-0">
						{{ $page.frontmatter.footerRealease }}
						<a href="https://github.com/assurance-maladie-digital/vue-dot/blob/master/LICENSE">
							{{ $page.frontmatter.footerRealeaseLink }}
						</a>
					</p>

					<p class="text-center mb-0">
						{{ $page.frontmatter.footerMadeWith }}
						<a href="https://fr.vuejs.org/">
							{{ $page.frontmatter.footerVueJs }}
						</a>

						<span
							v-show="$page.frontmatter.footerMadeBy"
							class="mb-0"
						>
							{{ $page.frontmatter.footerMadeBy }}
							<a
								v-show="$page.frontmatter.footerMadeByLink"
								:href="$page.frontmatter.footerMadeByLink"
							>
								{{ $page.frontmatter.footerMadeByLinkText }}
							</a>
						</span>
					</p>

					<p class="text-center mb-0">{{ $page.frontmatter.footerCopyright }}</p>
				</VLayout>
			</VFooter>
		</VApp>
	</div>
</template>

<script>
	import Toolbar from '../components/Toolbar.vue';
	import Sitemap from '../components/Sitemap.vue';
	import Home from './layouts/Home.vue';
	import Basic from './layouts/Basic.vue';

	export default {
		name: 'Layout',
		components: {
			Toolbar,
			Sitemap,
			Home,
			Basic
		},
		data() {
			return {
				sidebarShow: true
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
			updateSidebar() {
				if (!this.$vuetify.breakpoint.mdAndDown) {
					this.sidebarShow = !this.$page.frontmatter.home;
				}
			}
		},
		watch: {
			$page() {
				this.updateSidebar();
			}
		},
		created() {
			// Disable sidebar on SSR on home page
			if (this.$page.frontmatter.home) {
				this.sidebarShow = false;
			}
		},
		mounted() {
			this.updateSidebar();

			// Redirect default route
			if (this.$route.path === '/') {
				this.$router.push('/en/');
			}
		}
	}
</script>

<style lang="scss" scoped>
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

	.v-navigation-drawer /deep/ .v-list .v-list__tile {
		transition: background .15s !important;
	}

	.v-list__group__header--active span {
		color: #0c4887 !important;
	}
</style>

<style lang="scss">
	.text-center {
		text-align: center;
	}

	// Fix a bug due to SSR
	.v-navigation-drawer {
		max-height: 100% !important;
	}

	// Overlap toolbar on mobile
	.v-navigation-drawer--is-mobile {
		z-index: 8 !important;
	}

	// Apply default padding on SSR when not on home page
	.application.is-not-client.sidebar .v-content {
		padding: 64px 0px 0px 300px !important;
	}

	// Apply default styles on SSR
	.drawer.is-not-client {
		height: 100% !important;
		width: 300px !important;
		margin-top: 64px !important;
		transform: translateX(0px) !important;
	}

	.v-content {
		padding-bottom: 0 !important;
	}

	.v-content__wrap {
		display: flex;
		justify-content: center;
	}

	.v-footer {
		position: static !important;
	}

	.custom-ctn {
		padding: 24px;
		margin: 0 auto;
		flex: 1 1 100%;
		max-width: 1200px;
	}

	@media only screen and (max-width: 959px) {
		.custom-ctn {
			padding: 16px 24px !important;
		}

		.drawer.is-not-client {
			transform: translateX(-300px) !important;
		}

		.application.is-not-client.sidebar .v-content {
			padding-left: 0px !important;
		}
	}

	// Disable transitions by default for better loading
	a,
	button {
		transition: none !important;
	}
</style>

<style lang="stylus">
	@require '~vuetify/src/stylus/main'
	@require '../../../dist/vue-dot.css'

	@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons')
</style>
