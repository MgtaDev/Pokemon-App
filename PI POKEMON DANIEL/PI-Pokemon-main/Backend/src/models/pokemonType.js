const { DataTypes }= require('sequelize')

module.exports = (sequelize) => {
   sequelize.define('Type', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      // defaultValue:DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.UUID,
      allowNull: false
    }
   }, {timestamps: false})
}