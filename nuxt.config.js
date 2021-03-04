const config = require('./config')

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Coding Blocks - V2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://unpkg.com/@coding-blocks/motley@2.8.0/dist/coding-blocks/app.min.css',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/api.js', '~/plugins/repositories.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios'],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: config.axios,

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  server: {
    host: '0.0.0.0',
  },
}
