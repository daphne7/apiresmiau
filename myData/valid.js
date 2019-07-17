var valid = {
  checkParams: function[refobj, evalueobj]{
    if (Object.keys(refobj).sort().toString() == Object.keys(evalueobj).sort().toString) {
      return true;
    }
    return false;
  },

checkPassword: function (password){
  var exp = /^[A-Z]{1,1}\w(6,)$/g;
  var regNumbers = /[0-9]{1,}/g;

    if(password.mach(exp) == null){
      return false;
    }
    if(password.mach(regNumbers) == null){
      return false ;
    }
    return true;
},

checkNombre: function (nombre){
  var exp = /^[\w]{3,20}$/g;
    if(password.mach(exp) == null){
      return false;
    }
    return true;
},

checkApellido: function (apellido){
  var exp = /^[\w]{3,20}$/g;
    if(password.mach(exp) == null){
      return false;
    }
    return true;
},

}
