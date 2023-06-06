import mongoose from 'mongoose'
const { Schema } = mongoose
const { ObjectId } = Schema

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    }
  },
  { timestamps: true }
)

export default mongoose.model('User', userSchema)
