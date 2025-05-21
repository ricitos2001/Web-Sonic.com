//FUNCIONES PARA HACER QUE EL FORMULARIO SEA FUNCIONAL Y TENGA VALIDACION DINAMICA\\
const envio = document.getElementById("envio")
envio.addEventListener("click", function verificarDatos(event) {
    event.preventDefault()
    const nombre = document.getElementById("nombre")
    const edad = document.getElementById("edad")
    const fechaDeNacimiento = document.getElementById("fecha-de-nacimiento")
    const apodo = document.getElementById("apodo")
    const correo = document.getElementById("correo")
    const password = document.getElementById("contraseña")
    const repeatPassword = document.getElementById("repetir-contraseña")
    const terminos = document.getElementById("terminos")
    if ((nombre.value === "") || (edad.value === "") || (fechaDeNacimiento.value === "") || (apodo.value === "") || (correo.value === "") || (password.value === "") || (repeatPassword.value !== password.value) || (terminos.checked === false)) {
        const textoNombre = document.getElementById("texto-nombre")
        const textoEdad = document.getElementById("texto-edad")
        const textoFecha = document.getElementById("texto-fecha")
        const textoApodo = document.getElementById("texto-apodo")
        const textoCorreo = document.getElementById("texto-correo")
        const textoPassword = document.getElementById("texto-contraseña")
        const textoRepeatPassword = document.getElementById("texto-repetir-contraseña")
        const textoTerminos = document.getElementById("texto-terminos")
        if (nombre.value === "") {
            textoNombre.style.setProperty("margin", "1rem")
            textoNombre.style.setProperty("font-weight", "normal")
            textoNombre.style.setProperty("color", "red")
            textoNombre.innerText = "debes introducir tu nombre y apellidos"
        } else {
            textoNombre.innerText = ""
        }
        if (edad.value === "") {
            textoEdad.style.setProperty("margin", "1rem")
            textoEdad.style.setProperty("font-weight", "normal")
            textoEdad.style.setProperty("color", "red")
            textoEdad.innerText = "debes introducir tu edad"
        } else {
            textoEdad.innerText = ""
        }
        if (fechaDeNacimiento.value === "") {
            textoFecha.style.setProperty("margin", "1rem")
            textoFecha.style.setProperty("font-weight", "normal")
            textoFecha.style.setProperty("color", "red")
            textoFecha.innerText = "debes introducir tu fecha de nacimiento"
        } else {
            textoFecha.innerText = ""
        }
        if (apodo.value === "") {
            textoApodo.style.setProperty("margin", "1rem")
            textoApodo.style.setProperty("font-weight", "normal")
            textoApodo.style.setProperty("color", "red")
            textoApodo.innerText = "debes introducir un apodo o alias"
        } else {
            textoApodo.innerText = ""
        }
        if (correo.value === "") {
            textoCorreo.style.setProperty("margin", "1rem")
            textoCorreo.style.setProperty("font-weight", "normal")
            textoCorreo.style.setProperty("color", "red")
            textoCorreo.innerText = "debes introducir tu correo electronico"
        } else {
            textoCorreo.innerText = ""
        }
        if (password.value.length !== 8) {
            textoPassword.style.setProperty("margin", "1rem")
            textoPassword.style.setProperty("font-weight", "normal")
            textoPassword.style.setProperty("color", "red")
            textoPassword.innerText = "la contraseña debe ser de 8 digitos"
        } else {
            textoPassword.innerText = ""
        }

        if (repeatPassword === password.value) {
            textoRepeatPassword.style.setProperty("margin", "1rem")
            textoRepeatPassword.style.setProperty("font-weight", "normal")
            textoRepeatPassword.style.setProperty("color", "red")
            textoRepeatPassword.innerText = "las contraseñas no coinciden"
        } else {
            textoRepeatPassword.innerText = ""
        }
        if (terminos.checked === false) {
            textoTerminos.style.setProperty("margin", "1rem")
            textoTerminos.style.setProperty("font-weight", "normal")
            textoTerminos.style.setProperty("color", "red")
            textoTerminos.innerText = "debes aceptar los terminos de privacidad y condiciones de servicio"
        } else {
            textoTerminos.innerText = ""
        }
    } else {
        alert("formulario enviado")
    }
})
