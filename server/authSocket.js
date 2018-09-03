import { parse } from 'url'
import config from 'config'

function validOrigin(origin: string): boolean {
  const { server } = config
  const { hostname, port } = parse(origin)

  return hostname === server.hostname && port === server.port
}

type TAuthSocket = {
  io: any,
}

function authSocket({ io }: TAuthSocket): any {
  io.use((socket: TSocket, next: Function) => {
    const { handshake } = socket
    const { headers } = handshake

    const isValidHost = validOrigin(headers.origin)
    if (!isValidHost) {
      return next(new Error('authentication error'))
    }

    next()
  })

  return io
}

export default authSocket
