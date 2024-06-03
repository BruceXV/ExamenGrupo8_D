document.getElementById("formLogin").addEventListener("submit",function(e){
    e.preventDefault();

    const email = document.getElementById("correo").value;
    
    var validacionContacto = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (validacionContacto.test(email)){
        alert("Mensaje enviado con exito")
        window.location.href = ("inicio.html")
        
    } else {
        const errorMensaje = document.getElementById("error");
        errorMensaje.textContent = 'Mensaje no enviado.'
    }

});