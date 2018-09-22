import { Types, Schema } from 'mongoose'

const schema = new Schema({
  follower: Types.ObjectId,
  following: Types.ObjectId,
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, {
  versionKey: false,
})

export default schema
