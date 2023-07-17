const axios = require('axios');
const { Type } = require('../db');

const getTypes = async (req, res) => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/type');
    const pokeTypes = response.data.results;

    await Promise.all(
      pokeTypes.map(async (type) => {
        const typeName = type.name;
        
        // Verificamos si el tipo ya existe en la base de datos
        const typeExists = await Type.findOne({ where: { name: typeName } });

        // Si no existe, lo creamos
        if (!typeExists) {
          await Type.create({ name: typeName }); 
        }
      })
    );

    // Obtenemos todos los tipos de la base de datos
    const dbTypes = await Type.findAll();

    // Combinamos los tipos obtenidos de la PokeAPI con los de la base de datos
    const types = pokeTypes.map(pokeType => {
      const dbType = dbTypes.find(t => t.name === pokeType.name);
      if (dbType) {
        return {
          name: dbType.name,
          url: `http://localhost:3001/types/${dbType.id}`,
        };
      }
      return pokeType;
    });

    return res.status(200).send(types);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = getTypes;