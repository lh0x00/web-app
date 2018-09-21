import mongoose from 'mongoose'
import schema from 'db/schema/post'

const Post = mongoose.model('Post', schema)

export default Post
