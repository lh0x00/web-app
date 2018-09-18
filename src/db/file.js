import mongoose from 'mongoose'
import schema from 'db/schema/file'

const File = mongoose.model('File', schema)

export default File
