import { Schema } from 'mongoose'

const schema = new Schema({
  path: String,
}, {
  versionKey: false,
})

export default schema
