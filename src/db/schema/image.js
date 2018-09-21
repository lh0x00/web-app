import { Schema } from 'mongoose'

const schema = new Schema({
  fileId: String,
  description: String,
}, {
  versionKey: false,
})

export default schema
