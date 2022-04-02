const {getAll, create, update} = require('./course.service');
const app = require('express');
const router = app.Router();

router.get('/', async (req: any, res: any) => {
  const result = await getAll();
  res.send(result);
});

router.post('/', async (req: any, res: any) => {
  const {name} = req.body;
  const result = await create(name);
  res.status(201).send(result);
});

router.put('/:id', async (req:any, res:any) => {
  const {name} = req.body;
  const result = await update(req.params.id, name);
  res.send(result);
});

module.exports = router;
