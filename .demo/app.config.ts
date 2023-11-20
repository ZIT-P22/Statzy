// see all availabe configs here: https://github.com/viandwi24/nuxt3-awesome-starter/blob/v2/app.config.ts
export default defineAppConfig({
  awesome: {
    name: 'Statzy-P22',
    description:
      'Statzy-P22 is a web application that provides a dashboard for the user to view their statistics. The application is built using Nuxt.js and Tailwind CSS',
    author: {
      name: 'P-22',
      links: {
        github: 'https://github.com/ZIT-P22',
        medium: '',
        website: '',
      },
    },
    layout: {
      welcome: {
        // if false, in index page will show alert "create file "~/pages/index.vue" to replace this page"
        disableInfoReplaceIndexInWelcomePage: false,
        secondaryActionButton: {
          title: 'See Github',
        }
      }
    },
    project: {
      links: {
        github: 'https://github.com/ZIT-P22/statzy',
      },
    },
  },
})
