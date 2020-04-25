import { Request, Response, NextFunction } from 'express';

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user, password } = req.body;
  if (!(user && password)) {
    res.status(400).json({
      message: 'User and password are required',
    });
    return next();
  }
  res.status(200).json({
    message: 'SignUp',
  });
};
export const login = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    message: 'Login',
  });
};
