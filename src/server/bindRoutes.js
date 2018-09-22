import { Router } from 'express'
import routes, { METHOD_ALLOW, METHOD_DEFAULT } from 'routes'

type TBindRoutes = {
  server: any,
  app: any,
}

function bindRoutes({ server, app }: TBindRoutes): any {
  const router = Router()

  const pathAndConfigRoutes = Object.entries(routes)
  pathAndConfigRoutes.forEach(([path: string, config: object]) => {
    const { methods, handler } = config

    const onRoute = (
      request: any,
      response: any,
      next: any,
    ): any => handler({
      app,
      request,
      response,
      next,
    })

    const isMethodInvalid = !Array.isArray(methods) || methods.length === 0
    const listMethods = isMethodInvalid ? METHOD_DEFAULT : methods
    listMethods
      .filter(m => METHOD_ALLOW.includes(m))
      .forEach(m => router[m](path, onRoute))
  })

  server.use(router)

  return server
}

export default bindRoutes
