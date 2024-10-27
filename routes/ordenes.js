const express = require('express');
const router = express.Router();

// Ruta para obtener órdenes
router.get('/', (req, res) => {
  res.json([
    { id: 101, producto: 'Laptop', cantidad: 1 },
    { id: 102, producto: 'Teléfono', cantidad: 2 },
  ]);
});

module.exports = router;

