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

function activarModoOscuro() {
    let main_body = document.body;
    main_body.classList.toggle("modo-oscuro");
    if (document.getElementById('checkitem').checked) {
        console.log("checked");
    } else {
        console.log("NOT checked");
    }
}