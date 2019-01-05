import { Schema } from 'mongoose'
import bcrypt from 'bcrypt'

const USER_PASSWORD_SALT_ROUNDS = 10

const schema = new Schema({
  username: {
    type: String,
    unique: true,
  },
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
}, {
  versionKey: false,
})

schema.pre('save', function preSave(next) {
  const user = this

  if (!user.isModified('password')) {
    return next()
  }

  const hashed = bcrypt.hashSync(user.password, USER_PASSWORD_SALT_ROUNDS)
  user.password = hashed

  return next()
})

export default schema
