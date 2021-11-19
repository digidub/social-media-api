import { Schema, model, Types } from 'mongoose';

interface Comment {
  body: string;
  datePosted: number;
  author: Types.ObjectId;
  post: Types.ObjectId;
  likes: Types.ObjectId[];
}

const schema = new Schema<Comment>({
  body: { type: String, required: true },
  datePosted: { type: Number, required: true, default: Date.now() },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const Comment = model('Comment', schema);

export default Comment;
