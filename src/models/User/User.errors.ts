/* class UserError extends Error {
  constructor() {
    super();
  }
} */

export const handleCreateUserError = (error: any) => {
  if (error.errors) {
    return Object.keys(error.errors).map((e) => {
      const err = error.errors[e].properties;
      return {
        path: err.path,
        message: err.message.replace(` (\`${err.value}\`)`, ''),
      };
    });
  } else {
    if (error.code) {
      switch (error.code) {
        case 11000:
          return [
            {
              path: 'username',
              message: 'User already exists',
            },
          ];
      }
    }
  }
  console.log(error);
  return [
    {
      path: 'unknow',
      message: 'Unexpected error',
    },
  ];
};
