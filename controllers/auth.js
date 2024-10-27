const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const users = []; // Aquí puedes conectar a una base de datos en el futuro

// Registro
const register = (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  users.push({ username, password: hashedPassword });
  res.status(201).send({ message: 'Usuario registrado!' });
};

// Login
const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ username }, 'tu_clave_secreta', { expiresIn: '1h' });
    res.status(200).send({ auth: true, token });
  } else {
    res.status(401).send({ auth: false, token: null });
  }
};

module.exports = { register, login };
 
