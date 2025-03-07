function activarModoOscuro() {
    let main_body = document.body;
    main_body.classList.toggle("modo-oscuro");
    if (document.getElementById('checkitem').checked) {
        console.log("checked");
    } else {
        console.log("NOT checked");
    }
}

// MODIFICAR EL CONTENIDO Y ATRIBUTOS DE ELEMENTOS EXISTENTES
let eliminarPortada = document.querySelector(".cabecera__portada");
eliminarPortada.innerHTML = '<img src="../assets/img/ring.png" alt="Ring" class="cabecera__logo"><h1></h1>';

// CREAR Y AÑADIR NUEVOS ELEMENTOS DINAMICAMENTE
let agregarTexto = document.querySelector("h1")
agregarTexto.innerText = 'Web-Sonic.com'

// ELIMINAR ELEMENTOS DE LA PAGINA SEGUN CRITERIOS ESPECIFICOS\\
let eliminarLabel = document.querySelector(".cabecera__modo-oscuro")
let eliminarBoton = document.querySelector(".cabecera__boton-modo-oscuro")

eliminarLabel.remove()
eliminarBoton.remove()

// MANIPULAR ESTILOS DIRECTAMENTE USANDO JAVASCRIPT // [COMPLETADO]
let logo2 = document.querySelector(".cabecera__logo")
logo2.setAttribute("class", "cabecera__logo2")

logo2.style.setProperty("width", "5rem");
logo2.style.setProperty("height", "5rem");
logo2.style.setProperty("padding", "1rem");

logo2.style.getPropertyValue("width");
logo2.style.getPropertyValue("height")
logo2.style.getPropertyValue("padding")

// SELECCIONAR Y ACCEDER A ELEMENTOS DEL DOCUMENTO
console.log(eliminarPortada)
console.log(agregarTexto)
console.log(eliminarLabel)
console.log(eliminarBoton)
console.log(logo2)

/*
Los lenguajes de script del cliente se ejecutan en un navegador y permiten mejorar las interacciones, el diseño y las funciones de una pagina web
sin tener que comunicarse con el servidor.
algunos de los lenguajes mas usados son: JavaScript (JS), TypeScript (TS), Dart.

existen otros lenguajes de script que pueden ser alternativos o experimentales como CoffeScript, Elm, ReasonML
ademas de lenguajes adaptados al frontend como Python o Ruby

Caracteristicas principales de Javascript
JavaScript es el lenguaje de script mas utilizado y con un amplio soporte ya dia de hoy sigue evolucionando con nuevas versiones de ECMAScript (ES6+) lo cual mantiente este lenguaje como la opcion principal para el desarollo web en el lado del cliente

algunas de sus caracteristicas son:
    Es interpretado y dinámico por lo que se ejecuta directamente en el navegador sin necesidad de compilación.
    Es orientado a objetos lo cual permite crear objetos y heredar de otros sin necesidad de clases.
    Es compatible con HTML y CSS por lo que se puede manipular el DOM y modificar estilos dinámicamente.
    Es multiparadigma por lo que soporta programación imperativa, funcional y orientada a objetos.
    Es Asíncrono y basado en eventos por lo que usa mecanismos como callbacks, promesas y async/await para manejar operaciones no bloqueantes.
    Soportado para módulos por lo que nos permite dividir el código en archivos reutilizables (import/export).
    Es de ecosistema amplio por lo qu tiene una gran cantidad de frameworks y librerías como React, Angular, Vue.js, Node.js.
    Tiene compatibilidad con APIs modernas por lo que puede acceder a funciones como geolocalización, almacenamiento local, manipulación de multimedia y WebSockets.
*/