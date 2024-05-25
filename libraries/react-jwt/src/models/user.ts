import { model, Schema } from 'mongoose'

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
})

const UserModel = model('User', UserSchema)

export default UserModel
