export default {
  server: {
    hostname: 'localhost',
    port: 3000,
  },
  db: {
    url: 'mongodb://localhost:27017/app-starter',
  },
  session: {
    name: 's-id',
    secret: 'media-app-session',
  },
  socket: {
    hostname: 'localhost',
    port: 3001,
    path: '/ws',
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: 'io-id',
  },
}
