import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  path: String,
}, {
  versionKey: false,
})

export default schema
