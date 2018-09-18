import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  fileId: String,
  description: String,
}, {
  versionKey: false,
})

export default schema
