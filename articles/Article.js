const Sequelize = require("sequelize");
const connection = require("../database/connection");
const Category = require("../categories/Category")

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type:Sequelize.TEXT,
        allowNull:false
    }
})

Article.sync({force: true})

Article.belongsTo(Category); //Um artigo tem uma Categoria
Category.hasMany(Article); // Uma Categoria tem vários Artigos

module.exports = Article;