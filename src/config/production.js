import path from 'path'

export default {
  server: {
    hostname: 'localhost',
    port: 4000,
  },
  db: {
    // url: 'mongodb://localhost:4010,localhost:4011/media-app?replicaSet=rs0',
    name: 'media-app',
    replicaSet: 'rs0',
    replSet: [
      { ip: 'localhost', port: 4010, path: path.resolve('../../data/db/4010') },
      { ip: 'localhost', port: 4011, path: path.resolve('../../data/db/4011') },
    ],
  },
  session: {
    name: 's-id',
    secret: 'media-app-session',
  },
  socket: {
    hostname: 'localhost',
    port: 4001,
    path: '/ws',
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: 'io-id',
  },
}
