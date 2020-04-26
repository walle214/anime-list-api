import dotenv from 'dotenv';
dotenv.config();

import app from './server';
import './db';

const { PORT = 5000 } = process.env;
const main = () => {
  try {
    app.listen(PORT);
    console.log(`Server on port ${PORT}`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
main();
