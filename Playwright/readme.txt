Prueba Funcional E2E con Playwright

Este directorio contiene la solución para la prueba funcional E2E en la página de Demoblaze, cumpliendo con los requerimientos de la fase 1 del reto.

Objetivo del Ejercicio
El objetivo es automatizar un flujo de compra end-to-end (E2E), validando los siguientes pasos:

1- Agregar dos productos al carrito.
2- Visualizar el carrito.
3- Completar un formulario de compra.
4- Finalizar la compra.

Tecnologías Utilizadas
Playwright: Como framework de automatización, elegido por su velocidad y fiabilidad en la ejecución.
Node.js: Entorno de ejecución de JavaScript.

Instrucciones de Ejecución
Para ejecutar las pruebas, sigue estos pasos:

1- Asegúrate de tener Node.js instalado en tu sistema.

2- Navega a la carpeta del proyecto en tu terminal.

3- Instala las dependencias necesarias con el siguiente comando:
npm install

4- Ejecuta la prueba E2E con este comando:
npx playwright test tests/compraE2E.spec.js

5- Para visualizar un reporte HTML de la ejecución, puedes usar:
npx playwright show-report
