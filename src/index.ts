import dotenv from 'dotenv';
dotenv.config();

import app from './server';
import './db';

const { PORT } = process.env;

const main = (port: string | number) => {
  try {
    app.listen(port);
    console.log(`Server on port ${port}`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
main(PORT || 3200);
