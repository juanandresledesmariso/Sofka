Feature: Pruebas de API para la tienda de mascotas

Background: Configuración inicial de la prueba
    * url 'https://petstore.swagger.io/v2'

Scenario: 1. Añadir una mascota a la tienda
    Given path '/pet'
    And request { "id": 45614155000, "name": "doggie", "status": "available" }
    When method post
    Then status 200

Scenario: 2. Consultar la mascota ingresada previamente (Búsqueda por ID)
    Given path '/pet/45614155000'
    When method get
    Then status 200
    And match response.id == 45614155000
    And match response.name == 'doggie'

Scenario: 3. Actualizar el nombre y el estatus de la mascota a "sold"
    Given path '/pet'
    And request { "id": 45614155000, "name": "Remo", "status": "sold" }
    When method put
    Then status 200
    And match response.name == 'Remo'
    And match response.status == 'sold'

Scenario: 4. Consultar la mascota modificada por estatus
    Given path '/pet/findByStatus'
    And param status = 'sold'
    When method get
    Then status 200
    # Usamos un filtro de JavaScript para encontrar la mascota
    * def remoPet = response.filter(x => x.name == 'Remo')[0]
    # Luego validamos sus propiedades
    And match remoPet.status == 'sold'