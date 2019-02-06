const callbackImport = require("./callback");

//SE PUEDE LLAMAR SENCILLAMENTE A LA FUNCION EN callbackImport Y PASARLE LOS PARAMETROS
callbackImport.getUserForID(10, (err, usuario) => {
    if(err){
        return console.log(err);
    }
    console.log(`Se muestra todo  lo que tiene la función getUserForID :`, usuario);
});