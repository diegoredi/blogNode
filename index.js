//Importação dos frameworks
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/connection");

const categoriesController = require("./categories/categoriesController");
const articlesController = require("./articles/articlesController");



//Setando View Engine para EJS
app.set('view engine', 'ejs');

//Statics
app.use(express.static('public'));

//Configurando Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//conexao com o banco
connection
    .authenticate()
    .then(() => {
        console.log("Conexão realizada com sucesso!");
    }).catch((error) => {
        console.log(error);
    })

//Criando Rotas
app.get("/", (req, res) => {
    res.render("index");
})

app.use("/", categoriesController);
app.use("/", articlesController);


//Executando o servidor
app.listen(8080, () => {
    console.log("Servidor iniciado");
})