const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT3 = process.env.PORT3;

app.get('/marcas/:marca/:year', async (req, res) => {
  try {
    const {marca} = req.params;
    const {year} = req.params;
    const response = await axios.get(`https://www.carqueryapi.com/api/0.3/?cmd=getTrims&make=${marca}&year=${year}`);
    const trims = response.data.Trims;
    res.json({ trims });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los modelos de autos' });
  }
});

app.listen(PORT3, () => {
  console.log(`Servidor de API de autos corriendo en http://localhost:${PORT3}`);
});
