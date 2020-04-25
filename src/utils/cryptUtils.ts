import bcrypt from 'bcrypt';
const BCRYPT_SALT_ROUNDS = 10;
export const cryptPassword = async (password: string): Promise<string> => {
  try {
    return await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
