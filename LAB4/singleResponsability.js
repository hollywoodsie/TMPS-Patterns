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
var CarGoodWay = /** @class */ (function () {
    function CarGoodWay(model, country, id, price) {
        this.model = model;
        this.country = country;
        this.id = id;
        this.price = price;
    }
    return CarGoodWay;
}());
var ShowRoom = /** @class */ (function () {
    function ShowRoom(car) {
        this.car = car;
    }
    ShowRoom.prototype.sellTheCar = function () {
        console.log("The ".concat(this.car.model, " from ").concat(this.car.country, " was sold for ").concat(this.car.price, "!"));
    };
    return ShowRoom;
}());
var Carwash = /** @class */ (function () {
    function Carwash(car) {
        this.car = car;
    }
    Carwash.prototype.washCar = function () {
        console.log("The ".concat(this.car.model, " from ").concat(this.car.country, " washed!"));
    };
    return Carwash;
}());
var car1 = new CarGoodWay('AudiA8', 'Germany', 2, 25000);
var showRoom = new ShowRoom(car1);
var carwash = new Carwash(car1);
carwash.washCar();
showRoom.sellTheCar();
