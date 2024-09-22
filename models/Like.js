const {db, DataTypes, Model} = require('./db/connection.js');
const { sequelize } = require('./Profile.js');

class Like extends Model {};

Like.init({
    reactionType: DataTypes.STRING,
    createdAt: DataTypes.STRING
}, {
    sequelize: db,
    modelName: 'like'
})

module.exports = Like;