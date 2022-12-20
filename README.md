# Peligro en Hogwarts

## Índice

* [1. Uso de la aplicación](#1-Introducción)
* [2. Potenciales usuarios](#2-potenciales-usuarios)
* [3. Objetivo de la aplicación](#3-objetivo-de-la-aplicación)
* [4. Problemas que resuelve la aplicación](#4-problemas-que-resuelve-la-aplicación)
* [5. Diseño](#5-Diseño)
* [6. Hito: Criterios de aceptación mínimos del proyecto](#6-hito-criterios-de-aceptación-mínimos-del-proyecto)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Objetivos de aprendizaje](#8-objetivos-de-aprendizaje)
* [9. Para considerar Project Feedback](#9-para-considerar-project-feedback)

***
## 1. Uso de la aplicación

La aplicación consta de un panel que le permite ingresar al usuario el mensaje que quiere cifrar o descifrar y un par de botones para dichas funciones. Un segundo panel le muestra el contenido del cifrado/descifrado en el cual no puede ingresar datos gracias al readonly. 
Considerando que la app no tiene soporte para minúsculas, con toUpperCase se realiza conversión automática de minúsculas a mayúsculas.

## 2. Potenciales usuarios

La aplicación está enfocada al entretenimiento y se considera que podría ser incluida en alguno de los acertijos propios de los juegos de scape room para fanáticos de la saga de Harry Potter.

## 3. Objetivo de la aplicación

La aplicación permite cifrar y descifrar mensajes que los muggles quieran utilizar para salir del cuarto. Este mensaje podría introducirse en algún candado que abra una puerta, como es propio de los scape room. 

## 4. Problemas que resuelve la aplicación

Los scape rooms se caracterizan por presentar desafíos a los participantes para abrir candados y finalmente,
poder salir de un cuarto donde se encuentran atrapados. La aplicación para codificar o decodificar un mensaje puede ser una alternativa para interactuar en alguno de los retos haciendo parte de una acción más compleja. Es
decir, el usuario podría identificar en una interfaz los caracteres que formen parte del mensaje a decodificar 
y al introducirlos a la aplicación, encontraría un mensaje que le permita abrir un candado y continuar con el 
reto de escapar.

## 5. Diseño

En un principio se pensó en que dentro de la interfaz se encontraran pistas para introducir el mensaje a descifrar; sin embargo, con el fin de implementar ambas funciones, se simplificó el diseño y a partir de una instrucción simple, se pretende que la usuaria codifique y decodifique mensajes a libre elección.

![Boceto](/src/boceto.jpg)

## 6. Hito: Criterios de aceptación mínimos del proyecto

* Se encuentra una interfaz que le permite a la usuaria insertar el mensaje de texto que quiere cifrar.
Para ello se hace uso de las mayúsculas y no se incluye la ñ. De igual manera, se le permite elegir un
número de desplazamiento que es entero y positivo. Finalmente en la interfaz se puede ver el resultado
del mensaje cifrado.

* De la misma manera se puede descifrar el mensaje introducido por la usuaria, en las mismas condiciones
que el cifrado. En la interfaz se puede ver el resultado del mensaje que se ha descifrado.

* A los metódos de `cipher` (`encode` y `decode`) se les han realizado pruebas unitarias.

* El código final se encuentra subido en un repositorio en GitHub y la interfaz o página web está "desplegada" usando GitHub Pages.

* Como hito opcional se considera el soporte para otros caracteres, específicamente el espacio. Para ello, se habilitan las líneas de código correspondientes en el cipher.spec.js.

## 7. Consideraciones técnicas

* `README.md`: debe explicar la información necesaria para el uso de
  tu aplicación web, así como una introducción a la aplicación,
  su funcionalidad y decisiones de diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/style.css`: este archivo debe contener las reglas de estilo.
  Queremos que escribas tus propias reglas, por eso NO está permitido el uso
  de frameworks de CSS (Bootstrap, Materialize, etc).
* `src/cipher.js`: acá debes implementar el objeto `cipher`, el cual ya está
  _exportado_ en el _boilerplate_. Este objeto (`cipher`) debe contener dos
  métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.

## 8. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/02-html5/02-semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/01-css/01-intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

### Web APIs

- [ ] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/02-dom/03-1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
</p></details>

- [ ] **Manipulación dinámica del DOM**

  <details><summary>Links</summary><p>

  * [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [ ] **Tipos de datos primitivos**

  <details><summary>Links</summary><p>

  * [Valores primitivos - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures#valores_primitivos)
</p></details>

- [ ] **Strings (cadenas de caracteres)**

  <details><summary>Links</summary><p>

  * [Strings](https://curriculum.laboratoria.la/es/topics/javascript/06-strings)
  * [String — Cadena de caracteres - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
</p></details>

- [ ] **Variables (declaración, asignación, ámbito)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/01-values-variables-and-types)
  * [Variables](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/02-variables)
</p></details>

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/02-loops)
  * [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [ ] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

### Centrado en el usuario

- [ ] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] **Seguir los principios básicos de diseño visual**

## 9. Para considerar Project Feedback

En resumen, los criterios de aceptación mínimos del proyecto para considerar
Project Feedback:

* [ ] Tiene una interfaz que permite a la usuaria cifrar y descifrar.
* [ ] El proyecto será entregado incluyendo pruebas unitarios de los métodos de `cipher`
(`encode` y `decode`).
* [ ] El proyecto será entregado libre de _errores_ de `eslint` (_warnings_ son ok).
* [ ] El proyecto será entregado subiendo tu código a GitHub.
* [ ] La interfaz será "desplegada" usando GitHub Pages.
* [ ] El README contiene una definición del producto.
