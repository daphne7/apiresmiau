const mongoose = require("./connect");
var USERSCHEMA = {
  nombre      : String,
  apellido    : String,
  email       : String,
  password    : String,
  sex         : String,

}
const Users = mongoose.model("Users",USERSCHEMA);
module.exports ={model: USER, schema: USERSCHEMA,updatekeys:
  ["nombre","apellido","email","password","sex"]};
