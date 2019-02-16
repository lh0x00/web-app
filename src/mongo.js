import dotenv from 'dotenv'
import { ReplSet } from 'mongodb-topology-manager'
import bindGlobalFunctions from 'server/bindGlobalFunctions'

bindGlobalFunctions()

dotenv.config()

const { db: dbConfig } = WebApp.config || {}
const { replicaSet, replSet: replSetList } = dbConfig || {}

const replSetConfig = replSetList.map(({ port, ip, path }) => ({
  options: {
    port,
    bind_ip: ip,
    dbpath: path,
  },
}))

const server = new ReplSet('mongod', replSetConfig, { replSet: replicaSet })

const init = async () => {
  await server.purge()
  await server.start()
  // eslint-disable-next-line no-console
  console.log('[mongo] database was started successfully')
}

init()
