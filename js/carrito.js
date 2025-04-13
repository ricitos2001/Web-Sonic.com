let carrito = JSON.parse(localStorage.getItem("carrito"))

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

let contador1 = document.getElementById("contador1")
contador1.textContent = "cantidad seleccionada: "  + contadorProducto1
let contador2 = document.getElementById("contador2")
contador2.textContent = "cantidad seleccionada: "  + contadorProducto2
let contador3 = document.getElementById("contador3")
contador3.textContent = "cantidad seleccionada: "  + contadorProducto3
let contador4 = document.getElementById("contador4")
contador4.textContent = "cantidad seleccionada: "  + contadorProducto4
let contador5 = document.getElementById("contador5")
contador5.textContent = "cantidad seleccionada: "  + contadorProducto5
let contador6 = document.getElementById("contador6")
contador6.textContent = "cantidad seleccionada: "  + contadorProducto6
if (contadorProducto6 > 0) {
    contador6.textContent = "cantidad seleccionada: "  + contadorProducto6

} else {
    contador6.textContent = "cantidad seleccionada: 0"
}
let contador7 = document.getElementById("contador7")
if (contadorProducto7 > 0) {
    contador7.textContent = "cantidad seleccionada: "  + contadorProducto7

} else {
    contador7.textContent = "cantidad seleccionada: 0"
}
let contador8 = document.getElementById("contador8")
if (contadorProducto8 > 0) {
    contador8.textContent = "cantidad seleccionada: "  + contadorProducto8

} else {
    contador8.textContent = "cantidad seleccionada: 0"
}

let boton1 = document.getElementById("boton-producto1")
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

let boton2 = document.getElementById("boton-producto2")
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

let boton3 = document.getElementById("boton-producto3")
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

let boton4 = document.getElementById("boton-producto4")
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

let boton5 = document.getElementById("boton-producto5")
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

let boton6 = document.getElementById("boton-producto6")
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

let boton7 = document.getElementById("boton-producto7")
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

let boton8 = document.getElementById("boton-producto8")
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

let precioProducto1 = document.getElementById("precio-producto1").textContent
let precioPorCantidadProducto1 = precioProducto1 * contadorProducto1
let precioProducto2 = document.getElementById("precio-producto2").textContent
let precioPorCantidadProducto2 = precioProducto2 * contadorProducto2
let precioProducto3 = document.getElementById("precio-producto3").textContent
let precioPorCantidadProducto3 = precioProducto3 * contadorProducto3
let precioProducto4 = document.getElementById("precio-producto4").textContent
let precioPorCantidadProducto4 = precioProducto4 * contadorProducto4
let precioProducto5 = document.getElementById("precio-producto5").textContent
let precioPorCantidadProducto5 = precioProducto5 * contadorProducto5
let precioProducto6 = document.getElementById("precio-producto6").textContent
let precioPorCantidadProducto6 = precioProducto6 * contadorProducto6
let precioProducto7 = document.getElementById("precio-producto7").textContent
let precioPorCantidadProducto7 = precioProducto7 * contadorProducto7
let precioProducto8 = document.getElementById("precio-producto8").textContent
let precioPorCantidadProducto8 = precioProducto8 * contadorProducto8


let cantidadTotal = document.getElementById("cantidad-total")
let sumaCantidad = contadorProducto1 + contadorProducto2 + contadorProducto3 + contadorProducto4 + contadorProducto5 + contadorProducto6 + contadorProducto7 + contadorProducto8
cantidadTotal.textContent = sumaCantidad.toString()

let precioTotal = document.getElementById("precio-total")
let sumaPrecios = precioPorCantidadProducto1 + precioPorCantidadProducto2 + precioPorCantidadProducto3 + precioPorCantidadProducto4 + precioPorCantidadProducto5 + precioPorCantidadProducto6 + precioPorCantidadProducto7 + precioPorCantidadProducto8
precioTotal.innerHTML = sumaPrecios.toString()

