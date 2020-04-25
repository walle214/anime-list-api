import express from 'express';
import morgan from 'morgan';
import authRouter from './routes/auth';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome',
  });
});
app.use('/auth', authRouter);

export default app;
