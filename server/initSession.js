import session from 'express-session'

type TInitSession = {
  server: any,
}

function initSession({ server }: TInitSession): any {
  server.use(session({
    name: process.env.SESSION_ID,
    secret: process.env.SESSION_KEY,
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
