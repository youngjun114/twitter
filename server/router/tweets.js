import express from 'express';
import * as tweetRepository from '../data/tweet.js';

const router = express.Router();

// GET /tweets
router.get('/', (req, res, next) => {
  const tweets = tweetRepository.getAll();
  res.status(200).json(tweets);
});

// GET /tweets
// GET /tweets?username=:username
// Find tweet by username
router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweetRepository.getAllByUsername(username)
    : tweetRepository.getAll();
  res.status(200).json(data);
});

// GET /tweets/:id
// Find tweet by id
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  const tweet = tweetRepository.getById(id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id:${id} not found` });
  }
});

// POST /tweets
router.post('/', (req, res, next) => {
  const { text, name, username } = req.body;
  const tweet = tweetRepository.create(text, name, username);
  res.status(201).json(tweet);
});

// PUT /tweets/:id
// Update tweet
router.put('/:id', (req, res) => {
  const { text } = req.body;
  const { id } = req.params;
  const tweet = tweetRepository.update(id, text);
  if (tweet) {
    res.status(201).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id:${id} not found` });
  }
});

// DELETE /tweets/:id
// Delete tweet
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  tweetRepository.remove(id);
  res.sendStatus(204);
});

export default router;
