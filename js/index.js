/*
let eliminarLabel = document.querySelector(".cabecera__modo-oscuro");
let eliminarBoton = document.querySelector(".cabecera__boton-modo-oscuro");
eliminarLabel.remove();
eliminarBoton.remove();

let modificarPortada = document.querySelector(".cabecera__portada");
modificarPortada.innerHTML = '<img src="../assets/img/ring.png" alt="Ring" class="cabecera__logo"/><h1></h1>';

let agregarTextoPortada = document.querySelector("h1");
agregarTextoPortada.textContent = 'Web-Sonic.com';

let modificarPie = document.querySelector(".pie");

let texto = document.querySelector("h4");
modificarPie.removeChild(texto);

modificarPie.innerHTML = '<h4></h4>';
let agregarTextoPie = document.querySelector("h4");
agregarTextoPie.textContent = 'Pagina web realizada por Cesar Gabriel Ucha Sousa (alias: ricitos2001)';

let img = document.createElement("img");
img.src = "../assets/img/copyright.png";
img.alt = "Logo";
img.className = "pie__copyright2";

img.style.setProperty("width", "1rem");
img.style.getPropertyValue("width");

img.style.setProperty("height", "1rem");
img.style.getPropertyValue("height");

modificarPie.appendChild(img);
*/

function activarModoOscuro() {
    let main_body = document.body;
    main_body.classList.toggle("modo-oscuro");
    if (document.getElementById('checkitem').checked) {
        console.log("checked");
    } else {
        console.log("NOT checked");
    }
}

const galeria = document.getElementById("galeria");
const contenedor = document.createElement("article");

let botonAgregarImagen = document.getElementById("agregar-imagen")
botonAgregarImagen.addEventListener("click", function agregarImagen() {
    let url = document.getElementById("url-imagen").value;
    if (url) {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Imagen de galería";
        img.id = "imagen-generada";
        img.style.setProperty("width", "10rem");
        img.style.setProperty("height", "auto");
        img.style.setProperty("margin-left", "0.5rem");
        img.style.setProperty("margin-right", "0.5rem");

        img.style.setProperty("border", "0.5rem solid var(--color-de-borde)");
        img.style.setProperty("border-radius", "1rem")
        contenedor.appendChild(img);
        galeria.appendChild(contenedor);
    } else {
        alert("introduce una url valida");
    }
    document.getElementById("url-imagen").value = "";
})

let botonEliminarImagen = document.getElementById("eliminar-image");
botonEliminarImagen.addEventListener("click", function eliminarImagen() {
    let imagen = document.getElementById("imagen-generada");
    contenedor.removeChild(imagen);
});


//FUNCIONES PARA HACER QUE EL FORMULARIO SEA FUNCIONAL Y TENGA VALIDACION DINAMICA\\
let envio = document.getElementById("envio");
envio.addEventListener("click", function (event) {
    event.preventDefault()
    let nombre = document.getElementById("nombre");
    let edad = document.getElementById("edad");
    let fechaDeNacimiento = document.getElementById("fecha-de-nacimiento");
    let apodo = document.getElementById("apodo");
    let correo = document.getElementById("correo");
    let password = document.getElementById("contraseña");
    let repeatPassword = document.getElementById("repetir-contraseña");
    let terminos = document.getElementById("terminos");
    if (nombre.value === "") {
        alert("debes introducir tu nombre y apellidos");
    } else if (edad.value === "") {
        alert("debes introducir tu edad");
    } else if (fechaDeNacimiento.value === "") {
        alert("debes introducir tu fecha de nacimiento");
    } else if (apodo.value === "") {
        alert("introduce un apodo o alias");
    } else if (correo.value === "") {
        alert("introduce tu correo electronico");
    } else if (password.value.length !== 8) {
        alert("la contraseña debe ser de 8 digitos");
    } else if (repeatPassword !== password.value) {
        alert("las contraseñas no coinciden");
    } else if (terminos.checked) {
        alert("formulario enviado");
    } else {
        alert("debes aceptar los terminos de privacidad y condiciones de servicio");
    }
});





//GALERIA INTERACTIVA DE IMAGENES\\


//SISTEMA QUE FILTRE EL CONTENIDO DE LA PAGINA WEB BUSCANDO UNA PALABRA\\



//CREAR UNA PAGINA DE COMPRA (USO DEL LOCALSTORAGE)\\




/*
* Crear un sistema de galería interactiva donde las imágenes puedan añadirse o eliminarse dinámicamente.
* Diseñar un formulario con validación dinámica que muestre mensajes de error o éxito según la interacción del usuario.
* Implementar un sistema de filtros que permita mostrar u ocultar elementos de la página (por ejemplo, productos o entradas de blog) según criterios seleccionados por el usuario.
* Crear un flujo libre del proyecto. (por ejemplo proceso de incluir productos al carrito de compra.)
* */