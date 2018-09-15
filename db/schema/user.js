import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const USER_PASSWORD_SALT_ROUNDS = 10

const schema = new mongoose.Schema({
  id: String,
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

schema.pre('save', function pre(next) {
  const user = this

  if (!user.isModified('password')) {
    return next()
  }

  const hashed = bcrypt.hashSync(user.password, USER_PASSWORD_SALT_ROUNDS)
  user.password = hashed

  return next()
})


schema.statics.authenticate = function authenticate(password: string): boolean {
  return bcrypt.compareSync(password, this.password)
}

export default schema
