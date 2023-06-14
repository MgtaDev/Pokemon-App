//Nos traemos a Router de express
const { Router } = require('express');

//Importamos nuestros controladores:
const getPokemonFromDb = require('../controllers/getCreatePokemonFromDb')
const getAllPokemons = require('../controllers/getPokemons.js');
const getPokemonById = require('../controllers/getPokemonsById.js');
const getPokemonByName = require('../controllers/getPokemonsByName.js');
const getPokemonByType = require('../controllers/getPokemonsByType.js');
const createPokemon = require('../controllers/postPokemons.js');

//Asignamos el router
const router = Router();

// Configuramos nuestras rutas;
router.get('/pokemons', getAllPokemons)
router.get('/pokemons/:id', getPokemonById)
router.get('/pokemons/name',getPokemonByName)
router.get('/types',getPokemonByType)
router.get('/pokemonsdb', getPokemonFromDb)
router.post('/pokemons',createPokemon)

module.exports = router;
