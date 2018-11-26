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
		],
		[
			'meta',
			{
				name: 'google-site-verification',
				content: 'cA4p0q68_DnDQ-yllaSj48QKn5yErVu6Dl2VeFpjI2E'
			}
		],
		[
			'script',
			{
				src: 'https://js.sentry-cdn.com/da9b678c454344789142e9b3c4e8b394.min.js',
				crossorigin: 'anonymous'
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
		updatePopup: true,
		lastUpdated: 'Last Updated',
		sidebarDepth: 1,
		algolia: {
			apiKey: '7bea1acb34d336b5535e2287c1a9de8d',
			indexName: 'vue-dot'
		},
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
						text: 'Newsletter',
						link: 'https://www.getrevue.co/profile/vue-dot'
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
					},
					{
						text: 'Version',
						items: [
							{
								text: 'Lastest (v1.4.0)',
								link: '/'
							},
							{
								text: 'Next',
								link: '/next/'
							}
						]
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
						text: 'Newsletter',
						link: 'https://www.getrevue.co/profile/vue-dot'
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
					},
					{
						text: 'Version',
						items: [
							{
								text: 'Dernière (v1.4.0)',
								link: '/fr/'
							},
							{
								text: 'Prochaine',
								link: '/next/fr/'
							}
						]
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
