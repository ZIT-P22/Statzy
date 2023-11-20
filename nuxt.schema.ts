import { NuxtAwesomeAppConfig } from './app.config'

export default defineNuxtSchema({
  appConfig: {
    awesome: {
      name: 'Statzy-P22',
      description:
        'Statzy is a web application that allows you to monitor your website statistics and analytics in real-time using Vue.js, Nuxt.js, TailwindCSS, and Firebase.',
      project: {
        links: {
          github: 'https://github.com/ZIT-P22/statzy',
        },
      },
      layout: {
        page: {
          navbar: {
            menus: [],
          },
        },
        footer: {
          year: 2023,
        },
        welcome: {
          title: 'Statzy-P22',
          disableInfoReplaceIndexInWelcomePage: true,
        },
      },
      author: {
        name: 'P-22',
        links: {
          github: 'https://github.com/ZIT-P22',
          medium: '',
          website: '',
        },
      },
    } as NuxtAwesomeAppConfig,
  },
})
