module.exports = {
    //LA FUNCIÓN FLECHA getUserForID INTERNAMENTE VA A REGRESAR EL USUARIO, PERO EN FORMA DE CALLBACK-
    //OSEA INTERNAMENTE DENTRO DEL PARAMETRO DE LA FUNCIÓN, SE INDICA LO QUE SE LE QUIERE REGRESAR, PUEDE SER UN OBJETO O OTRA FUNCION QUE PUEDE 
    //CONTENER OTRA FUNCIÓN
    getUserForID : (id, callback) => {
        let usuario ={
            nombre : "Heydrich",
            id
        } 
        if(id != 20){
            callback(`El número id :${id}, no existe `);
        }else {
            callback(null, usuario);
        }
    } 
}