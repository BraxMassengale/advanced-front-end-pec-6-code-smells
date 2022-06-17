// ANTES

class Car {

    name: String;
    color: String;
    engineType: String;
    engineNumCylinders: number;

}


// DESPUÉS

class Car {

    name: String;
    color: String;
    engine: Engine;

}

class Engine {

    type: String;
    engineNumCylinders: number;

}