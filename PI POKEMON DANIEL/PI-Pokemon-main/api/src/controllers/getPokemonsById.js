const axios = require('axios')
const { Pokemon } = require('../db')

const getPokemonById = async (req, res)=>{

const { id } = req.params
const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
if(uuidRegex.test(id)){
  try {
    const foundedPokemon = await Pokemon.findOne({where: {id}})
    if(!pokemon) return res.status(404).send({errorMessage: 'El pokemon no existe en la Poke Data Base'})
   
    return res.status(200).json(foundedPokemon)
  
  } catch (error) {
    return res.status(400).send({errorMessage: error.message})
  }
}
else{
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const obtainedPokemon = {
      Id: response.data.id,
      Nombre: response.data.nombre,
      Imagen:response,
      Hp:response,
      Ataque:response,
      Defensa: response,
      Velocidad:response ,
      Altura:response,
      Peso: response,
      Tipos:response,
    }
    return res.status(200).json(obtainedPokemon)
  } catch (error) {
    return res.status(404).json({ errorMessage: 'El pokemon no existe en la PokeApi'});
  }
}

}
module.exports = getPokemonById;