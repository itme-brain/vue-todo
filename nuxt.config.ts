// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true
  },
// https://nuxt.com/modules
  modules: [
    '@nuxtjs/tailwindcss'
  ],
})
