module.exports = {
	base: '/vue-dot/',
	evergreen: true,
	head: [
		[
			'script',
			{
				async: 'true',
				src: 'https://static.codepen.io/assets/embed/ei.js'
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
		sidebarDepth: 2,
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
						link: 'https://github.com/assurance-maladie-digital/vue-dot/blob/master/CHANGELOG.md'
					},
					{
						text: 'Gitlab',
						link: 'https://git.digital.cnamts.fr/broussard-57951/vue-dot/'
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
								'directives'
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
						link: 'https://github.com/assurance-maladie-digital/vue-dot/blob/master/CHANGELOG.md'
					},
					{
						text: 'Gitlab',
						link: 'https://git.digital.cnamts.fr/broussard-57951/vue-dot/'
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
								'directives'
							]
						}
					]
				}
			}
		}
	}
};
