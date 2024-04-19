const express = require('express');
const axios = require('axios');
const cors = require('cors'); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT; 

app.use(express.static('public')); 


app.use(cors());

app.get('/sum', async (req, res) => {
  try {
    const marca = req.query.marca || 'Toyota'; 
    const year = req.query.year || 1950; 

    const response = await axios.get(`http://localhost:6002/marcas/${marca}/${year}`);
    const trims = response.data.trims;
    
    const autos = trims.map(trim => {
      return {
        marca: trim.make_display,
        modelo: trim.model_name,
        año: trim.model_year
      };
    });
    res.json({ autos});
  } catch (error) {
    console.error('Error al obtener modelos de autos:', error);
    res.status(500).json({ error: 'Error al obtener modelos de autos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor de suma corriendo en http://localhost:${PORT}`);
});
