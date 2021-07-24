import express from 'express';
import tweetsRouter from './router/tweets.js';
import usersRouter from './router/users.js';

const app = express();

app.use('/tweets', tweetsRouter);
app.use('/users', usersRouter);
app.listen(8080);
