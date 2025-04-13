document.addEventListener("DOMContentLoaded", function () {
    const botonModoOscuro = document.getElementById("boton-modo-oscuro")
    botonModoOscuro.addEventListener("click", function activarModoOscuro() {
        let main_body = document.body
        main_body.classList.toggle("modo-oscuro")
        if (document.getElementById('checkitem').checked) {
            console.log("checked")
        } else {
            console.log("NOT checked")
        }
    })
})