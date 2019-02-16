import dotenv from 'dotenv'
import Mongod from 'mongod'
import bindGlobalFunctions from 'server/bindGlobalFunctions'

bindGlobalFunctions()

dotenv.config()

const port = parseInt(process.env.PORT, 10) || 27017

const server = new Mongod(port)

server.open().then((error) => {
  if (error) {
    throw error
  }
  // eslint-disable-next-line no-console
  console.log('[mongo] database was started successfully')
})
