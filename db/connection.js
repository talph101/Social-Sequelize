const {Sequelize, Model, DataTypes} = require('sequelize');
const path = require('path');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite'),
});

db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });



module.exports = {
    db,
    DataTypes,
    Model,
    
}