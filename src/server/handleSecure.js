type THandleSecure = {
  server: any,
}

function handleSecure({ server }: THandleSecure): any {
  server.disable('x-powered-by')

  return server
}

export default handleSecure
