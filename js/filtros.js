// SISTEMA QUE FILTRE EL CONTENIDO DE LA PAGINA WEB\\
const cajaProductos1 = document.getElementById("caja-productos1")
const cajaProductos2 = document.getElementById("caja-productos2")
const cajaProductos3 = document.getElementById("caja-productos3")
const cajaProductos4 = document.getElementById("caja-productos4")
const producto1 = document.getElementById("producto-1")
const producto2 = document.getElementById("producto-2")
const producto3 = document.getElementById("producto-3")
const producto4 = document.getElementById("producto-4")
const producto5 = document.getElementById("producto-5")
const producto6 = document.getElementById("producto-6")
const producto7 = document.getElementById("producto-7")
const producto8 = document.getElementById("producto-8")

let filtro1 = document.getElementById("filtro1")
filtro1.addEventListener("change", function mostrarProductosConPosicionImpar() {
    if (filtro1.checked)  {
        if (filtro2.checked) {
            filtro2.checked = false
            eliminarElementosPares()
        } else if (filtro3.checked) {
            filtro3.checked = false
            eliminarOrdenPorPopularidad()
        } else if (filtro4.checked) {
            filtro4.checked = false
            eliminarOrdenPorDefecto()
        } else {
            eliminarOrdenPorDefecto()
        }
        agregarElementosImpares()
    } else {
        eliminarElementosImpares()
        agregarOrdenPorDefecto()
    }
})

let filtro2 = document.getElementById("filtro2")
filtro2.addEventListener("change", function mostrarProductosConPosicionPar() {
    if (filtro2.checked) {
        if (filtro1.checked) {
            filtro1.checked = false
            eliminarElementosImpares()
        } else if (filtro3.checked) {
            filtro3.checked = false
            eliminarOrdenPorPopularidad()
        } else if (filtro4.checked) {
            filtro4.checked = false
            eliminarOrdenPorDefecto()
        } else {
            eliminarOrdenPorDefecto()
        }
        agregarElementosPares()
    } else {
        eliminarElementosPares()
        agregarOrdenPorDefecto()
    }
})

let filtro3 = document.getElementById("filtro3")
filtro3.addEventListener("change", function filtarPorOrdenDePopularidad() {
    if (filtro3.checked) {
        if (filtro1.checked) {
            filtro1.checked = false
            eliminarElementosImpares()
        } else if (filtro2.checked) {
            filtro2.checked = false
            eliminarElementosPares()
        } else if (filtro4.checked) {
            filtro4.checked = false
            eliminarOrdenPorDefecto()
        } else {
            eliminarOrdenPorDefecto()
        }
        agregarOrdenPorPopularidad()
    } else {
        eliminarOrdenPorPopularidad()
        agregarOrdenPorDefecto()
    }
})

let filtro4 = document.getElementById("filtro4")
filtro4.addEventListener("change", function filtrarPorFechaDeLanzamiento() {
    if (filtro4.checked) {
        if (filtro1.checked) {
            filtro1.checked = false
            eliminarElementosImpares()
        } else if (filtro2.checked) {
            filtro2.checked = false
            eliminarElementosPares()
        } else if (filtro3.checked) {
            filtro3.checked = false
            eliminarOrdenPorPopularidad()
        }
        agregarOrdenPorDefecto()
        filtro4.checked = false
    }
})

function agregarOrdenPorDefecto() {
    cajaProductos1.appendChild(producto1)
    cajaProductos1.appendChild(producto2)
    cajaProductos2.appendChild(producto3)
    cajaProductos2.appendChild(producto4)
    cajaProductos3.appendChild(producto5)
    cajaProductos3.appendChild(producto6)
    cajaProductos4.appendChild(producto7)
    cajaProductos4.appendChild(producto8)
}

function eliminarOrdenPorDefecto() {
    cajaProductos1.removeChild(producto1)
    cajaProductos1.removeChild(producto2)
    cajaProductos2.removeChild(producto3)
    cajaProductos2.removeChild(producto4)
    cajaProductos3.removeChild(producto5)
    cajaProductos3.removeChild(producto6)
    cajaProductos4.removeChild(producto7)
    cajaProductos4.removeChild(producto8)
}

function agregarElementosPares() {
    cajaProductos1.appendChild(producto2)
    cajaProductos1.appendChild(producto4)
    cajaProductos2.appendChild(producto6)
    cajaProductos2.appendChild(producto8)
    cajaProductos3.appendChild(producto1)
    cajaProductos3.appendChild(producto3)
    cajaProductos4.appendChild(producto5)
    cajaProductos4.appendChild(producto7)
}

function eliminarElementosPares() {
    cajaProductos1.removeChild(producto2)
    cajaProductos1.removeChild(producto4)
    cajaProductos2.removeChild(producto6)
    cajaProductos2.removeChild(producto8)
    cajaProductos3.removeChild(producto1)
    cajaProductos3.removeChild(producto3)
    cajaProductos4.removeChild(producto5)
    cajaProductos4.removeChild(producto7)
}

function agregarElementosImpares() {
    cajaProductos1.appendChild(producto1)
    cajaProductos1.appendChild(producto3)
    cajaProductos2.appendChild(producto5)
    cajaProductos2.appendChild(producto7)
    cajaProductos3.appendChild(producto2)
    cajaProductos3.appendChild(producto4)
    cajaProductos4.appendChild(producto6)
    cajaProductos4.appendChild(producto8)
}

function eliminarElementosImpares() {
    cajaProductos1.removeChild(producto1)
    cajaProductos1.removeChild(producto3)
    cajaProductos2.removeChild(producto5)
    cajaProductos2.removeChild(producto7)
    cajaProductos3.removeChild(producto2)
    cajaProductos3.removeChild(producto4)
    cajaProductos4.removeChild(producto6)
    cajaProductos4.removeChild(producto8)
}

function agregarOrdenPorPopularidad() {
    cajaProductos1.appendChild(producto2)
    cajaProductos1.appendChild(producto7)
    cajaProductos2.appendChild(producto1)
    cajaProductos2.appendChild(producto8)
    cajaProductos3.appendChild(producto6)
    cajaProductos3.appendChild(producto4)
    cajaProductos4.appendChild(producto3)
    cajaProductos4.appendChild(producto5)
}

function eliminarOrdenPorPopularidad() {
    cajaProductos1.removeChild(producto2)
    cajaProductos1.removeChild(producto7)
    cajaProductos2.removeChild(producto1)
    cajaProductos2.removeChild(producto8)
    cajaProductos3.removeChild(producto6)
    cajaProductos3.removeChild(producto4)
    cajaProductos4.removeChild(producto3)
    cajaProductos4.removeChild(producto5)
}

