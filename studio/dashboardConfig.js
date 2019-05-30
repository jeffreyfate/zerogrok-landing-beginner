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
                  buildHookId: '5cefef4acd239c321d8fa12b',
                  title: 'Sanity Studio',
                  name: 'zerogrok-landing-beginner-studio',
                  apiId: '747d8801-84cc-431e-800f-509eb8bc5fb6'
                },
                {
                  buildHookId: '5cefef4ae0c0ec5b94f9d4b3',
                  title: 'Landing pages Website',
                  name: 'zerogrok-landing-beginner',
                  apiId: '62064ab1-db0f-49f7-b423-3081710654dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeffreyfate/zerogrok-landing-beginner',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://zerogrok-landing-beginner.netlify.com', category: 'apps'}
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
