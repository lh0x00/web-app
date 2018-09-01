import compression from 'compression'
import bodyParser from 'body-parser'
import isProd from 'utils/isProduction'

type TApplyMiddleWare = {
  server: any,
}

function applyMiddleware({ server }: TApplyMiddleWare): any {
  server.use([
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
  ])

  if (isProd) {
    server.use(compression())
  }

  return server
}

export default applyMiddleware
