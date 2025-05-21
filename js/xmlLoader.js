

const caja = document.getElementById("galeria")

const p = document.createElement("p")

fetch("./xml/archivo.xml").then(response => response.text()).then(data => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "application/xml");


    function xmlToJson(xml) {
        const obj = {};
        for (let node of xml.children) {
            // Guardamos el nombre del nodo como clave y su contenido como valor
            obj[node.nodeName] = node.textContent;
        }
        return obj;
    }
    console.log(JSON.stringify(xmlToJson(xmlDoc.documentElement)))
    p.innerText = "datos del piso: " + JSON.stringify(xmlToJson(xmlDoc.documentElement))


}).catch(error => console.error("error al obtener los datos:", error))


caja.appendChild(p)