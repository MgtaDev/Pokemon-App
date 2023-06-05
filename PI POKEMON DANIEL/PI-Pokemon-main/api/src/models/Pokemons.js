const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemons', {
    Id: {
  type: DataTypes.UUID,
  primaryKey: true,
  defaultValue:DataTypes.UUIDV4,
  allowNull: false,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    Imagen:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    Vida: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Ataque: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Defensa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Velocidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Altura: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Peso: {
      type: DataTypes.STRING,
      allowNull: false,
    }

  
  },{timestamps: false});
};
