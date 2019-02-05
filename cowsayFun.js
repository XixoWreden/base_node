const cowsay = require("cowsay");

module.exports = {
    //Funcion para decir COWSAY en consola
    consoleSay : function (textoHablaVaca) {
        console.log(cowsay.say({
            text : textoHablaVaca
        }));        
    }
}