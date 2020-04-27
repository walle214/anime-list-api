import { prop, pre, getModelForClass } from '@typegoose/typegoose';

import { cryptPassword } from '../../utils/cryptUtils';
import { usernamePropsOptions, passwordPropsOptopns } from './User.propsdef';
import { createUser, loginUser } from './User.methodsdef';

@pre<User>('save', async function () {
  this.password = await cryptPassword(this.password);
})
class User {
  @prop(usernamePropsOptions)
  public username!: string;
  @prop(passwordPropsOptopns)
  public password!: string;

  public static createUser = createUser;
  public static loginUser = loginUser;
}

export default getModelForClass(User);
