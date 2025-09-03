import mongoose from 'mongoose'
import messagesSchema from './messagesSchema.js'

messagesSchema.set('toJSON', {
    transform: (doc, ret, options) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
        return ret
    }
})

const messagesModel = mongoose.model('Messages', messagesSchema)

export default messagesModel