import dotenv from 'dotenv'
import express from 'express'
import next from 'next'
import applyMiddleware from 'server/applyMiddleware'
import initSession from 'server/initSession'
import registerApi from 'server/registerApi'
import bindRoutes from 'server/bindRoutes'
import isProd from 'utils/isProduction'

dotenv.config()

const port = parseInt(process.env.PORT, 10) || 3000

const app = next({ dev: !isProd })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  applyMiddleware({ server })

  initSession({ server })

  registerApi({ server })

  bindRoutes({ server, app })

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) throw err
    /* eslint-disable-next-line no-console */
    console.log(`> ready on http://localhost:${port}`)
  })
})
