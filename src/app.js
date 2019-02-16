import dotenv from 'dotenv'
import express from 'express'
import next from 'next'
import config from 'config'
import isProd from 'lib/utils/isProduction'
import { REGEXP } from 'lib/enums'
import bindGlobalFunctions from 'server/bindGlobalFunctions'
import connectDatabase from 'server/connectDatabase'
import applyMiddleware from 'server/applyMiddleware'
import handleSecure from 'server/handleSecure'
import initSession from 'server/initSession'
import bindPublic from 'server/bindPublic'
import registerApi from 'server/registerApi'
import registerSocket from 'server/registerSocket'
import bindRoutes from 'server/bindRoutes'

bindGlobalFunctions()

dotenv.config()

const port = parseInt(process.env.PORT, 10) || config.server.port

const app = next({ dev: !isProd, dir: !isProd ? './src' : './dist' })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  connectDatabase({ server })

  applyMiddleware({ server })

  handleSecure({ server })

  initSession({ server })

  bindPublic({ server })

  registerApi({ server })

  registerSocket({ server })

  bindRoutes({ server, app })

  server.get('*', (request, response) => {
    const isNextPath = REGEXP.NEXT_PATH.test(request.url)
    if (isNextPath) {
      return handle(request, response)
    }
  })

  server.listen(port, (error) => {
    if (error) throw error
    /* eslint-disable-next-line no-console */
    console.log(`> ready on: http://localhost:${port}`)
  })
})
