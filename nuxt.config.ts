import { checker } from 'vite-plugin-checker'

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devServer: {
		host: '0.0.0.0'
	},
	devtools: { enabled: true },
	modules: [
		'@nuxt/eslint',
		'@nuxt/ui',
		'@nuxtjs/mdc',
		'@nuxtjs/i18n',
		'@nuxtjs/supabase'
	],
	css: ['~/assets/css/main.css', '~/assets/scss/main.scss'],
	vite: {
		plugins: [
			checker({
				eslint: {
					useFlatConfig: true,
					lintCommand: 'eslint "./**/*.{ts,js,vue}"'
				},
				stylelint: {
					lintCommand: 'stylelint "**/*.{vue,css,scss}"'
				}
			})
		],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "@/assets/scss/general/variables.scss" as *; @use "@/assets/scss/abstracts/mixins.scss" as *;`
				}
			}
		}
	},
	runtimeConfig: {
		public: {}
	},
	i18n: {
		strategy: 'prefix_except_default',
		locales: [
			{
				code: 'en',
				name: 'English',
				language: 'en',
				file: 'en.json'
			},
			{
				code: 'ru',
				name: 'Русский',
				language: 'ru',
				file: 'ru.json'
			}
		],
		defaultLocale: 'ru',
		detectBrowserLanguage: {
			useCookie: true,
			cookieCrossOrigin: true,
			redirectOn: 'root'
		}
	},
	supabase: {
		redirect: false,

		redirectOptions: {
			login: '/auth/sign-in/',
			callback: '/auth/confirm/',
			include: undefined,
			exclude: ['/auth/sign-up/'],
			saveRedirectToCookie: false
		}
	}
})
