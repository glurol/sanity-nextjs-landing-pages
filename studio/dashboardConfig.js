export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f988366a9211300b1ccbe33',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7wkvikur',
                  apiId: '88339f91-ac02-48d0-b076-66227d5dbe37'
                },
                {
                  buildHookId: '5f9883660ba4630b0be8cf2c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-njsi7v7e',
                  apiId: '6ac73ef1-f1aa-44b4-9b3e-d544a6e17443'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/glurol/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-njsi7v7e.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
