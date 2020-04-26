import { PropOptionsWithStringValidate } from '@typegoose/typegoose/lib/types';

export const usernamePropsOptions: PropOptionsWithStringValidate = {
  required: true,
  unique: true,
  lowercase: true,
  maxlength: 20,
  minlength: 5,
  validate: {
    validator(username): boolean {
      console.log('Validating username');
      const userValid = /^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
      console.log(
        'Valid username',
        typeof username == 'string' && userValid.test(username)
      );
      if (typeof username == 'string' && userValid.test(username)) return true;
      return false;
    },
    message: 'Username format not valid',
  },
};

export const passwordPropsOptopns: PropOptionsWithStringValidate = {
  required: true,
  maxlength: 30,
  minlength: 8,
  validate: {
    validator(password) {
      console.log('Validating password');
      const passValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*.]{8,30}$/;
      console.log(
        'Valid password',
        typeof password == 'string' && passValid.test(password)
      );
      if (typeof password == 'string' && passValid.test(password)) return true;
      return false;
    },
    message: 'Password not strong',
  },
};
