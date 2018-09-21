import { Schema } from 'mongoose'
import imageSchema from 'db/schema/image'

const schema = new Schema({
  id: String,
  name: String,
  category: String,
  address: String,
  website: String,
  phone: [Number],
  rate: Number,
  location: {
    type: { type: String },
    coordinates: [],
  },
  images: [imageSchema],
  workTime: {
    monday: [String],
    tuesday: [String],
    wednesday: [String],
    thursday: [String],
    friday: [String],
    saturday: [String],
    sunday: [String],
  },
}, {
  versionKey: false,
})

schema.index({ location: '2dsphere' })

export default schema
