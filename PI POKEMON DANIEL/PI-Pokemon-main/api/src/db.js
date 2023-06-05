require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, } = process.env;

const PokemonsModel=require("./models/Pokemons")
const pokemonTypeModel=require("./models/pokemonType")

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${ DB_HOST}/pokemons`,
   {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
   }
);

//definicion de tablas
PokemonsModel(sequelize);
pokemonTypeModel(sequelize)

const {Pokemon,Type}=sequelize.models
PokemonsModel.belongsToMany(Type,{ through: 'Pokemon_Type' })
pokemonTypeModel.belongsToMany(Pokemon,{ through: 'Pokemon_Type' })

module.exports = {
  ...sequelize.models,
  comn:sequelize};

  //Status: completed