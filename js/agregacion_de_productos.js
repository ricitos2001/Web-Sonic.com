let botonCarrito = document.getElementById("añadir-al-carrito")

botonCarrito.addEventListener("click", function agregarAlCarrito() {
    let nombre = document.getElementById("nombre-producto").textContent
    let carritoProductos = JSON.parse(localStorage.getItem("carrito"))
    let listaProductos = []
    let carrito = carritoProductos || listaProductos
    carrito.push(nombre)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    localStorage.removeItem("nombre")
})