Pruebas de API con Karate

Este directorio contiene la solución del Ejercicio 2 del reto técnico, que se enfoca en la automatización de pruebas de API para la PetStore de Swagger.

Objetivo del Ejercicio
El objetivo fue crear un script de prueba que valide el ciclo de vida completo de un recurso (pet) a través de las operaciones principales de una API REST:

1- Añadir una mascota.
2- Consultar la mascota por ID.
3- Actualizar la mascota.
4- Consultar la mascota por status.

Tecnologías Utilizadas
Karate: Framework de pruebas de API.

Java: Lenguaje de programación.

Maven: Gestor de dependencias y herramienta de construcción de proyectos.

Instrucciones de Ejecución
Para ejecutar las pruebas, sigue estos pasos:

Asegúrate de tener Java y Maven instalados en tu sistema.

Navega a la carpeta del proyecto en tu terminal.

Ejecuta las pruebas con el siguiente comando:

mvn test

Los reportes de la ejecución se generarán automáticamente en la carpeta target/karate-reports.