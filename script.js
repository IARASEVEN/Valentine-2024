// Selecciona el elemento con el id "mensaje"
var mensajeElemento = document.getElementById("mensaje");

// Cambia el contenido del elemento
mensajeElemento.innerHTML = "Will you be my Valentine? <3";

function responder(respuesta) {


    // Agregar lógica condicional para mostrar el mensaje2 si la respuesta es 'No'
    if (respuesta === 'No') {
        document.getElementById("mensaje2").innerHTML = "No puedes...";
        document.getElementById("mensaje").innerHTML = "Will you be my Valentine? <3";
            // Obtén el botón "No"

        var botonNo = document.getElementById("btnNo");

        // Genera coordenadas aleatorias para la posición
        var nuevaPosicionX = Math.floor(Math.random() * window.innerWidth);
        var nuevaPosicionY = Math.floor(Math.random() * window.innerHeight);

        // Aplica las nuevas coordenadas al estilo del botón "No"
        botonNo.style.position = "absolute";
        botonNo.style.left = nuevaPosicionX + "px";
        botonNo.style.top = nuevaPosicionY + "px";

    } else {
        // Limpiar el mensaje2 si la respuesta no es 'No'
        document.getElementById("mensaje2").innerHTML = "";
        document.getElementById("mensaje").innerHTML = "14/02/2024 en tu casita, te amooo :)";
        btnSi.parentNode.removeChild(btnSi);
        btnNo.parentNode.removeChild(btnNo);
        document.getElementById("contenedorImagen").style.display = "block";
    }
}


