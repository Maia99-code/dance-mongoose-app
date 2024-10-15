require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const albumRoutes = require('./routes/albums');

const app = express();
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a la base de datos');
}).catch(err => {
    console.error('Error de conexión a MongoDB', err);
});

// Montar rutas
app.use('/albums', albumRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
