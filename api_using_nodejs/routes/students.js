const express = require('express');
const router = express.Router();
const students = require('../services/students');

router.get('/', async function(req, res, next) {
  try {
    res.json(await students.getMultiple(
      req.query.page, req.query.search_key,
      req.query.sort_by, req.query.sort_dir
    ));
  } catch (err) {
    console.error(`Error while getting students `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    res.json(await students.create(req.body));
  } catch (err) {
    console.error(`Error while creating students`, err.message);
    next(err);
  }
});

router.get('/:id', async function(req, res, next) {
  try {
    res.json(await students.getDetail(req.params.id));
  } catch (err) {
    console.error(`Error while getting students`, err.message);
    next(err);
  }
});

router.put('/:id', async function(req, res, next) {
  try {
    res.json(await students.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating students`, err.message);
    next(err);
  }
});

router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await students.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting students`, err.message);
    next(err);
  }
});

module.exports = router;
