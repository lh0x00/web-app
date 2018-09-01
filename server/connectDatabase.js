import config from 'config'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const connectDatabase = async (
  db?: string = config.db.url,
): boolean => {
  const status = await mongoose
    .connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log('[db] connection to database successfully') // eslint-disable-line no-console
      return true
    })
    .catch(() => {
      console.log('[db] connection occurred database error') // eslint-disable-line no-console
      return false
    })

  return status
}

export default connectDatabase

