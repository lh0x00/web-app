import session from 'express-session'

type TInitSession = {
  server: any,
}

function initSession({ server }: TInitSession): any {
  server.use(
    session({
      name: WebApp.config.session.name,
      secret: WebApp.config.session.secret,
      resave: true,
      unset: 'destroy',
      saveUninitialized: false,
      cookie: {
        maxAge: 60 * 1000,
      },
    }),
  )
  return server
}

export default initSession
