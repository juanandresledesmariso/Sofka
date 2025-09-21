# Reto técnico | Sofka

Este repositorio contiene la solución al reto técnico propuesto por el equipo de Sofka.

El proyecto se enfoca en demostrar mis habilidades de automatización de pruebas E2E, y de API, como también el armado de un script de pruebas de rendimiento.

El armado de la solución **práctica** se desarrolló bajo una metodología de trabajo estructurado en 3 fases, donde la inicial fue el armado de las pruebas automatizadas E2E, y API, luego se continúo por la fase de rendimiento, para finalizar en la fase de documentación. 
*A continuación cada fase a detalle.*

**Fase 1: Pruebas de Automatización**

Para esta fase, luego de analizar el ejercicio y su objetivo, opte por utilizar el framework Playwright para la automatización del flujo de compra E2E debido a la experiencia con el framework, y un cliente HTTP para pruebas de API. 

La documentación detallada de cada armado y ejecución de las pruebas se encuentra en las siguientes carpetas: Playwright, reto-petstore. *(Ambas cuentan con README propio)*

**Archivos a destacar:**
- Pruebas E2E: `tests/compraE2E.spec.js`
- Pruebas de API (Karate): `pet_store.feature`

**Fase 2: Pruebas de Rendimiento**

Esta fase se completó utilizando JMeter para simular una prueba de carga en un servicio de login. 

Los resultados demostraron que el servicio puede soportar la carga requerida y se identificó un punto de falla con respecto a la autenticación de ciertos usuarios, las métricas resultantes de rendimiento fueron integradas en una bitacora de pruebas. Dicha documentación se encuentra en la carpeta: JMeter.

**Archivos a destacar:**
- Prueba rendimiento: `ScriptPruebasdeCarga_Ejercicio1.jmx`
- Ejercicio teórico: `InformeResultados.doc`

**Fase 3: Documentación y Evidencias**

Dicha etapa fue un proceso continuo durante todo el reto, dado que se trabajó en la documentación de cada fase y la obtención de evidencias que respalden los hallazgos. En base al analisis de los resultados es que se lográ crear informes detallados.