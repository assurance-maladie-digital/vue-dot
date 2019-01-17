const en = {
	name: 'VueDot',
	home: '/',
	toolbar: {
		search: 'Search',
		ecosystem: 'Ecosystem',
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
				title: 'Getting started',
				icon: 'forward-arrow',
				to: '/guide/'
			},
			{
				title: 'Custom themes',
				icon: 'painter-palette',
				to: '/guide/themes/'
			},
			{
				title: 'Contributing',
				icon: 'heart',
				to: '/contributing/'
			},
			{
				title: 'Roadmap',
				icon: 'clock',
				to: '/roadmap/'
			},
			{
				title: 'UI Components',
				icon: 'dashboard',
				group: 'components',
				items: [
					{
						title: 'SvgIcon',
						to: '/components/svg-icon/'
					},
					{
						title: 'LangBtn',
						to: '/components/lang-btn/'
					},
					{
						title: 'DatePicker',
						to: '/components/date-picker/'
					},
					{
						title: 'DataList',
						to: '/components/data-list/'
					}
				]
			},
			{
				title: 'Directives',
				icon: 'function',
				group: 'directives',
				items: [
					{
						title: 'Debounce',
						to: '/directives/debounce/'
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
		name: 'Name',
		default: 'Default'
	}
};

export default en;
