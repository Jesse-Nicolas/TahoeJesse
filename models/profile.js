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
  arrangements: [arrangementSchema]
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  tasks: [taskSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
