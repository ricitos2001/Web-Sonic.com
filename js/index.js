function activarModoOscuro() {
    let main_body = document.body;
    main_body.classList.toggle("modo-oscuro");
    if (document.getElementById('checkitem').checked) {
        console.log("checked");
    } else {
        console.log("NOT checked");
    }
}

/*
let eliminarLabel = document.querySelector(".cabecera__modo-oscuro")
let eliminarBoton = document.querySelector(".cabecera__boton-modo-oscuro")
eliminarLabel.remove()
eliminarBoton.remove()
*/

/*
let modificarPie = document.querySelector(".pie")
modificarPie.innerHTML = '<h4></h4><img src="../assets/img/copyright.png" alt="Logo" class="pie__copyright" id="pie__copyright"/>'
*/

/*
let agregarTextoPie = document.querySelector("h4")
agregarTextoPie.innerText = 'Pagina web realizada por Cesar Gabriel Ucha Sousa (alias: ricitos2001)'
*/

/*
let modificarPortada = document.querySelector(".cabecera__portada");
modificarPortada.innerHTML = '<img src="../assets/img/ring.png" alt="Ring" class="cabecera__logo"/><h1></h1>';
*/

/*
let agregarTextoPortada = document.querySelector("h1")
agregarTextoPortada.textContent = 'Web-Sonic.com'
*/

/*
let logo2 = document.getElementsByTagName("img")
logo2.setAttribute("class", "cabecera__logo2")

logo2.style.setProperty("width", "5rem");
logo2.style.getPropertyValue("width");

logo2.style.setProperty("height", "5rem");
logo2.style.getPropertyValue("height")

logo2.style.setProperty("padding", "1rem");
logo2.style.getPropertyValue("padding")
*/

/*
console.log(modificarPortada)
console.log(copyrightModoOscuro)
console.log(agregarTextoPortada)
console.log(eliminarBoton)
console.log(logo2)
*/