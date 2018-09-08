import mongoose from 'mongoose'
import schema from 'db/schema/user'

const User = mongoose.model('User', schema)

export default User
