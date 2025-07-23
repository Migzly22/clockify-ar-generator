// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "War Generator",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  css : [
    '/assets/css/main.css'
  ],
  devServer: {
    port: 3001  
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],

  imports: {
      dirs: [
          'composables',
          'composables/*/index.{ts,js,mjs,mts}',
          'composables/**',
          'contantants',
          'contantants/*/index.{ts,js,mjs,mts}',
          'contantants/**',
          'stores'
      ]
  },
})