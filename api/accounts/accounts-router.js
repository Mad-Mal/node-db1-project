const router = require('express').Router()
const account = require('./accounts-model.js');
const mw = require('./accounts-middleware.js');

router.get('/', (req, res, next) => {
  account.getAll()
    .then(accounts => {
      res.json(accounts)
    })
    .catch(error => {
      res.json({
        message: error.message
      })
    })
})

router.get('/:id', (req, res, next) => {
  const {id} = req.params;
  account.getById(id)
    .then(account => {
      res.json(account)
    })
    .catch(error => {
      res.json({
        message: error.message
      })
    })
})

router.post('/', (req, res, next) => {
  account.create(req.body)
    .then(account => {
      res.json(account)
    })
    .catch(error => {
      res.json({
        message: error.message
      })
    })
})

router.put('/:id', (req, res, next) => {
  const {id} = req.params
  const changes = req.body
  account.updateById(id, changes)
    .then(account => {
      res.json(account)
    })
    .catch(error => {
      res.json({
        message: error.message
      })
    })
});

router.delete('/:id', (req, res, next) => {
  const {id} = req.params
  account.deleteById(id)
    .then(account => {
      res.json(account)
    })
    .catch(error => {
      res.json({
        message: error.message
      })
    })
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
