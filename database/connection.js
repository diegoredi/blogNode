const Sequelize = require("sequelize")

const connection = new Sequelize('blognode', 'diegoredi', '135790', {
    host: 'localhost',
    dialect: 'mysql'
})



module.exports = connection