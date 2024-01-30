// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      "@pinia/nuxt",
      { autoImports: ["defineStore", "acceptHMRUpdate"],},
    ],
    "@nuxtjs/tailwindcss",
    "@vueuse/motion/nuxt",
    "@nuxtjs/google-fonts",
  ],
  imports: { dirs: ['store'] },
  googleFonts: {
    families: {
      "Rajdhani": [300,400,500,600]
    }
  }
})