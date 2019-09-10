import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin';
import nodeExternals from 'webpack-node-externals';
import pkg from './package';
import authConfig from './config/auth';

require('dotenv').config();

const isDevelopment = process.env.NODE_ENV === 'development';

export default {
  mode: 'universal',
  server: {
    port: isDevelopment ? 3000 : process.env.$PORT
  },
  head: {
    title: pkg.title,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'icon', sizes: '16x16 32x32 64x64', href: '/favicon.ico' },
      {
        rel: 'icon', type: 'image/png', sizes: '196x196', href: '/favicon-192.png'
      },
      {
        rel: 'icon', type: 'image/png', sizes: '160x160', href: '/favicon-160.png'
      },
      {
        rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96.png'
      },
      {
        rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicon-64.png'
      },
      {
        rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png'
      },
      {
        rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png'
      },
      { rel: 'apple-touch-icon', href: '/favicon-57.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-180.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon-152.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon-144.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon-120.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon-114.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon-76.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon-72.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon-60.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons' }
    ]
  },
  env: {
    intercomKey: isDevelopment ? null : process.env.INTERCOM_KEY
  },

  router: {
    mode: 'history'
  },

  loading: { color: '#fff' },

  css: ['~/assets/style/app.scss', '~/assets/vuetify/app.styl'],


  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    ['nuxt-i18n', {
      vueI18nLoader: false,
      baseUrl: isDevelopment ? 'http://localhost:3000' : 'https://work-for-impact-app.herokuapp.com',
      seo: !isDevelopment,
      locales: [
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en-us.js'
        }
      ],
      defaultLocale: 'en',
      strategy: 'prefix_except_default',
      lazy: true,
      langDir: './locales/',
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        alwaysRedirect: true,
        fallbackLocale: 'en',
        seo: false
      }
    }]
  ],

  axios: {
    baseURL: isDevelopment ? 'http://localhost:3001/api/v1' : 'https://work-for-impact-web.herokuapp.com'
  },

  plugins: ['@/plugins/vuetify', '@/plugins/vee-validate', '@/plugins/axios', '@/plugins/vueIntercom'],

  auth: {
    ...authConfig,
    plugins: ['~/plugins/auth']
  },

  build: {
    transpile: ['vuetify/lib'],
    devtools: true,
    plugins: [new VuetifyLoaderPlugin()],

    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }

      if (ctx.isServer) {
        // eslint-disable-next-line no-param-reassign
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ];
      }
    }
  }
};
