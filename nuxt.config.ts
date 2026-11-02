import svgLoader from 'vite-svg-loader'
import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
  ],
  vite: {
    plugins: [svgLoader()],
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: ['@unocss/reset/tailwind.css'],

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: false,
      routes: [
        '/',
        '/tech-career',
        '/tech-career/analytics',
        '/tech-career/frontend',
        '/tech-career/backend',
        '/tech-career/devops',
        '/tech-career/qa',
        '/tech-career/dba',
        '/tech-career/design',
        '/tech-career/so',
        '/tech-career/lead',
        '/growth-cases',
        '/growth-cases/rostyslav',
        '/growth-cases/sofia',
        '/growth-cases/bogdan',
        '/growth-cases/valentine',
      ],
      ignore: ['/hi'],
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [{ rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
      ],
    },
  },

  pwa,

  devtools: {
    enabled: false,
  },
})
