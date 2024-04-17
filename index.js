const express = require('express');
const axios = require('axios');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT;

app.get('/sum', async (req, res) => {
  try {

    const { data: { num1, num2 } } = await axios.get('http://localhost:6001/random');

    const suma = num1 + num2;

    res.json({ suma });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al sumar los números' });
  }
});


app.get('/marcas', async (req, res) => {
  try {
    const { data: autos } = await axios.get('http://localhost:6002/marcas');
    res.json({ autos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las marcas de auto' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor de suma corriendo en http://localhost:${PORT}`);
});
