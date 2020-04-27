import jwt from 'jsonwebtoken';
const { JWT_SECRET = 'SomeLazySecret' } = process.env;

export const createJWT = (payload: object): string => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: '48 hours',
  });
};
