import mongoose from 'mongoose';

const { DB_HOST, DB_PORT, DB_NAME } = process.env;

const uri = `mongodb://${DB_HOST}${DB_PORT}/${DB_NAME}`;

const connectDb = async () => {
  //   console.log(uri);
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('DB connected');
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
connectDb();
