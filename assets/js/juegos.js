//paso 2

const obtenerJuegos = async()=> {
    try{
        const response = await fetch("https://api-videojuegos-z7yg.onrender.com/");
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(`El error es: ${error}`);
    }
}
//paso 3
const crearTargetas = (juegos)=> {
    let JuegosRow = document.getElementById("JuegosRow");

    juegos.map((juego)=>{
        //console.log(JSON.stringify(juego)); 
        const { id, nombre, Género, añodelanzamiento, descripcion, Clasificación, precio, imagen : img  } = juego;
        const divRow = document.createElement("div");
        divRow.classList.add("col-xl-3");
        divRow.classList.add("col-lg-3");
        divRow.classList.add("col-md-3");
        divRow.classList.add("col-sm-12");
        divRow.classList.add("col-xs-12");
        divRow.classList.add("mt-2");
        divRow.classList.add("mb-2");

        const card = document.createElement("div");
        card.classList.add("card");

        const imagen = document.createElement("imagen")
        imagen.src = img;
        imagen.classList.add("card-img-top");

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const titulo = document.createElement("h5");
        titulo.classList.add("card-title");
        titulo.textContent = nombre;

        const titulo2 = document.createElement("h5");
        titulo.classList.add("card-title");
        titulo.textContent = genero;

        const titulo3 = document.createElement("h5");
        titulo.classList.add("card-title");
        titulo.textContent = descripcion;

        const titulo4 = document.createElement("h5");
        titulo.classList.add("card-title");
        titulo.textContent = Clasificación;

        const subTitulo = document.createElement("p");
        subTitulo.classList.add("card-text");
        subTitulo.textContent = precio;

        const btnMostrar = document.createElement("button");
        btnMostrar.classList.add("btn");
        btnMostrar.classList.add("btn-danger");
        btnMostrar.textContent = "ver detalles";

        divRow.appendChild(card);

        card.appendChild(imagen);
        card.appendChild(divbody);

        divBody.appendChild(titulo);
        divBody.appendChild(titulo2);
        divBody.appendChild(titulo3);
        divBody.appendChild(titulo4);
        divBody.appendChild(subTitulo);
        divBody.appendChild(btnMostrar);

        JuegosRow.appendChild(divRow);

    })

}
//paso2 
obtenerJuegos()
    .then((juegos)=>{
        crearTargetas(juegos);
    })
    .catch((error)=>{
        console.log(error);
    })







/*const llamarJuegos = () => {

    return new Promise((resolve, reject)=>{

        fetch("https://api-videojuegos-z7yg.onrender.com/")
        .then((juegos)=> {
            if(!juegos.ok){
                throw new Error("Error");
            }
            return juegos.json();
        })
        .then(( data )=> {
            resolve(data);
        })
        .catch((error)=>{
            console.log(`El error es:${error}`);
        })
    });
}


llamarJuegos()
    .then((juegos) =>{
        juegos.map((juego)=>{
            console.log(juego);
        });
    })
    .catch((error)=>{
        console.log(`El error esta en :${error}`);
    })*/