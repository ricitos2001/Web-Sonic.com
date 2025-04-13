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
15. Aplicar los estilos al formulario 
16. Hacer que la pagina sea responsive 
17. Añadir transicciones 
18. Refactorizar los estilos para obtener un codigo mas limpio 
19. Crear el soporte para el modo oscuro

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
- el contenido del footer se modifica

### ¿Como lo hice?
1. Eliminar el label del boton. 
   - Para ello declaramos una variable con `let` y el nombre que le queramos poner y despues utilizamos el `querySelector` y dentro de los parentesis ponemos el nombre de la clase del label. Quedaria asi: `let elimnarLabel = document.querySelector(".cabecera__modo-oscuro")`
   - Despues utilizamos `remove()` para eliminar el label. Quedaria asi `eliminarLabel.remove()`
2. Eliminar el boton. 
   - Para ello declaramos otra variable con `let` y el nombre que le queramos poner y despues utilizamos el `querySelector` y dentro de los parentesis ponemos el nombre de la clase del boton. Quedaria asi: `let elimnarBoton = document.querySelector(".cabecera__boton-modo-oscuro")`
   - Despues utilizamos otro `remove()` para eliminar el boton. Quedaria asi: `eliminarBoton.remove()`
3. Añadir nueva portada.
   - Para ello declaramos otra variable con `let` y el nombre que le queramos poner y despues utilizamos el `querySelector` y dentro de los parentesis ponemos el nombre de la clase de la cabecera. Quedaria asi: `let modificarPortada = document.queriSelector(".cabecera__portada")`
   - Despues utilizamos la etiqueta `innerHTML` para agregar una etiqueta de imagen y una etiqueta de titulo. Quedaria asi: `modificarPortada.innerHTML = '<img src="../assets/img/ring.png" alt="Ring" class="cabecera__logo"/><h1></h1>'`
   - Declaramos otra variable con `let` y volvemos a utilizar el `querySelector` para seleccionar la etiqueta h1 que hemos creado. Quedaria asi: `let agregarTextoPortada = document.querySelector("h1")`
   - Por ultimo utilizamos la etiqueta `textContent` para añadir texto. Quedaria Asi: `agregarTextoPortada.textContent = 'Web-Sonic.com'`
4. Eliminar contenido del pie de pagina.
   - Para ello declaramos otra variable con `let` y el nombre que le queramos poner y despues utilizamos el `querySelector` y dentro de los parentesis ponemos el nombre de la clase del pie de cabecera. Quedaria asi: `let modificarPie = document.querySelector(".pie")`
   - Declaramos otra variable con `let` y volvemos a utilizar el `querySelector` para seleccionar la etiqueta h4 que esta dentro del footer. Quedaria asi: `let texto = document.querySelector("h4")`
   - Despues utilizamos `removeChild()` para eliminar al h4 que este dentro. Quedaria asi: `modificarPie.removeChild(texto)`
5. Añadir nuevo contenido al pie de pagina
   - Utilizamos la etiqueta `innerHTML` para agregar una etiqueta h4. Quedaria asi: `modificarPie.innerHTML = '<h4></h4>'`
   - Declaramos otra variable con `let` y el nombre que le queramos poner y despues utilizamos el `createElement` y dentro de los parentesis ponemos una etiqueta de imagen para crear asi un elemento de imagen. quedaria Asi: `let img = document.createElement("img")`
   - Asignamos los valores al elemento:
     - Src: `img.src = "../assets/img/copyright.png"`
     - Alt: `img.alt = "Logo"`
     - Nombre de la clase: `img.className = "pie__copyright2"`
   - Asignamos los estilos de la clase con la etiqueta `style`
     - Anchura: `img.style.setProperty("width", "1rem")` y luego `img.style.getPropertyValue("width")`
     - Altura: `img.style.setProperty("height", "1rem")` y luego `img.style.getPropertyValue("height")`
   - Por ultimo utilizamos la etiqueta `appendchild()` para añadir el elemento de imagen al footer. Quedaria asi: `modificarPie.appendChild(img)`

## Nuevos cambios de la parte 3 del proyecto
### modificaciones en el formulario
he modificado el formulario de forma que hace lo siguiente:
1. si el campo nombre esta vacio mostrara un mensaje de error
2. si el campo edad esta vacio mostrara un mensaje de error
3. si el campo fecha esta vacio mostrara un mensaje de error
4. si el campo apodo esta vacio mostrara un mensaje de error
5. si el campo correo esta vacio mostrara un mensaje de error
6. si la contraseña del campo contraseña esta vacio o tiene menos de 8 digitos mostrará un mensaje de error diciendo que debe tener al menos 8 digitos
7. si la contraseña del campo repetir contraseña tiene una contraseña diferente a la que has puesto en el campo contraseña mostrara un mensaje de error
8. si no has aceptado los terminos de privacidad te mostrara un mensaje de error
en caso de que hayas rellenado todos los campos correctamente mostrara un mensaje diciendo que el formulario ha sido enviado con exito

### galeria interactiva agregada
He modificado la página adicional para agregarle una galeria interactiva que nos permite agregar imagenes por url y quitarlas

### filtros en los productos
He modificado la página de productos para añadir una serie de filtros que cambiaran el orden en el que se muestran los productos
1. Mostrar por encima los elementos por defecto con posición par: si pulsas este boton los productos que por defecto tienen una posicion par se mostraran encima y los que tiene una posicion impar se mostraran debajo
2. Mostrar por encima los elementos por defecto con posición impar: si pulsas este boton los productos que por defecto tienen una posicion impar se mostraran encima y los que tiene una posicion par se mostraran debajo
3. Mostrar por orden de lanzamiento: si pulsas este boton se mostrarán los productos en el siguiente orden: del más reciente al más antiguo
4. Restaurar orden por defecto: si pulsas este boton se restaurará el orden por defecto

### pestaña de carrito
He agregado una nueva pagina del carrito en la que podemos almacenar los productos que queramos
1. vamos a la pestaña de productos y accedemos a cualquier producto que queramos
2. cuando hayamos accedido a un producto veremos que aparece un segundo boton en el cual pone `agregar al carrito`
3. si hacemos click en el boton almacenaremos el producto en el carrito
4. vamos a la pestaña de carrito la cual muestra todos los productos que hay y la cantidad del producto que nosotros hayamos seleccionado en el carrito
5. si le damos al boton de eliminar producto eliminaremos el producto de nuestro carrito
6. si nos vamos abajo del todo veremos que hay un bloque en el cual aparece el precio total y la cantidad de prodeuctos seleccionada
7. si le damos a confirmar compra nos aparecera un mensaje que nos dira que la compra ha sido realizada con exito
