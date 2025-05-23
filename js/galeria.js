//GALERIA INTERACTIVA DE IMAGENES\\
document.addEventListener("DOMContentLoaded", function () {

})
const galeria = document.getElementById("galeria")
const contenedor = document.createElement("article")

const botonAgregarImagen = document.getElementById("agregar-imagen")
botonAgregarImagen.addEventListener("click", function agregarImagen() {
    const url = document.getElementById("url-imagen").value
    if (url) {
        const img = document.createElement("img")
        img.src = url
        img.alt = "Imagen de galería"
        img.id = "imagen-generada"
        img.style.setProperty("width", "10rem")
        img.style.setProperty("height", "auto")
        img.style.setProperty("margin-left", "0.5rem")
        img.style.setProperty("margin-right", "0.5rem")
        img.style.setProperty("border", "0.5rem solid var(--color-de-borde)")
        img.style.setProperty("border-radius", "1rem")
        contenedor.appendChild(img)
        galeria.appendChild(contenedor)
    } else {
        alert("introduce una url valida")
    }
    document.getElementById("url-imagen").value = ""
})

const botonEliminarImagen = document.getElementById("eliminar-imagen")
botonEliminarImagen.addEventListener("click", function eliminarImagen() {
    const imagen = document.getElementById("imagen-generada")
    contenedor.removeChild(imagen)
})