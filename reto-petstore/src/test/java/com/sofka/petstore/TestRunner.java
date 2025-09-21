package com.sofka.petstore;

import com.intuit.karate.junit5.Karate;

class TestRunner {
    @Karate.Test
    Karate testPetStore() {
        // Este método le dice a Karate que busque el archivo pet_store.feature en la carpeta de recursos
        return Karate.run("classpath:com/sofka/petstore/pet_store.feature");
    }
}

