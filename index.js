// Importamos Express
const express = require('express');

// Creamos la aplicación de Express
const app = express();

// Definimos el puerto donde correrá el servidor
const PORT = 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi servidor con Express!');
});

// Ruta para /clientes
app.get('/clientes', (req, res) => {
  res.json([
    { id: 1, nombre: 'Carlos' },
    { id: 2, nombre: 'María' },
  ]);
});

// Ruta para /ordenes
app.get('/ordenes', (req, res) => {
  res.json([
    { id: 101, producto: 'Laptop', cantidad: 1 },
    { id: 102, producto: 'Teléfono', cantidad: 2 },
  ]);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
