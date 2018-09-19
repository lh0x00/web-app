import validOriginOfRequest from 'lib/utils/validOriginOfRequest'

type TAuthSocket = {
  io: any,
}

function authSocket({ io }: TAuthSocket): any {
  io.use((socket: TSocket, next: Function) => {
    const { handshake } = socket || {}
    const { headers } = handshake || {}
    const { origin } = headers || {}
    const isValidHost = validOriginOfRequest(origin)
    if (!isValidHost) {
      return false
    }

    next()
    return true
  })

  return io
}

export default authSocket
