import bcrypt from 'bcrypt';
export const cryptPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
