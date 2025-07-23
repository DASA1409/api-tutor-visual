const express = require('express');
const router = express.Router();
const Opinion = require('../models/Opinion');
const Usuario = require('../models/Usuario');

router.post('/', async (req, res) => {
  try {
    const opinion = await Opinion.create(req.body);
    res.json(opinion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const opiniones = await Opinion.findAll({ include: Usuario });
  res.json(opiniones);
});

module.exports = router;
