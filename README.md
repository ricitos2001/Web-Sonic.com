# Web-Sonic.com
una simple pagina web de sonic

Un archivo README.md con la descripción del proyecto, instrucciones para visualizarlo y cualquier detalle relevante.

## DESCRIPCION DEL PROYECTO
Este proyecto consiste en una pagina web informativa basada en la saga de videojuegos de Sonic el herizo, ademas de algunas curiosidades que estan relaccionadas.

## VISUALIZACION DEL PROYECTO
Para visualizar la pagina web realize los siguientes pasos:
1. Cree la estructura del proyecto. Esto incluye los archivos de HTML y CSS
2. Empece a realizar la estructura base del proyecto en el archivo de tipo HTML utilizando las etiquetas semanticas
3. Aplicar estilos a dichas etiquetas
4. Añadir un titulo y una imagen de logo a la cabecera como portada
5. Añadir estilos a la portada. Esto incluye el titulo y el logo
6. Añadir un menu hamburguesa y añadirle los estilos a dicho menu
7. Añadir contenido al footer
8. Personalizar el estilo del contenido del footer
9. Añadir el contenido en el main de cada pagina
10. Aplicar los estilos en el main de la pagina principal y en el de la pagina adicional
11. Aplicar los estilos en la pagina de productos
12. Crear mas archivos de HTML para cada producto que haya en el main de la pagina de productos
13. Añadir informacion sobre el producto de cada pagina ademas de imagenes visuales
14. Aplicar los estilos de cada una de las paginas de los productos
17. Aplicar los estilos al formulario
15. Hacer que la pagina sea responsive
16. Añadir transicciones
17. Refactorizar los estilos para obtener un codigo mas limpio
18. Crear el soporte para el modo oscuro

Todo el procedimiento lo realize siguiendo la metodologia BEM que consiste en aplicar estilos CSS a todos los elementos de la pagina
Ademas, mientras progresaba iba subiendo commits en un repositorio de github

## DETALLES RELEVANTES
Algunos detalles relevantes que hay en la pagina web son los siguientes:
1. Los mains de cada pagina tienen un formato diferente. Pues las pagina principal y la pagina de contactos stienen la clase "cuerpo1", la pagina de productos y las paginas correspondientes a cada producto tienen la clase "cuerpo2" y la pagina adicional tiene la clase "cuerpo3"
2. Las imagenes tienen diferentes formatos dependiendo de la pagina a las que se le ha asignado excepto la del logo de header y la del copyright del footer que tienen el mismo formato en todaas las paginas
3. el menu hamburguesa aparece si la ventana del navegador es pequeña o si se esta utilizando algun dispositivo movil
4. Cada una de las paginas web de los productos contiene una seccion de otros productos la cual contiene otros productos diferentes
5. El boton oscuro funciona con javascript y al presionar el boton se aplica los estilos de una clase llamada "modo-oscuro"

## Cambios realizados
### Pequeña introduccion a JavaScript
Los lenguajes de script del cliente se ejecutan en un navegador y permiten mejorar las interacciones, el diseño y las funciones de una pagina web
sin tener que comunicarse con el servidor.
algunos de los lenguajes mas usados son: JavaScript (JS), TypeScript (TS), Dart.

existen otros lenguajes de script que pueden ser alternativos o experimentales como CoffeScript, Elm, ReasonML
ademas de lenguajes adaptados al frontend como Python o Ruby

Caracteristicas principales de Javascript
JavaScript es el lenguaje de script mas utilizado y con un amplio soporte ya dia de hoy sigue evolucionando con nuevas versiones de ECMAScript (ES6+) lo cual mantiente este lenguaje como la opcion principal para el desarollo web en el lado del cliente

algunas de sus caracteristicas son:
- Es interpretado y dinámico por lo que se ejecuta directamente en el navegador sin necesidad de compilación.
- Es orientado a objetos lo cual permite crear objetos y heredar de otros sin necesidad de clases.
- Es compatible con HTML y CSS por lo que se puede manipular el DOM y modificar estilos dinámicamente.
- Es multiparadigma por lo que soporta programación imperativa, funcional y orientada a objetos.
- Es Asíncrono y basado en eventos por lo que usa mecanismos como callbacks, promesas y async/await para manejar operaciones no bloqueantes.
- Soportado para módulos por lo que nos permite dividir el código en archivos reutilizables (import/export).
- Es de ecosistema amplio por lo qu tiene una gran cantidad de frameworks y librerías como React, Angular, Vue.js, Node.js.
- Tiene compatibilidad con APIs modernas por lo que puede acceder a funciones como geolocalización, almacenamiento local, manipulación de multimedia y WebSockets.

### Visualizacion de los nuevos elementos del proyecto
He modificado el archivo index.js que esta dentro de la carpeta de Javascript con varios scripts comentados
Si quitas la comentacion estos scripts cambiaran la pagina web de la siguiente manera:
- el gif del anillo se remplaza por una imagen del mismo por lo que deja de estar animado
- el simbolo del copyright pasa a ser de color blanco
- el boton para habilitar el modo oscuro se borra

#### elementos añadidos
los elementos añadidos son los siguientes:
- eliminarBoton: elemento que elimina el boton del moso oscuro
- eliminarLabel: elemento que elimina solo el texto que pone 'activar modo oscruo'
- modificarPie: elemento que remplaza el simbolo del copyrignt negro por un simbolo de color blanco
- agregarTextoPie: elemento que añade texto al pie de pagina. Para ello utiliza la etiqueta `textContent`
- modificarPortada: elemento que modifica la portada remplazando el gif del anillo por una imagen del mismo. Para ello se utiliza la etiqueta `innerHTML` y añadiendo un h1 y se elimina el boton que activa el modo oscuro
- agregarTextoPortada: elemento que agrega un titulo a la pagina web seleccionando el elemento h1 añadido por el elemento modificarPortada. Para ello utiliza la etiqueta `innerText`
- logo2: elemento que modifica los estilos de la imagen del anillo ajustando su tamaño al del gif del anillo sin utilizar css
todos los elementos acceden a los elementos del HTML utilizando `querySelector` y todos ellos se muestran en la consola del navegador mediante el uso del `console.log('nombre del elemento')`

NOTA: recomiendo ir descomentando los elementos desde arriba hasta abajo y no en un orden aleatorio para ver su correcto funcionamiento