import express from 'express';
import morgan from 'morgan';

import authRouter from './routes/auth';

const app = express();
//middlewares
app.use(morgan('dev'));

//config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//rutas
app.use('/auth', authRouter);
app.use('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome',
  });
});

export default app;
