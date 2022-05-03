const express = require("express");
const router = express.Router();
const Category = require("./Category");
const slugify = require("slugify");

router.get("/categories", (req, res) => {
    res.send("Rota Categorias");
})

router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/new");
})

router.post("/categories/save", (req, res) => {
    var title = req.body.title;
    if(title != undefined){
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect("/")
        })
    }else{
        res.redirect("/admin/categories/new");
    }
});


router.get("/admin/categories", (req, res) => {
    Category.findAll()
        .then(categories => {
            res.render("admin/categories/index.ejs", {categories: categories});
        }); 
});

router.post("/admin/categories/delete", (req, res) =>{
    var id = req.body.id;

    if(id != undefined){
        Category.destroy({
            where: {
                id: id
            }
        }).then(() => {
            res.redirect("/admin/categories");
        });
    }
});

router.get("/admin/categories/edit/:id", (req, res) => {
    var id = req.params.id;

    Category.findByPk(id).then(categoria => {
        if(categoria != undefined){

            res.render("/admin/categories/edit.ejs", {categoria: categoria});

        }else{
            res.redirect("/admin/categories");
        }
    }).catch(erro => {
        res.redirect("/admin/categories");
    })
});



module.exports = router;