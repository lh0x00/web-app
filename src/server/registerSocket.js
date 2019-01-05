import http from 'http'
import SocketIO from 'socket.io'
import config from 'config'
import authSocket from 'server/authSocket'

const { socket: socketConfig } = config

type TRegisterSocket = {
  server: any,
}

function registerSocket({ server }: TRegisterSocket): any {
  const ws = http.Server(server)

  const io = SocketIO(ws, {
    path: socketConfig.path,
    pingInterval: socketConfig.pingInterval,
    pingTimeout: socketConfig.pingTimeout,
    cookie: socketConfig.cookie,
  })

  authSocket({ server, io })

  io.on('connection', (socket) => {
    console.log('connected')

    socket.on('join room', (room) => {
      socket.join(room)
      socket.in(room).emit('message', `welcome new user to room ${room}`)
      socket.on('message', (message) => {
        console.log({ room, message })
        socket.to(room).emit('message', message)
      })
    })

    socket.on('disconnecting', () => {
      console.log('disconnecting')
    })
  })

  io.of('/example').on('connection', (socket) => {
    console.log('[example]: connected')

    socket.on('join room', (room) => {
      socket.join(room)
      socket.in(room).emit('message', `welcome new user to room ${room}`)
      socket.on('message', (message) => {
        console.log('example', { room, message })
        socket.to(room).emit('message', message)
      })
    })

    socket.on('disconnecting', () => {
      console.log('[example]: disconnecting')
    })
  })

  io.listen(socketConfig.port)

  return server
}

export default registerSocket
