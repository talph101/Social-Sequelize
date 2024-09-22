const {db, DataTypes, Model} = require('./db/connection.js');
const { sequelize } = require('./Profile.js');

class Comment extends Model {};

Comment.init({
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
}, {
    sequelize: db,
    modelName: 'comment'
})


module.exports = Comment;