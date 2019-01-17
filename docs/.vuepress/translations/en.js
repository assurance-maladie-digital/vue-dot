const en = {
	name: 'VueDot',
	home: '/en/',
	menu: 'Menu',
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
				to: '/en/guide/'
			},
			{
				title: 'Custom themes',
				icon: 'painter-palette',
				to: '/en/guide/themes/'
			},
			{
				title: 'Contributing',
				icon: 'heart',
				to: '/en/contributing/'
			},
			{
				title: 'Roadmap',
				icon: 'clock',
				to: '/en/roadmap/'
			},
			{
				title: 'UI Components',
				icon: 'dashboard',
				group: 'components',
				items: [
					{
						title: 'SvgIcon',
						to: '/en/components/svg-icon/'
					},
					{
						title: 'LangBtn',
						to: '/en/components/lang-btn/'
					},
					{
						title: 'DatePicker',
						to: '/en/components/date-picker/'
					},
					{
						title: 'DataList',
						to: '/en/components/data-list/'
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
						to: '/en/directives/debounce/'
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
	},
	codepen: {
		invertColors: 'Invert colors',
		codepen: 'See the example on Codepen',
		github: 'See the example on Github',
		code: 'See the source code'
	}
};

export default en;
