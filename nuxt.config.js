export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hicham Taha | Senior Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portfolio for full stack development specialist Hicham Taha' },
	  { name: 'author', content: 'Hicham Akira Taha'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
	  { rel: 'stylesheet', href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" },
	  { rel: 'stylesheet', href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css" },
	  { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700" },
	  { rel: 'stylesheet', href: "https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" },
    ],
	script: [
        { type: 'text/javascript', src: 'https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js' },
	]
  },
  target: 'static',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
	//   '~assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
	  // With options
	  ['@nuxtjs/vuetify', { customVariables: ['~assets/scss/main.scss'] }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
