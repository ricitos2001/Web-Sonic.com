const botonCarrito = document.getElementById("añadir-al-carrito")

botonCarrito.addEventListener("click", function agregarAlCarrito() {
    const nombre = document.getElementById("nombre-producto").textContent
    const carritoProductos = JSON.parse(localStorage.getItem("carrito"))
    const listaProductos = []
    const carrito = carritoProductos || listaProductos
    carrito.push(nombre)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    localStorage.removeItem("nombre")
})