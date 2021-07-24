import express from 'express';

const tweets = [
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

router.get('/', (req, res, next) => {
  res.status(200).json(tweets);
});

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
// router.get('/:id', (req, res, next) => {
//   res.statusCode(200).send('Tweets');
// });
// router.post('/', (req, res) => {
//   res.statusCode(202).send('success');
// });
// router.put('/:id', (req, res) => {
//   res.statusCode(202).send('success');
// });
// router.delete('/:id', (req, res) => {
//   res.statusCode(202).send('success');
// });

export default router;
