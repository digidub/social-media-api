import mongoose from 'mongoose';
const { Schema } = mongoose;

interface User {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  dateJoined: number;
}

const schema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String, required: true },
  dateJoined: { type: Number, required: true, default: Date.now() },
});

const User = mongoose.model('User', schema);

export default User;
