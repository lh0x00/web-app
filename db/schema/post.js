import mongoose from 'mongoose'
import imageSchema from 'db/schema/image'

const schema = new mongoose.Schema({
  id: String,
  placeId: String,
  userId: String,
  title: String,
  description: String,
  detail: Object,
  images: [imageSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
}, {
  versionKey: false,
})

export default schema
