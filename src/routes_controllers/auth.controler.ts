import { Request, Response } from 'express';

export const signup = async (req: Request, res: Response) => {
  const { user, password } = req.body;
  if (!(user && password)) {
    res.status(400).json({
      message: 'User and password are required',
    });
  } else {
    res.status(200).json({
      message: 'SignUp',
    });
  }
};
export const login = (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Login',
  });
};
