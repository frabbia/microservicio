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

app.get('/autos', async (req, res) => {
  try {

    const { data: autos } = await axios.get('http://localhost:6002/autos');
    res.json({ autos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al encontrar un auto' });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor de suma corriendo en http://localhost:${PORT}`);
});
