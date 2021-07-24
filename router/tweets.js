import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.statusCode(200).send('Tweets');
});
router.get('/?username:name', (req, res, next) => {
  res.statusCode(200).send('Tweets');
});
router.get('/:id', (req, res, next) => {
  res.statusCode(200).send('Tweets');
});
router.post('/', (req, res) => {
  res.statusCode(202).send('success');
});
router.put('/:id', (req, res) => {
  res.statusCode(202).send('success');
});
router.delete('/:id', (req, res) => {
  res.statusCode(202).send('success');
});

export default router;
