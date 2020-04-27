import { ObjectId } from 'mongodb';

import User from './User';

import { handleCreateUserError } from './User.errors';
import { verifyPassword } from '../../utils/cryptUtils';

interface userProps {
  user: string;
  password: string;
}
interface createUserReturn {
  _id: ObjectId;
  username: string;
}

export const createUser = async (
  props: userProps
): Promise<createUserReturn> => {
  try {
    const newUser = new User({
      username: props.user,
      password: props.password,
    });
    return await newUser.save();
  } catch (error) {
    // console.log(error.errors.password.properties);
    throw handleCreateUserError(error);
  }
};
export const loginUser = async (props: userProps): Promise<boolean> => {
  const findedUser = await User.findOne({
    username: props.user,
  });
  if (findedUser) {
    try {
      return await verifyPassword(findedUser.password, props.password);
    } catch (error) {
      console.log(error);
    }
  }
  return false;
};
