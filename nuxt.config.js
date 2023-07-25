// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  modules: ["@nuxtjs/tailwindcss", "@ant-design-vue/nuxt"],
  buildModules: [
    // Other build modules
    "@nuxtjs/dotenv",
    "nuxt-vue-draggable",
  ],
});
