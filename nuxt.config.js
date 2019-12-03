export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  //  '@/assets/scss/style.scss'
  css: ["@/assets/SCSS/style.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  // plugins: [],
  plugins: [
    { src: "~/plugins/slick.js", ssr: false },
    "~/plugins/vuelidate.js",
    "~/plugins/vue-tables.js",

    // "~/plugins/fontawesome-free-5.11.2/",

    // {
    //   src: "~/plugins/dist/allseasons-promociones/allseasons-promociones.js",
    //   ssr: false
    // },
    // { src: "~/plugins/inspinia.js", ssr: false },
    { src: "~/plugins/vue-notification.js", ssr: false },
    { src: "~plugins/vue-select.js", ssr: false },
    { src: "~/plugins/amCharts.js", ssr: false }
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Simple usage
    "@nuxtjs/moment",
    // With options
    [
      "@nuxtjs/moment",
      {
        /* module options */
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",

    // //
    // '@nuxtjs/font-awesome',
    // // Simple usage
    "qonfucius-nuxt-fontawesome",
    // // With options
    [
      "qonfucius-nuxt-fontawesome",
      {
        componentName: "fa-icon",
        packs: ["faGithub", "faFontAwesome"],
        includeCss: true
      }
    ],

    // Para select2
    "nuxt-vue-select",

    // With options
    [
      "nuxt-vue-select",
      {
        /* module options */
      }
    ],

    // // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    // extractCSS: true,

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  fontAwesome: {
    packs: [
      {
        // fas
        package: "@fortawesome/free-solid-svg-icons",
        icons: [
          "faAngleDown",
          "faLock",
          "faUserCog",
          "faSignOutAlt",
          "faUsers",
          "faUserPlus",
          "faCameraRetro",
          "faLaptop",
          "faEnvelopeSquare",
          "faClipboardList",
          "faChartPie",
          "faTabletAlt",
          "faMedal",
          "faAd",
          "faMugHot",
          "faSpinner",
          "faCogs"
        ]
      },
      {
        // fab
        package: "@fortawesome/free-brands-svg-icons",
        icons: [
          "faGithub",
          "faFontAwesome",
          "faVuejs",
          "faFontAwesomeFlag",
          "faGitSquare",
          "faCcAmex"
        ]
      },
      {
        // far
        package: "@fortawesome/free-regular-svg-icons",
        icons: ["faSun", "faEnvelope"]
      }
    ]
  },

  // Configuración del moment español
  moment: {
    locales: ["es"]
  }
};
