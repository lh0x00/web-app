import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  id: String,
  placeId: String,
  userId: String,
  title: String,
  description: String,
  detail: Object,
  images: [{
    id: String,
    description: String,
  }],
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
