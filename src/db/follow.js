import mongoose from 'mongoose'
import schema from 'db/schema/follow'

const Follow = mongoose.model('Follow', schema)

export default Follow
