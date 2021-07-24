import express from 'express';

let tweets = [
  {
    id: '1',
    text: 'Please Hire Me',
    createdAt: Date.now().toString(),
    name: 'Youngjun',
    username: 'youngjun',
    url: 'https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png',
  },
  {
    id: '2',
    text: 'Hello world',
    createdAt: Date.now().toString(),
    name: 'Bob',
    username: 'bob',
    url: 'https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png',
  },
];
const router = express.Router();

// GET /tweets
router.get('/', (req, res, next) => {
  res.status(200).json(tweets);
});

// GET /tweets
// GET /tweets?username=:username
router.get('/', (req, res, next) => {
  const username = req.query.username;
  console.log(req.query);
  const data = username
    ? tweets.filter((tweet) => {
        username === tweet.username;
      })
    : tweets;
  res.status(200).json(data);
});

// GET /tweets/:id
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  const tweet = tweets.find((tweet) => {
    return tweet.id === id;
  });
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id:${id} not found` });
  }
});

// POST /tweets
router.post('/', (req, res, next) => {
  const { text, name, username } = req.body;
  const tweet = {
    id: Date.now().toString(),
    createdAt: new Date(),
    text,
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
});
// router.put('/:id', (req, res) => {
//   res.statusCode(201).send('success');
// });
// router.delete('/:id', (req, res) => {
//   res.statusCode(201).send('success');
// });

export default router;
