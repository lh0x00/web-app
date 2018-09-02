import config from 'config'
import session from 'express-session'

type TInitSession = {
  server: any,
}

function initSession({ server }: TInitSession): any {
  server.use(session({
    name: config.session.name,
    secret: config.session.secret,
    resave: false,
    unset: 'destroy',
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 1000,
    },
  }))
  return server
}

export default initSession
