import { Router } from 'express'
import renderPage from 'server/renderPage'

const METHOD_ALLOW = ['get', 'post']
const METHOD_DEFAULT = ['get']

const allRoutes = {
  '/': {
    methods: ['post', 'get'],
    handler: ({
      app, request, response, next,
    }) => renderPage({
      app,
      page: '/Home',
      request,
      response,
      query: {},
      next,
    }),
  },
  '/other': {
    methods: ['post', 'get'],
    handler: ({
      app, request, response, next,
    }) => renderPage({
      app,
      page: '/Home',
      request,
      response,
      query: {},
      next,
    }),
  },
  '/login': {
    methods: ['post', 'get'],
    handler: ({
      app, request, response, next,
    }) => renderPage({
      app,
      page: '/Login',
      request,
      response,
      query: {},
      next,
    }),
  },
}

type TBindRoutes = {
  server: any,
  app: any,
}

function bindRoutes({ server, app }: TBindRoutes): any {
  const router = Router()

  const pathAndConfigRoutes = Object.entries(allRoutes)
  pathAndConfigRoutes.forEach(([path: string, config: object]) => {
    const { methods, handler } = config

    const onRoute = (request: any, response: any, next: any): any => handler({
      app,
      request,
      response,
      next,
    })

    const isMethodInvalid = !Array.isArray(methods) || methods.length === 0
    const listMethods = isMethodInvalid ? METHOD_DEFAULT : methods

    listMethods.filter(m => METHOD_ALLOW.includes(m)).forEach(m => router[m](path, onRoute))
  })

  server.use(router)

  return server
}

export default bindRoutes
