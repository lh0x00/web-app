import mongoose from 'mongoose'
import schema from 'db/schema/place'

const Place = mongoose.model('Place', schema)

export default Place
