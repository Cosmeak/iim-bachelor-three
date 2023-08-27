// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			link: [
				{
					rel: 'icon',
					type: 'image/png',
					href: '/logo-black.png',
				}
			]
		}
	},
	modules: ["@nuxtjs/strapi", '@nuxtjs/tailwindcss'],
	strapi: {
		url: process.env.STRAPI_URL || 'http://localhost:1337',
		prefix: "/api",
		version: "v4",
	},
	tailwindcss: {
		config: {
			theme: {
				extend: {
					colors: {
						'secondary': {
							'lighten': '#D6E3FF',
							'light': '#A9C7FF',
							DEFAULT: '#2277DD',
							'dark': '#00468C',
							'darken': '#003063',
						},
						'light': '#F0F8FF',
						'dark': '#24231E',
					},
				}
			}
		}
	}
});