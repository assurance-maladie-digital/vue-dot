module.exports = {
	base: '/vue-dot/',
	serviceWorker: true,
	evergreen: true,
	head: [
		[
			'script',
			{
				async: 'true',
				src: 'https://static.codepen.io/assets/embed/ei.js'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '180x180',
				href: '/apple-touch-icon.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png'
			}
		],
		[
			'link',
			{
				rel: 'manifest',
				href: '/site.webmanifest'
			}
		],
		[
			'meta',
			{
				rel: 'mask-icon',
				href: '/safari-pinned-tab.svg',
				color: '#435466'
			}
		],
		[
			'meta',
			{
				name: 'apple-mobile-web-app-title',
				content: 'VueDot'
			}
		],
		[
			'meta',
			{
				name: 'application-name',
				content: 'VueDot'
			}
		],
		[
			'meta',
			{
				name: 'msapplication-TileColor',
				content: '#fefefe'
			}
		],
		[
			'meta',
			{
				name: 'theme-color',
				content: '#fefefe'
			}
		]
	],
	locales: {
		'/': {
			lang: 'en',
			title: 'VueDot',
			description: 'Official CNAM component library',
		},
		'/fr/': {
			lang: 'fr-FR',
			title: 'VueDot',
			description: 'Librairie de composants officielle de la CNAM',
		}
	},
	themeConfig: {
		sidebarDepth: 1,
		locales: {
			'/': {
				label: 'English',
				selectText: 'Languages',
				nav: [
					{
						text: 'Guide',
						link: '/guide/'
					},
					{
						text: 'NPM',
						link: 'https://www.npmjs.com/package/@cnamts/vue-dot'
					},
					{
						text: 'Changelog',
						link: 'https://github.com/assurance-maladie-digital/vue-dot/releases'
					},
					{
						text: 'Github',
						link: 'https://github.com/assurance-maladie-digital/vue-dot'
					},
					{
						text: 'Vue.js',
						link: 'https://vuejs.org/'
					}
				],
				sidebar: {
					'/guide/': [
						{
							title: 'Guide',
							collapsable: false,
							children: [
								'',
								'components',
								'directives',
								'roadmap'
							]
						}
					]
				}
			},
			'/fr/': {
				label: 'Français',
				selectText: 'Langues',
				nav: [
					{
						text: 'Guide',
						link: '/fr/guide/'
					},
					{
						text: 'NPM',
						link: 'https://www.npmjs.com/package/@cnamts/vue-dot'
					},
					{
						text: 'Changelog',
						link: 'https://github.com/assurance-maladie-digital/vue-dot/releases'
					},
					{
						text: 'Github',
						link: 'https://github.com/assurance-maladie-digital/vue-dot'
					},
					{
						text: 'Vue.js',
						link: 'https://vuejs.org/'
					}
				],
				sidebar: {
					'/fr/guide/': [
						{
							title: 'Guide',
							collapsable: false,
							children: [
								'',
								'composants',
								'directives',
								'roadmap'
							]
						}
					]
				}
			}
		}
	}
};
