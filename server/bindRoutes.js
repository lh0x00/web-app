import renderPage from 'server/renderPage'

const allRoutes = {
  '/': {
    methods: ['POST', 'GET'],
    handler: ({
      app, request, response, next,
    }) => renderPage({
      app, page: '/Home', request, response, query: {}, next,
    }),
  },
}

const validateMethod = (
  request: string,
  allows: string[],
): boolean => allows.includes(request)

type TBindRoutes = {
  server: any,
  app: any,
}

function bindRoutes({ server, app }: TBindRoutes): any {
  const pathAndConfigRoutes = Object.entries(allRoutes)
  pathAndConfigRoutes.forEach(([path, config]) => {
    const { methods, handler } = config

    // handle when methods empty or not set
    if (!Array.isArray(methods) || methods.length === 0) {
      // open listen this `path` on `GET` method
      server.get(path, (request, response, next) => handler({
        app, request, response, next,
      }))

      return true
    }

    // open listen this `path`, allow all methods
    server.use(path, (request, response, next) => {
      const { method } = request

      // validate method in allow list
      const isAllowMethod = validateMethod(method, methods)
      if (isAllowMethod) {
        // call handler to render page
        return handler({
          app, request, response, next,
        })
      }

      return next()
    })

    return true
  })

  return server
}

export default bindRoutes
