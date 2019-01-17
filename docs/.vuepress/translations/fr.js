const fr = {
	name: 'VueDot',
	home: '/fr/',
	toolbar: {
		search: 'Rechercher',
		ecosystem: 'Écosystème',
		items: [
			{
				title: 'Github',
				icon: 'github',
				href: 'https://github.com/assurance-maladie-digital/vue-dot'
			},
			{
				title: 'npm',
				icon: 'package',
				href: 'https://www.npmjs.com/package/@cnamts/vue-dot'
			},
			{
				title: 'Newsletter',
				icon: 'write-email',
				href: 'https://www.getrevue.co/profile/vue-dot'
			}
		],
		sidebarItems: [
			{
				title: 'Commencer',
				icon: 'forward-arrow',
				to: '/fr/guide/'
			},
			{
				title: 'Thèmes personnalisés',
				icon: 'painter-palette',
				to: '/fr/guide/themes/'
			},
			{
				title: 'Roadmap',
				icon: 'clock',
				to: '/fr/roadmap/'
			},
			{
				title: 'Composants IU',
				icon: 'dashboard',
				group: 'components',
				items: [
					{
						title: 'SvgIcon',
						to: '/fr/components/svg-icon/'
					},
					{
						title: 'LangBtn',
						to: '/fr/components/lang-btn/'
					},
					{
						title: 'DatePicker',
						to: '/fr/components/date-picker/'
					}
				]
			},
			{
				title: 'Directives',
				icon: 'function',
				group: 'directives',
				items: [
					{
						title: 'Délai',
						to: '/fr/directives/delai/'
					}
				]
			},
			{
				title: 'Vuetify',
				icon: 'vuetify',
				href: 'https://vuetifyjs.com/en/components/api-explorer'
			}
		]
	},
	api: {
		name: 'Nom',
		default: 'Défaut'
	}
};

export default fr;
