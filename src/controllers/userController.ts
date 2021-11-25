import User from '../models/user';
import { Request, Response } from 'express';

export const get = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find({}).populate('name');
    res.json(users);
  } catch (err) {
    res.status(400).json(err);
  }
};
