import { prop, pre, getModelForClass } from '@typegoose/typegoose';
import { PropOptionsWithStringValidate } from '@typegoose/typegoose/lib/types';

import { cryptPassword } from '../utils/cryptUtils';

const usernamePropsOptions: PropOptionsWithStringValidate = {
  lowercase: true,
  maxlength: 20,
  minlength: 5,
  required: true,
  unique: true,
  validate: {
    validator(username): boolean {
      console.log('Validating username');
      const userValid = /^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
      console.log(typeof username == 'string' && userValid.test(username));
      if (typeof username == 'string' && userValid.test(username)) return true;
      return false;
    },
    message: 'Username format not valid',
  },
};
const passwordPropsOptopns: PropOptionsWithStringValidate = {
  required: true,
  maxlength: 30,
  minlength: 8,
  validate: {
    validator(password) {
      console.log('Validating password');
      const passValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*.]{8,30}$/;
      console.log(typeof password == 'string' && passValid.test(password));
      if (typeof password == 'string' && passValid.test(password)) return true;
      return false;
    },
    message: 'La contraseña no es bastante segura',
  },
};
@pre<User>('save', async function () {
  this.password = await cryptPassword(this.password);
})
class User {
  @prop(usernamePropsOptions)
  public username!: string;
  @prop(passwordPropsOptopns)
  public password!: string;
}
const UserModel = getModelForClass(User);
export default UserModel;
