import compression from 'compression'
import bodyParser from 'body-parser'

type TApplyMiddleWare = {
  server: any,
}

function applyMiddleware({ server }: TApplyMiddleWare): any {
  server.use([compression(), bodyParser.json()])
  return server
}

export default applyMiddleware
