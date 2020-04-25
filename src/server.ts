import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  console.log(req.headers);
  const { authorization } = req.headers;
  if (authorization) res.send({ authorization: authorization.split(' ')[1] });
  else res.send({ error: 'No auth header' });
});

export default app;
