import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: false,
    unique: true,
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    required: false,
    default: Date.now,
  },
}, {
  versionKey: false,
})

const User = mongoose.model('User', userSchema)

export default User
