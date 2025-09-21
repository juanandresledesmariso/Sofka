Prueba de Rendimiento con Apache JMeter

Este directorio contiene la solución para la prueba de carga del servicio de login, cumpliendo con los requerimientos del reto técnico de Sofka.

Objetivo del Ejercicio
El objetivo principal de esta prueba fue evaluar el rendimiento del servicio de login de la API fakestoreapi.com al someterlo a una carga de usuarios concurrentes.

Tecnologías y Versiones Utilizadas
Apache JMeter: v5.6.2

Java: JDK 11 o superior

Sistema Operativo: macOS

Instrucciones de Ejecución
Para ejecutar la prueba, sigue estos pasos:

Asegúrate de tener Java y Apache JMeter instalados en tu sistema.

Descarga el archivo ScriptPruebasdeCarga_Ejercicio1.jmx de este repositorio.

Abre JMeter y carga el script desde el menú File > Open.

Carga el archivo de datos de prueba login-data.csv en la configuración de la prueba.

Ajusta el número de hilos (usuarios) y el tiempo de rampa según los requerimientos de la prueba.

Haz clic en el botón de Play para ejecutar la prueba.

Archivos Clave
ScriptPruebasdeCarga_Ejercicio1.jmx: El script principal de la prueba de JMeter.

login-data.csv: Archivo que contiene los datos de usuario y contraseña para la parametrización.