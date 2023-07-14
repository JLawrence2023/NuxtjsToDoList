// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  buildModules: [
    // Other build modules
    "@nuxtjs/dotenv",
    "nuxt-vue-draggable",
  ],
});
