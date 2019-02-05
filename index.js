const cowsay = require("cowsay")
const modulo_cowsay = require('./cowsayFun')

console.log(cowsay.say({
    text : "Hola Mundo!",
    e : "oO",
    T : "W"
}));

modulo_cowsay.consoleSay("Vaca Mu");