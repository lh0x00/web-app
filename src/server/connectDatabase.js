import config from 'config'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise

type TConnectDatabase = {
  server: any,
  db?: string,
}

const connectDatabase = async (
  {
    server, // eslint-disable-line no-unused-vars
    db = config.db.url,
  }: TConnectDatabase,
): boolean => {
  const status = await mongoose
    .connect(db, {
      useNewUrlParser: true,
      autoIndex: false,
    })
    .then(() => {
      console.log('[db] connection to database successfully') // eslint-disable-line no-console
      return true
    })
    .catch(() => {
      console.error('[db] connection occurred database error') // eslint-disable-line no-console
      return false
    })

  return status
}

export default connectDatabase
