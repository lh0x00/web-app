type TBindRoutes = {
  server: any,
  app: any,
}

function bindRoutes({ server, app }: TBindRoutes): any {
  server.get('/', (req, res) => app.render(req, res, '/Home', req.query))
  return server
}

export default bindRoutes
