const { Sequelize } = require('sequelize');
const {db, DataTypes, Model} = require('./db/connection.js');

class User extends Model {};

User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
}, {
    sequelize: db,
    modelName: 'user'
});


module.exports = User;