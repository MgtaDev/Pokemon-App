const { Router } = require('express');
//Importamos nuestros controladores:
const getdB = require('../controllers/getdb');
const getAllPokemons = require('../controllers/getPokemons');
const getPokemonById = require('../controllers/getPokemonsById');
const getPokemonByName = require('../controllers/getPokemonsByName');
const getPokemonByType = require('../controllers/getPokemonsByType');
const createPokemon = require('../controllers/postPokemons');

//Asignamos el router
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', getAllPokemons)
router.get('/pokemons/:id', getPokemonById)
router.get('/pokemons/name',getPokemonByName)
router.get('/types',getPokemonByType)
router.get('/pokemonsdb', getdB)
router.get('/pokemons',createPokemon)

module.exports = router;
