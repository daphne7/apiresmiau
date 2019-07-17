const mongoose = require('mongoose');

mongoose.connect("mongodb://172.18.0.1:27017/ApiMiau", {
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => {
    console.log('Conexion a MongoDB exitosa..! :)');
}).catch(err => {
    console.log('Error en la conexion hacia mongo DB :(');
});
module.exports = mongoose;
