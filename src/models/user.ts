import { Schema, model, Types } from 'mongoose';

interface User {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  dateJoined: number;
  friends: Types.ObjectId[];
}

const schema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String, required: true },
  dateJoined: { type: Number, required: true, default: Date.now() },
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const User = model('User', schema);

export default User;
