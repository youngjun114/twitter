import express from 'express';
import 'express-async-error';
import { body } from 'express-validator';
import * as tweetController from '../controller/tweet.js';
import { validate } from '../middleware/validator.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

const validateTweet = [
  body('text')
    .trim()
    .isLength({ min: 3, max: 280 })
    .withMessage({ message: 'Text should be at least 3 characters' }),
  validate,
];

// GET /tweets
// GET /tweets?username=:username
// Find tweet by username
router.get('/', tweetController.getTweets);

// GET /tweets/:id
// Find tweet by id
router.get('/:id', isAuth, tweetController.getTweet);

// POST /tweets
router.post('/', isAuth, validateTweet, tweetController.createTweet);

// PUT /tweets/:id
// Update tweet
router.put('/:id', isAuth, validateTweet, tweetController.updateTweet);

// DELETE /tweets/:id
// Delete tweet
router.delete('/:id', isAuth, tweetController.deleteTweet);

export default router;
