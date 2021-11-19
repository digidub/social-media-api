import { Schema, model, Types } from 'mongoose';

interface Post {
  body: string;
  datePosted: number;
  author: Types.ObjectId;
  likes: Types.ObjectId[];
}

const schema = new Schema<Post>({
  body: { type: String, required: true },
  datePosted: { type: Number, required: true, default: Date.now() },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const Post = model('Post', schema);

export default Post;
