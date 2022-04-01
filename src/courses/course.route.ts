const {getAll} = require('./course.service');
const app = require('express');
const router = app.Router();

router.get('/', async (req: any, res: any) => {
  const result = await getAll();
  res.send(result);
});

router.post('/', async (req: any, res: any) => {
  try {
    res.send(req.body);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
