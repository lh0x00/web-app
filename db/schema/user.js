import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  username: String,
  password: String,
  role: String,
  email: {
    address: String,
    verify: Boolean,
  },
  phone: {
    number: String,
    verify: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  following: [{
    role: String,
    id: String,
  }],
  followers: [{
    role: String,
    id: String,
  }],
}, {
  versionKey: false,
})

export default schema
