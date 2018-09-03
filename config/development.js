export default {
  server: {
    hostname: 'localhost',
    port: 3000,
  },
  db: {
    url: 'mongodb://localhost:27017/app-starter',
  },
  session: {
    name: 'sid',
    secret: 'media-app-session',
  },
  socket: {
    hostname: 'localhost',
    port: 3001,
  },
}
