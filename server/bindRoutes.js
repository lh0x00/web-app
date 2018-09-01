import renderPage from 'server/renderPage'

const METHOD_ALLOW = ['get', 'post']
const METHOD_DEFAULT = ['get']

const allRoutes = {
  '/': {
    methods: ['post', 'get'],
    handler: ({
      app, request, response, next,
    }) => renderPage({
      app, page: '/Home', request, response, query: {}, next,
    }),
  },
}

type TBindRoutes = {
  server: any,
  app: any,
}

function bindRoutes({ server, app }: TBindRoutes): any {
  const pathAndConfigRoutes = Object.entries(allRoutes)
  pathAndConfigRoutes.forEach(([path, config]) => {
    const { methods, handler } = config

    const onRoute = (request, response, next) => handler({
      app, request, response, next,
    })

    const isMethodInvalid = !Array.isArray(methods) || methods.length === 0
    const listMethods = isMethodInvalid ? METHOD_DEFAULT : methods

    listMethods
      .filter(m => METHOD_ALLOW.includes(m))
      .forEach(m => server[m](path, onRoute))
  })

  return server
}

export default bindRoutes
