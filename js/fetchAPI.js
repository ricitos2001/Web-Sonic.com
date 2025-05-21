fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then(response => response.json()).then(data => {
    console.log("datos del pokemon;", data)
    console.log("nombre: ", data.name)
    console.log("tipo: ", data.types[0].type.name)
    console.log("altura: ", data.height)
    console.log("peso: ", data.weight)
}).catch(error => console.error("error al obtener el pokemon:", error))
