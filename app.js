/**
 * name: web-front-starter
 * version: 0.1.0
 * author: Lam Hieu <lamhieu.vk@gmail.com>
 */

import express from 'express'
import bodyParser from 'body-parser'
import next from 'next'
import session from 'express-session'
import apiRoutes from 'api/routes'

const port = parseInt(process.env.port, 10) || 3000
const dev = process.env.mode !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.use(session({
    name: 'sid',
    secret: 'super-secret-key',
    resave: false,
    unset: 'destroy',
    saveUninitialized: false,
    cookie: { maxAge: 60 * 1000 },
  }))

  server.use('/api', apiRoutes)

  server.get('/', (req, res) => app.render(req, res, '/Home', req.query))

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) throw err
    /* eslint-disable-next-line no-console */
    console.log(`> Ready on http://localhost:${port}`)
  })
})
