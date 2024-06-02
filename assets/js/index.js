const express = require("express");

const app = express();

const puerto = 2187;

const cors = require("cors");


const { getJuego, getJuegoById } = require ("../controlador/juego.controlador.js")

app.use(cors());

app.get("/", getJuego )

app.get("/:id" , getJuegoById)


app.listen( puerto , ()=>{
    console.log(`Servidor encendido y funcionando de manera correcta.`);
    console.log(`Servidor ${puerto} activo. `);

});