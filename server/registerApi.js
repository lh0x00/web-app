import apiRoutes from 'api/routes'

type TRegisterApi = {
  server: any,
}

function registerApi({ server }: TRegisterApi): any {
  server.use('/api', apiRoutes)
  return server
}

export default registerApi
