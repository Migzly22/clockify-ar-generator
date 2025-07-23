// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Clockify AR-Generator",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  ui: {
      theme: {
          colors: [
              'primary',
              'secondary',
              'success',
              'info',
              'warning',
              'error',
              'neutral',
              'violet',
              'orange',
              'purple'
          ]
      }
  },
  imports: {
      dirs: [
          'composables',
          'composables/*/index.{ts,js,mjs,mts}',
          'composables/**',
          'stores'
      ]
  },
})