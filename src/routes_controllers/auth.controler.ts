import { Request, Response } from 'express';
import * as jwtUtils from '../utils/jwtUtils';
import User from '../models/User/User';

export const signup = async (req: Request, res: Response) => {
  const { user, password } = req.body;
  if (!(user && password)) {
    res.status(400).json({
      message: 'User and password are required',
    });
  } else {
    try {
      const { username } = await User.createUser({ user, password });

      const token = jwtUtils.createJWT({ username });

      res.status(202).json({ token, message: 'Welcome :D' });
    } catch (error) {
      res.status(500).json({ message: 'Error inesperado', error });
    }
  }
};
export const login = async (req: Request, res: Response) => {
  const { user, password } = req.body;
  if (user && password) {
    if (await User.loginUser({ password, user })) {
      const token = jwtUtils.createJWT({ user });
      res.status(200).json({
        token,
        message: 'Welcome :D',
      });
    } else {
      res.status(400).json({
        message: 'User or password incorrect',
      });
    }
    return;
  }
  res.status(400).json({
    message: 'User and password are required',
  });
};
