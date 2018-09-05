import http from 'http'
import SocketIO from 'socket.io'
import authSocket from 'server/authSocket'

type TRegisterSocket = {
  server: any,
}

function registerSocket({ server }: TRegisterSocket): any {
  const ws = http.Server(server)

  const io = SocketIO(ws, {
    path: '/ws',
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false,
  })

  authSocket({ server, io })

  io.on('connection', (socket) => {
    console.log('connected')

    socket.on('join room', (room) => {
      socket.join(room)
      socket.in(room).emit('message', `welcome new user to room ${room}`)
      socket.on('message', (message) => {
        socket.to(room).emit('message', message)
      })
    })

    socket.on('disconnecting', () => {
      console.log('disconnecting')
    })
  })

  io.listen(3001)

  return server
}

export default registerSocket
