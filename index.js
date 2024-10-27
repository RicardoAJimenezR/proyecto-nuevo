const express = require('express');
const app = express();
const clientesRouter = require('./routes/clientes');
const ordenesRouter = require('./routes/ordenes');
const authRouter = require('./routes/auth');

app.use(express.json()); // Para que el servidor pueda procesar JSON

app.get('/', (req, res) => {
  res.send('¡Bienvenido a Mi Proyecto Express!');
});

app.use('/clientes', clientesRouter);
app.use('/ordenes', ordenesRouter);
app.use('/auth', authRouter); // Ruta para autenticación

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
