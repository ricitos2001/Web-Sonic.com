const carrito = JSON.parse(localStorage.getItem("carrito"))

let contadorProducto1 = 0
let contadorProducto2 = 0
let contadorProducto3 = 0
let contadorProducto4 = 0
let contadorProducto5 = 0
let contadorProducto6 = 0
let contadorProducto7 = 0
let contadorProducto8 = 0

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i] === "Sonic frontiers") {
        contadorProducto1 += 1
    }
    if (carrito[i] === "Sonic x Shadow generations") {
        contadorProducto2 += 1
    }
    if (carrito[i] === "Sonic colors") {
        contadorProducto3 += 1
    }
    if (carrito[i] === "Sonic lost world") {
        contadorProducto4 += 1
    }
    if (carrito[i] === "Sonic unleashed") {
        contadorProducto5 += 1
    }
    if (carrito[i] === "Sonic mania") {
        contadorProducto6 += 1
    }
    if (carrito[i] === "Sonic superstars") {
        contadorProducto7 += 1
    }
    if (carrito[i] === "Sonic forces") {
        contadorProducto8 += 1
    }
}

const contador1 = document.getElementById("contador1")
contador1.textContent = "cantidad seleccionada: "  + contadorProducto1
const contador2 = document.getElementById("contador2")
contador2.textContent = "cantidad seleccionada: "  + contadorProducto2
const contador3 = document.getElementById("contador3")
contador3.textContent = "cantidad seleccionada: "  + contadorProducto3
const contador4 = document.getElementById("contador4")
contador4.textContent = "cantidad seleccionada: "  + contadorProducto4
const contador5 = document.getElementById("contador5")
contador5.textContent = "cantidad seleccionada: "  + contadorProducto5
const contador6 = document.getElementById("contador6")
contador6.textContent = "cantidad seleccionada: "  + contadorProducto6
if (contadorProducto6 > 0) {
    contador6.textContent = "cantidad seleccionada: "  + contadorProducto6

} else {
    contador6.textContent = "cantidad seleccionada: 0"
}
const contador7 = document.getElementById("contador7")
if (contadorProducto7 > 0) {
    contador7.textContent = "cantidad seleccionada: "  + contadorProducto7

} else {
    contador7.textContent = "cantidad seleccionada: 0"
}
const contador8 = document.getElementById("contador8")
if (contadorProducto8 > 0) {
    contador8.textContent = "cantidad seleccionada: "  + contadorProducto8

} else {
    contador8.textContent = "cantidad seleccionada: 0"
}

const boton1 = document.getElementById("boton-producto1")
boton1.addEventListener("click", function eliminarProducto() {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i] === "Sonic frontiers") {
            carrito.splice(i, 1)
            i--;
            break
        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    window.location.reload();
})

const boton2 = document.getElementById("boton-producto2")
boton2.addEventListener("click", function eliminarProducto() {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i] === "Sonic x Shadow generations") {
            carrito.splice(i, 1)
            i--;
            break
        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    window.location.reload();
})

const boton3 = document.getElementById("boton-producto3")
boton3.addEventListener("click", function eliminarProducto() {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i] === "Sonic colors") {
            carrito.splice(i, 1)
            i--;
            break
        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    window.location.reload();
})

const boton4 = document.getElementById("boton-producto4")
boton4.addEventListener("click", function eliminarProducto() {

    carrito.filter((posicion, index) => index !== posicion)

    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i] === "Sonic lost world") {
            carrito.splice(i, 1)
            i--;
            break
        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    window.location.reload();
})

const boton5 = document.getElementById("boton-producto5")
boton5.addEventListener("click", function eliminarProducto() {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i] === "Sonic unleashed") {
            carrito.splice(i, 1)
            i--;
            break
        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    window.location.reload();
})

const boton6 = document.getElementById("boton-producto6")
boton6.addEventListener("click", function eliminarProducto() {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i] === "Sonic mania") {
            carrito.splice(i, 1)
            i--;
            break
        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    window.location.reload();
})

const boton7 = document.getElementById("boton-producto7")
boton7.addEventListener("click", function eliminarProducto() {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i] === "Sonic superstars") {
            carrito.splice(i, 1)
            i--;
            break
        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    window.location.reload();
})

const boton8 = document.getElementById("boton-producto8")
boton8.addEventListener("click", function eliminarProducto() {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i] === "Sonic forces") {
            carrito[i].splice()
            break
        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    window.location.reload();
})

const precioProducto1 = document.getElementById("precio-producto1").textContent
const precioPorCantidadProducto1 = precioProducto1 * contadorProducto1
const precioProducto2 = document.getElementById("precio-producto2").textContent
const precioPorCantidadProducto2 = precioProducto2 * contadorProducto2
const precioProducto3 = document.getElementById("precio-producto3").textContent
const precioPorCantidadProducto3 = precioProducto3 * contadorProducto3
const precioProducto4 = document.getElementById("precio-producto4").textContent
const precioPorCantidadProducto4 = precioProducto4 * contadorProducto4
const precioProducto5 = document.getElementById("precio-producto5").textContent
const precioPorCantidadProducto5 = precioProducto5 * contadorProducto5
const precioProducto6 = document.getElementById("precio-producto6").textContent
const precioPorCantidadProducto6 = precioProducto6 * contadorProducto6
const precioProducto7 = document.getElementById("precio-producto7").textContent
const precioPorCantidadProducto7 = precioProducto7 * contadorProducto7
const precioProducto8 = document.getElementById("precio-producto8").textContent
const precioPorCantidadProducto8 = precioProducto8 * contadorProducto8


const cantidadTotal = document.getElementById("cantidad-total")
const sumaCantidad = contadorProducto1 + contadorProducto2 + contadorProducto3 + contadorProducto4 + contadorProducto5 + contadorProducto6 + contadorProducto7 + contadorProducto8
cantidadTotal.textContent = sumaCantidad.toString()

const precioTotal = document.getElementById("precio-total")
const sumaPrecios = precioPorCantidadProducto1 + precioPorCantidadProducto2 + precioPorCantidadProducto3 + precioPorCantidadProducto4 + precioPorCantidadProducto5 + precioPorCantidadProducto6 + precioPorCantidadProducto7 + precioPorCantidadProducto8
precioTotal.innerHTML = sumaPrecios.toString()

