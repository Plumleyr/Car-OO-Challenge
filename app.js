class Vehicle{
    constructor(make, model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        console.log("Beep!")
    }
    toString(){
       console.log(`The vehicle is a ${make} ${model} from ${year}.`)
    }
}

class Car extends Vehicle{
    constructor(make, model,year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model,year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        console.log("VROOM!!!")
    }
}

class Garage{
    constructor(capacity){
        this.vehicles = [],
        this.capacity = capacity;
    }
    add(newVehicle){
        if(this.capacity > this.vehicles.length){
            if(newVehicle instanceof Vehicle){
                this.vehicles.push(newVehicle)
                console.log("Vehicle added!")
            }else{
                console.log("Only vehicles are allowed in here!")
            }
        }else{
            console.log("Sorry, we're full.")
        }
    }
}