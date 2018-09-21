import apiRoutes from 'api'

type TRegisterApi = {
  server: any,
}

function registerApi({ server }: TRegisterApi): any {
  server.use('/api', apiRoutes)
  return server
}

export default registerApi
