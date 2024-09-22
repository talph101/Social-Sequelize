const {db, DataTypes, Model} = require('./db/connection.js');
const { sequelize } = require('./Profile');

class Post extends Model {};

Post.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
}, {
    sequelize: db,
    modelName: 'post'
});

module.exports = Post;