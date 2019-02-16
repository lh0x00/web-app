import mongoose from 'mongoose'
import parseMongoUrl from 'lib/utils/parseMongoUrl'

mongoose.Promise = global.Promise

type TConnectDatabase = {
  server: any,
  db?: string,
}

const connectDatabase = async (
  {
    server, // eslint-disable-line no-unused-vars
    db,
  }: TConnectDatabase,
): boolean => {
  const localDb = parseMongoUrl(WebApp.config.db)

  const status = await mongoose
    .connect(db || localDb, {
      useNewUrlParser: true,
      autoIndex: false,
    })
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('[db] connection to database successfully')
      return true
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.error('[db] connection occurred database error')
      return false
    })

  return status
}

export default connectDatabase
