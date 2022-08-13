export default {
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/scss/main.scss'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  env: {
    backUrl: process.env.BACK_URL,
    GEO_API_URL: process.env.GEO_API_URL,
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/form-input',
      '~/components/forms',
      '~/components/partials',
      '~/components/utils',
    ],
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      'Fugaz One': true,
      Inter: true,
    },
    download: true,
    stylePath: 'css/fonts.css',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BACK_URL,
  },
  auth: {
    // cookie: {
    //   options: {
    //     maxAge: 86,
    //   },
    // },
    redirect: {
      login: '/connexion',
      logout: '/',
      callback: '/connexion',
      home: '/trajets/search',
    },

    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          maxAge: 86000,
        },
        user: {
          property: 'user',
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/auth/user', method: 'get' },
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
