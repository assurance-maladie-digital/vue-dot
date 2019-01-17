module.exports = {
	serviceWorker: true,
	head: [
		[
			'link',
			{
				rel: 'apple-touch-icon',
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
			'link',
			{
				rel: 'mask-icon',
				href: '/safari-pinned-tab.svg',
				color: '#01579b'
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
				content: '#01579b'
			}
		],
		[
			'meta',
			{
				name: 'theme-color',
				content: '#01579b'
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
				src: 'https://js.sentry-cdn.com/6d4a333e85304865ae61bf8ad39d3805.min.js',
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
			description: 'Bibliothèque de composants officielle de la CNAM',
		}
	},
	plugins: ['@vuepress/i18n-ui']
};
