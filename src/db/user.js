import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import schema from 'db/schema/user'

const User = mongoose.model('User', schema)

User.prototype.authenticate = function authenticate(
  password: string,
): boolean {
  const isEqual = bcrypt.compareSync(password, this.password)
  return isEqual
}

User.prototype.fetch = function fetch() {
  const doc = this
  return doc
}

export default User
