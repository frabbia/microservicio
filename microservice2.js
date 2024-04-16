const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT3 = process.env.PORT3;
const CARQUERY_API_KEY = process.env.CARQUERY_API_KEY;

app.get('/autos', async (req, res) => {
  try {
    
    //const response = await axios.get(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&[params]`);

    const response = await axios.get(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&make=Acura&year=2022`);

    const autos = response.data.Models;
    res.json(autos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los autos' });
  }
});

app.listen(PORT3, () => {
  console.log(`Servidor de API de autos corriendo en http://localhost:${PORT3}`);
});
