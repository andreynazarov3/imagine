// const preloadScript = require('./assets/js/preload.js')

module.exports = {

  /*
   ** Headers of the page
   */
  head: {
    __dangerouslyDisableSanitizers: ['script'],
    title: 'imagine-landing',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js'
      }, {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TimelineMax.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/plugins/ScrollToPlugin.min.js'
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/gsap-drawsvg@1.0.0/drawsvgmin.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/shortcuts/inview.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.min.js'
      }
      
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },

  /*
   ** Build configuration
   */
  build: {
    vendor: [],
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
