
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  //  '@/assets/scss/style.scss'
  css: [
    '@/assets/SCSS/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',

    // // Simple usage
    'qonfucius-nuxt-fontawesome',
    // // With options
    ['qonfucius-nuxt-fontawesome', { componentName: 'fa-icon', packs: ['faGithub', 'faFontAwesome'], includeCss: true }],
    
    // // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {

    // extractCSS: true,

    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  fontAwesome: {
    packs: [
      {
        // fas
        package: '@fortawesome/free-solid-svg-icons',
        icons: ['faUsers', 'faUserPlus', 'faCameraRetro', 'faLaptop', 'faEnvelopeSquare', 'faClipboardList',   
        'faChartPie', 'faTabletAlt',
        'faMedal', 'faAd','faMugHot','faSpinner','faCogs'],
      },
      {
        // fab
        package: '@fortawesome/free-brands-svg-icons',
        icons: ['faGithub', 'faFontAwesome', 'faVuejs','faFontAwesomeFlag', 'faGitSquare','faCcAmex']
      },
      {
        // far
        package: '@fortawesome/free-regular-svg-icons',
        icons: ['faSun'],
      },
    ],

  //   // component: 'fa', 
  //   // imports: [
  //   //   //import whole set
  //   //   {
  //   //     set: '@fortawesome/free-solid-svg-icons',
  //   //     icons: ['fas']
  //   //   },
  //   //   //import 2 icons from set 
  //   //   // please note this is PRO set in this example, 
  //   //   // you must have it in your node_modules to actually import
  //   //   {
  //   //     set: '@fortawesome/pro-regular-svg-icons',
  //   //     icons: ['faAdjust', 'faArchive']
  //   //   }
  //   // ]
  // },

  // fontawesome: {
  //   packs: [
  //     {
  //       package: '@fortawesome/free-brands-svg-icons',
  //       icons: ['faGithub', 'faFontAwesome', 'faCcVisa'],
  //     },
  //   ],
  //   imports: [
  //       {
  //         set: '@fortawesome/pro-regular-svg-icons',
  //         icons: ['faAdjust']
  //       },
  //       {
  //         set: '@fortawesome/free-solid-svg-icons',
  //         icons: ['fas']
  //       },
  //   ],
  },
}