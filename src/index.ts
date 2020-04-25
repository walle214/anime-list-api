import dotenv from 'dotenv';
dotenv.config();

import app from './server';
import './db';

const { PORT = 5000 } = process.env;
const main = () => {
  try {
    app.listen(PORT);
  } catch (error) {
    console.log(error);
  }
};
main();
