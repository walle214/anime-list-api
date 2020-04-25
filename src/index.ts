import dotenv from 'dotenv';
dotenv.config();

import app from './server';
import './db';

const { PORT } = process.env;
const main = async () => {
  try {
    await app.listen(PORT);
    console.log(`Server on port ${PORT}`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
main();
