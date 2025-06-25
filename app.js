const express = require('express');
const app = express();
const path = require('path');

// Importar el router de camiones
const camionRouter = require('./routes/camionRouter'); // Ajusta la ruta si es distinta

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para leer datos
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Montar las rutas
app.use('/', camionRouter); // MUY IMPORTANTE

// Puerto
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
