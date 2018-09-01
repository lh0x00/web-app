import dotenv from 'dotenv'
import express from 'express'
import next from 'next'
import { parse } from 'url'
import applyMiddleware from 'server/applyMiddleware'
import initSession from 'server/initSession'
import registerApi from 'server/registerApi'
import bindRoutes from 'server/bindRoutes'

// init config
dotenv.config()

// host infomation
const port = parseInt(process.env.PORT, 10) || 3000
const isProd = process.env.MODE === 'production'

console.log({ isProd, env: process.env })

// init app
const app = next({ dev: !isProd })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  applyMiddleware({ server })

  initSession({ server })

  registerApi({ server })

  // bindRoutes({ server, app })

  // server.get('*', (req, res) => handler(req, res))
  const routes = {
    '/': { page: '/Home' },
  }
  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query = {} } = parsedUrl
    const route = routes[pathname]
    console.log({ route, pathname })
    if (route) {
      return app.render(req, res, route.page, query)
    }
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    /* eslint-disable-next-line no-console */
    console.log(`> Ready on http://localhost:${port}`)
  })
})
