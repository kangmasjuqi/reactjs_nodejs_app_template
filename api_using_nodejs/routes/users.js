const express = require('express');
const router = express.Router();
const users = require('../services/users');

router.get('/', async function(req, res, next) {
  try {
    res.json(await users.getMultiple(
      req.query.page, req.query.search_key,
      req.query.sort_by, req.query.sort_dir
    ));
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    res.json(await users.create(req.body));
  } catch (err) {
    console.error(`Error while creating users`, err.message);
    next(err);
  }
});

router.get('/:id', async function(req, res, next) {
  try {
    res.json(await users.getDetail(req.params.id));
  } catch (err) {
    console.error(`Error while getting users`, err.message);
    next(err);
  }
});

router.put('/:id', async function(req, res, next) {
  try {
    res.json(await users.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating users`, err.message);
    next(err);
  }
});

router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await users.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting users`, err.message);
    next(err);
  }
});

module.exports = router;
