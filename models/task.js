import mongoose from 'mongoose'

const Schema = mongoose.Schema


const arrangementSchema = new Schema({
  name: String,
  details: String,
  fulfillment: Date,
}, {
  timestamps: true
})

const taskSchema = new Schema({
  name: String,
  details: String,
  fulfilled: Boolean,
  client: {type: Schema.Types.ObjectId, ref: "Profile"},
  arrangements: [arrangementSchema]
}, {
  timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

export {
  Task
}
