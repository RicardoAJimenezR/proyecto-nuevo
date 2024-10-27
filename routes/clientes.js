const express = require('express');
const router = express.Router();

// Ruta para obtener clientes
router.get('/', (req, res) => {
  res.json([
    { id: 1, nombre: 'Carlos' },
    { id: 2, nombre: 'María' },
  ]);
});

module.exports = router;

