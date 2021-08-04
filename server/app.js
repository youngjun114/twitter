import express from 'express';
import 'express-async-error';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import tweetsRouter from './router/tweets.js';
import authRouter from './router/auth.js';
import { config } from './config.js';
import { initSocket } from './connection/socket.js';
import { connectDB } from './database/database.js';

const app = express();

const corsOption = {
  origin: config.cors.allowedOrigin,
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(helmet());
app.use(cors(corsOption));
app.use(morgan('tiny'));

app.use('/tweets', tweetsRouter);
app.use('/auth', authRouter);

// Error handler for invalid url
app.use((req, res, next) => {
  res.sendStatus(404); // Not Found
});

app.use((error, req, res, next) => {
  console.error(error); // save log
  res.sendStatus(500); // Internal Server Error
});

connectDB()
  .then(() => {
    console.log(`Server is started...  ${new Date()}`);
    const server = app.listen(config.port);
    initSocket(server);
  })
  .catch(console.error);
