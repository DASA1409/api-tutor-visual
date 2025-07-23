const express = require('express');
const router = express.Router();
const Recomendacion = require('../models/Recomendacion');
const Usuario = require('../models/Usuario');

router.post('/', async (req, res) => {
  try {
    const recomendacion = await Recomendacion.create(req.body);
    res.json(recomendacion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const recomendaciones = await Recomendacion.findAll({ include: Usuario });
  res.json(recomendaciones);
});

module.exports = router;
