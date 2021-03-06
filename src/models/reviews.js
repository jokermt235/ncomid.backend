module.exports = (sequelize, DataTypes)=>{
  return sequelize.define('Reviews', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull:true
    },
    descRU: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: false
    },
    descKG: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: false
    },
    descEN: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: false
    },
    show: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    image:{
        type: DataTypes.TEXT,
        unique: false
    },
    username:{
        type: DataTypes.TEXT,
        unique: false,
        allowNull:false
    },
    userType:{
        type: DataTypes.TEXT,
        unique: false,
        allowNull:false
    }
  })
}
