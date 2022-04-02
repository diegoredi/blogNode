const express = require("express");
const router = express.Router();

router.get("/categories", (req, res) => {
    res.send("Rota Categorias");
})

router.get("/admin/categories/new", (req, res) => {
    res.send("Rota categorias admin")
})



module.exports = router;