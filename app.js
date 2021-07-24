import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-error';
import tweetsRouter from './router/tweets.js';
import usersRouter from './router/users.js';

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/tweets', tweetsRouter);
app.use('/users', usersRouter);

// Error handler for invalid url
app.use((req, res, next) => {
  res.sendStatus(404); // Not Found
});

app.use((error, req, res, next) => {
  console.error(error); // save log
  res.sendStatus(500); // Internal Server Error
});

app.listen(8080);
