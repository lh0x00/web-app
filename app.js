import dotenv from 'dotenv'
import express from 'express'
import next from 'next'
import config from 'config'
import connectDatabase from 'server/connectDatabase'
import applyMiddleware from 'server/applyMiddleware'
import handleSecure from 'server/handleSecure'
import initSession from 'server/initSession'
import registerApi from 'server/registerApi'
import bindRoutes from 'server/bindRoutes'
import isProd from 'utils/isProduction'

dotenv.config()

const port = parseInt(process.env.PORT, 10) || config.server.port

const app = next({ dev: !isProd })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  connectDatabase()

  const server = express()

  applyMiddleware({ server })

  handleSecure({ server })

  initSession({ server })

  registerApi({ server })

  bindRoutes({ server, app })

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) throw err
    /* eslint-disable-next-line no-console */
    console.log(`> http://localhost:${port}`)
  })
})
