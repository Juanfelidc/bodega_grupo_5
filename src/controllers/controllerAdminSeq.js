const path = require('path');
const { devNull } = require('os');
const db = require('../../src/database/models');
const res = require('express/lib/response');

const controllerAdminSeq = {
   index: (req,res) =>{
    db.Producto.findAll()
      .then(function(productos){
        res.render('listProducts', {productos});
      })
      .catch(error => res.send(error))
   },
   create: (req,res) => {
    db.Cepa.findAll()
      .then(function(cepas){
        res.render("createProduct", {cepas});
      })
   },
  save: (req,res) => {
    db.Producto.create({
      nombre: req.body.nombre,
      precio: req.body.precio,
      cepa_id: req.body.cepa,
      categoria: req.body.categoria,
      descripcion: req.body.descripcion,
      imagen: req.file.filename
      
    })
    .then(vinos => {
      res.redirect("/administrar");
    })
    .catch(error => res.send(error))
  },
  show: (req,res)=>{
    db.Producto.findByPk(req.params.id, {
      include : [{association : 'cepa'}]
    })
    .then(miVino=> {
      res.render('detail', {miVino})
    })
    .catch(error => res.send(error))
  }
}

module.exports = controllerAdminSeq;