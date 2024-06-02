const {request, response} = require("express");
const{equipos} = require("../js/juego.js")

const {juego} = require ("../js/juego.js");

const getJuego = (req, res) =>{

    return res.json({

        ok:true,
        statusCode:200,
        juego

    });
    
}

const getJuegoById = (req = request, res = response) =>{
    
    
    let id = parseInt(req.params.id);

    let juegoAObtener = "";

    juegoAObtener = juego.find(( juego )=>{
        return juego.id == id;


    });

    if(juegoAObtener){
        return res.json ({
            ok:true,
            statusCode:200,
            juegoAObtener

        });

        }else{
            return res.json({
              ok_true,
              statusCode:404,
              msg:"Id de juego no encontrado; porfavor, intentar nuevamente"
            

        });
    }
}

module.exports = {

    getJuego,
    getJuegoById
}
