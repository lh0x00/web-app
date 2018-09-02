import http from 'http'
import socketIO from 'socket.io'

type TRegisterSocket = {
  server: any,
}

function registerSocket({ server }: TRegisterSocket): any {
  const io = socketIO(http.Server(server), {
    path: '/ws',
    serveClient: false,
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false,
  })

  return server
}

export default registerSocket
