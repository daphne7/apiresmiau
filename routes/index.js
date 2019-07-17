
var express = require('express');
var sha1 = require("sha1");
var router = express.Router();

//const USER = require('../database/user');
//var valid = require = require("../database/users");

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Express' });
});
/*
router.get('/lab7', function(req, res, next) {
const urls =[
  'https://www.chiquipedia.com/imagenes/imagenes-gatos01-498x260.jpg',
  'https://www.chiquipedia.com/imagenes/imagenes-gatos02-498x260.jpg',
  'https://www.chiquipedia.com/imagenes/imagenes-gatos03-498x260.jpg',
  'https://www.chiquipedia.com/imagenes/imagenes-gatos04-498x260.jpg',
  'https://www.chiquipedia.com/imagenes/imagenes-gatos05-498x260.jpg',
  'https://www.chiquipedia.com/imagenes/imagenes-gatos20-498x260.jpg',
  // se puede agregar n urls de imagens
];
const data = [];
for (let index = 0; index < urls.length; index++) {

    let item = {};

    item.descripcion = 'Descripcion ' + index;
    item.title = 'Titulo ' + index;
    item.image = urls[index];
    data.push(item);
}
   res.json({
    data });
});
router.post("/users", async(req, res) => {
  var params = req.body;
  params["register"] = new Date();
  params["roles"]= ["list"];
     if (!valid.checkParams(USERSCHEMA, params)) {
       res.status(300).json({
         msn: "parametros incorrectos"
       });
       return;
     }

    if (!valid.checkPassword(params.password)) {
       res.status(300).json({
         mns: "password invalido"
      });
       return;
   }

     if (!valid.checkNombre(params.nombre)){
       res.status(300).json({
         msn: "Nombre invalido"
       });
       return;
     }
});*/
//login
router.post("/login", async(req, res, next) => {
  var params = req.body;
  if (!valid.checkParams({"email":String, "password": String},params)) {
    res.status(300).json({"msn": "Error parametros incorrectos"});
    return;
  }

  var haspassword = sha1(params.password);
  var docs = await USER.find({email: params.email, password:haspassword});

  if (docs.length == 0) {
    res.status(300).json({"msn": "Error ususario no registrado"});
    return;
  }

  if (docs.length == 1) {
    jwt.sign({name: params.email, password: haspassword}, "password",(err, token)=>{
      if (err) {
         res.status(300).json({"msn":"Error dentro del jwt"});
         return;
       }
       res.status(300).json({"token": token});
      });
       return;
  }
});





module.exports = router;
