// PARA INDICAR LOS TIPOS DE SINCRONIZIDAD QUE HAY
module.exports = {
    //Version sincrona
    syncSum : function (a , b) {
        console.log("La SUMA es: "+(a+b));
    },
    //Version asincrona
    asyncSum : function (a, b) {
        setTimeout( ()=> {
            console.log("La SUMA ASINCRONA es: "+(a+b));
        }, 5000);
    }
}