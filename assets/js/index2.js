

const obtenerFiguras = async() => {

    try{
        const response = await fetch("https://figuras-1.onrender.com/");
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(`El error es: ${error}`);
    }
}

const crearTarjetas = (figuras) => {

    let figuraRow = document.getElementById("figuraRow");

    figuras.map( ( figura )=> {

    const { id , nombre , descripcion, categoria, valor, imagen : img } = figura;
    
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

    const imagen = document.createElement("img");
    img.src = img;
    img.classList.add("card-img-top");

    const divBody = document.createElement("div");
    divBody.classList.add("card-body");

    const titulo = document.createElement("h5");
    titulo.classList.add("card-title");
    titulo.textContent = nombre; 

    const subTitulo = document.createElement("p");
    subTitulo.classList.add("card-text");
    subTitulo.textContent = valor; 

    const btnMostrar = document.createElement("button");
    btnMostrar.classList.add("btn");
    btnMostrar.classList.add("btn-danger");
    btnMostrar.textContent = "Ver detalles"; 

    divRow.appendChild(card); 

    card.appendChild(imagen);
    card.appendChild(divBody);

    divBody.appendChild(titulo);
    divBody.appendChild(subTitulo);
    divBody.appendChild(btnMostrar);

    figuraRow.appendChild(divRow); 

})
}



obtenerFiguras()
    .then(( figuras )=> {
        crearTarjetas(figuras);
    })
    .catch((error)=> {
        console.log(error);
    })