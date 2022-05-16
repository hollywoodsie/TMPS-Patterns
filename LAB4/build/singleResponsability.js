"use strict";
// //bad way
// class CarBadWay {
//   public model: string;
//   public country: string;
//   public id: number;
//   public price: number;
//   public constructor(
//     model: string,
//     country: string,
//     id: number,
//     price: number
//   ) {
//     this.model = model;
//     this.country = country;
//     this.id = id;
//     this.price = price;
//   }
//   public washCar() {
//     console.log(`The ${this.model} from ${this.country} washed!`);
//   }
//   public sellTheCar() {
//     console.log(
//       `The ${this.model} from ${this.country} was sold for ${this.price} `
//     );
//   }
// }
// const tesla = new CarBadWay('TeslaX', 'USA', 1, 20000);
// // tesla.washCar();
// // tesla.sellTheCar();
//good way
class CarGoodWay {
    constructor(model, country, id, price) {
        this.model = model;
        this.country = country;
        this.id = id;
        this.price = price;
    }
}
class ShowRoom {
    constructor(car) {
        this.car = car;
    }
    sellTheCar() {
        console.log(`The ${this.car.model} from ${this.car.country} was sold for ${this.car.price}!`);
    }
}
class Carwash {
    constructor(car) {
        this.car = car;
    }
    washCar() {
        console.log(`The ${this.car.model} from ${this.car.country} washed!`);
    }
}
const car1 = new CarGoodWay('AudiA8', 'Germany', 2, 25000);
const showRoom = new ShowRoom(car1);
const carwash = new Carwash(car1);
carwash.washCar();
showRoom.sellTheCar();
