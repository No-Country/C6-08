const { sequelize } =require('../util/database')
const { DataTypes } =require('sequelize')

const Hotel = sequelize.define('hotel', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(40),
    allowNull: false
  } ,
  rooms: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  cost: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  lat: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  long: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(10),
    allowNull: false,
    defaultValue: 'active'
  }
})

module.exports = { Hotel }
