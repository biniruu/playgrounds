import { model, Schema } from 'mongoose'

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  body: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
  }, // 문자열로 이루어진 배열
  publishedDate: {
    type: Date,
    default: Date.now, // 현재 날짜를 기본 값으로 지정
  }, // createdAt으로 대체 가능한가?
  user: {
    type: String,
    require: true,
  },
})

const PostModel = model('Post', PostSchema)

export default PostModel
