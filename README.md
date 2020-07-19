![banner-header](https://raw.githubusercontent.com/ivvnv/SCL013-burger-queen/master/burger/src/Component/Global/Images/header-readmebq.png)

**Burger Queen** es una progressive web app para el uso interno del personal de un pequeño restaurante de hamburguesas el cual necesita una interfaz en la que puedan tomar pedidos usando una _tablet_, y enviarlos a la cocina para que se preparen ordenada y eficientemente. 


## Índice

* [1. Historias de Usuarios](#1-Historias-de-Usuarios)
* [2. Proceso y decisiones de Diseño](#2-Proceso-y-decisiones-de-Diseño)
* [3. Prototipo baja fidelidad](#3-Prototipo-baja-fidelidad)
* [4. Prototipo alta fidelidad](#4-Prototipo-alta-fidelidad)
* [5. Cómo utilzar la plataforma](#5-Cómo-utilizar-la-plataforma)
* [6. Testeos](#6-Testeos)
* [7. Pruebas Unitarias](#7-Pruebas-Unitarias)
* [8. Checklist](#8-checklist)

***

## 1. Historias de usuario

#### [Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente

Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y que se puedan ir preparando en orden.

#### [Historia de usuario 2] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs que un pedido está listo para servirlo a un cliente.

#### [Historia de usuario 3] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos rápidamente a los clientes que las hicieron.


## 2. Proceso y decisiones de Diseño

El diseño de la app se basó en la limpieza y legibilidad que el personal de Burger Queen necesita para tomar los pedidos de los clientes y mandarlos a la cocina. Como es una aplicación interna no necesita de ayudas visuales, como imágenes de los productos en una carta, por eso es un diseño más bien minimalista pero que conserva la paleta de colores del restaurant.

![bq-paletadecolores](https://raw.githubusercontent.com/ivvnv/SCL013-burger-queen/master/burger/src/Component/Global/Images/bq-paleta.png)

## 3. Prototipo baja fidelidad

![bq-prototipo baja](https://raw.githubusercontent.com/ivvnv/SCL013-burger-queen/master/burger/src/Component/Global/Images/bq-bajafidelidad.png)

## 4. Prototipo alta fidelidad

You can rename the current file by clicking the file name in the navigation bar or by clicking the **Rename** button in the file explorer.

## 5. Cómo utilizar la plataforma

La página de inicio de la aplicación tiene 3 botones que corresponden a las áreas del restaurant que manejan las órdenes que entran a la cocina, se preparan y serán entregadas a los clientes, respectivamente. 

El área de Meseros muestra el menú de Desayuno y Almuerzo que Burger Queen ofrece a sus comensales. Al tomar la orden, el mesero selecciona lo que el cliente desea desde la tablet, ingresa el nombre y la mesa que está atendiendo, y en seguida en la pantalla le muestra un resumen de la orden junto con el valor total de lo que se consumirá. Para terminar la orden y enviar a la Cocina para que se empiece a preparar el mesero debe presionar el botón "Enviar a Cocina".

En Cocina, llega la orden recién ingresada a un listado con un contador adjunto que mide el tiempo que se demora en prepararse desde que llegó y con un estado "en espera" destacado en rojo. Las órdenes más antiguas van al principio y las que recién van llegando quedan al final. Cuando el personal de cocina quiere tomar una orden para empezar a prepararla debe presionar el recuadro que contiene la orden deseada, lo cual cambiará su estado a "preparando" en amarillo. Cuando el pedido ya está listo para ser entregado al cliente, se debe presionar una vez más para sacarlo de la pantalla de Cocina y que llegue a la de Entregas, para que el mesero sepa que está terminado y pueda entregarlo.

Por último, en Entregas, el mesero puede ver un listado de las órdenes que ya están preparadas y listas, distinguidas con un estado "listo" en verde sobre ellas. Luego de entregar el pedido al cliente debe presionar la orden en la pantalla y ésta desaparecerá, finalizando la acción.

## 6. Testeos

![bq-prototipo baja](https://raw.githubusercontent.com/ivvnv/SCL013-burger-queen/master/burger/src/Component/Global/Images/bq-testsmaze.png)

# 7. Pruebas unitarias

![bq-paletadecolores](https://raw.githubusercontent.com/ivvnv/SCL013-burger-queen/master/burger/src/Component/Global/Images/bq-paleta.png)

## 8. Checklist

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
*  [X] Uso de selectores de CSS.
*  [X] Construir tu aplicación respetando el diseño realizado (maquetación).
*  [X]  [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
*  [X]  [Uso de Media Queries.](https://developer.mozilla.org/es/docs/CSS/Media_queries)

  
### JavaScript

* [ ] Uso de condicionales (if-else | switch | operador ternario)
*  [X] Uso de funciones (parámetros | argumentos | valor de retorno)
*  [X] Manipular arrays (filter | map | sort | reduce)
*  [X] Manipular objects (key | value)
*  [X] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) | [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] Diferenciar entre expression y statements.
* [ ] Diferenciar entre tipos de datos atómicos y estructurados.
* [ ] [Uso de callbacks.](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
* [X] [Consumo de Promesas.](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)

  

### Testing

* [X] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

  
### Estructura del código y guía de estilo

  

* [X] Organizar y dividir el código en módulos (Modularización)
* [X] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [X] Uso de linter (ESLINT)

  
### Git y Github

  

*  [X] Uso de comandos de git (add | commit | pull | status | push)
* [X] Manejo de repositorios de GitHub (clone | fork | gh-pages)
*  [X] Colaboración en Github (branches | pull requests | |tags)
* [ ] Organización en Github (projects | issues | labels | milestones)

  
### Firebase

* [X] [Firestore.](https://firebase.google.com/docs/firestore)
* [ ] [Firebase Auth.](https://firebase.google.com/docs/auth/web/start)
* [ ] [Firebase security rules.](https://firebase.google.com/docs/rules)
* [X] Observadores. ([onAuthStateChanged](https://firebase.google.com/docs/auth/web/manage-users?hl=es#get_the_currently_signed-in_user) | [onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection))


### React

* [ ] [`JSX`](https://es.reactjs.org/docs/introducing-jsx.html)
*  [X]  [Componentes `class` y componentes `function`](https://es.reactjs.org/docs/components-and-props.html#function-and-class-components)
*  [X]  `props`
*  [X]  [Eventos en React.](https://es.reactjs.org/docs/handling-events.html)
*  [X]  [Listas y keys.](https://es.reactjs.org/docs/lists-and-keys.html)
* [ ] [Renderizado condicional.](https://es.reactjs.org/docs/conditional-rendering.html)
*  [X]  [Elevación de estados.](https://es.reactjs.org/docs/lifting-state-up.html)
* [X] [`hooks`](https://es.reactjs.org/docs/hooks-intro.html)
*  [X]  [`CSS` modules.](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)
*  [X]  [React Router.](https://reacttraining.com/react-router/web)

 
### UX

*  [X] Diseñar la aplicación pensando y entendiendo al usuario.
*  [X] Crear prototipos para obtener feedback e iterar.
*  [X] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
*  [X] Planear y ejecutar tests de usabilidad.

