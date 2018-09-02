import dotenv from 'dotenv'
import express from 'express'
import next from 'next'
import config from 'config'
import isProd from 'utils/isProduction'
import {
  connectDatabase,
  applyMiddleware,
  handleSecure,
  initSession,
  bindPublic,
  registerApi,
  bindRoutes,
} from 'server'

dotenv.config()

const port = parseInt(process.env.PORT, 10) || config.server.port

const app = next({ dev: !isProd })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  connectDatabase({ server })

  applyMiddleware({ server })

  handleSecure({ server })

  initSession({ server })

  bindPublic({ server })

  registerApi({ server })

  bindRoutes({ server, app })

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) throw err
    /* eslint-disable-next-line no-console */
    console.log(`> http://localhost:${port}`)
  })
})
