var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Diabolo = /** @class */ (function () {
    function Diabolo() {
        this.name = 'Diabolo';
    }
    Diabolo.prototype.cost = function () {
        return 100;
    };
    Diabolo.prototype.getName = function () {
        return "Pizza: ".concat(this.name);
    };
    return Diabolo;
}());
var Rancho = /** @class */ (function () {
    function Rancho() {
        this.name = 'Rancho';
    }
    Rancho.prototype.cost = function () {
        return 90;
    };
    Rancho.prototype.getName = function () {
        return "Pizza: ".concat(this.name);
    };
    return Rancho;
}());
var Decorator = /** @class */ (function () {
    function Decorator(object) {
        this.object = object;
    }
    Decorator.prototype.getName = function () {
        return this.object.getName();
    };
    Decorator.prototype.cost = function () {
        return this.object.cost();
    };
    return Decorator;
}());
var AddCheese = /** @class */ (function (_super) {
    __extends(AddCheese, _super);
    function AddCheese() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddCheese.prototype.getName = function () {
        return this.object.getName() + ', Cheese Added';
    };
    AddCheese.prototype.cost = function () {
        return this.object.cost() + 10;
    };
    return AddCheese;
}(Decorator));
var AddPepper = /** @class */ (function (_super) {
    __extends(AddPepper, _super);
    function AddPepper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddPepper.prototype.getName = function () {
        return this.object.getName() + ', Pepper Added';
    };
    AddPepper.prototype.cost = function () {
        return this.object.cost() + 5;
    };
    return AddPepper;
}(Decorator));
var rancho = new Rancho();
console.log(rancho.getName());
console.log("Cost ".concat(rancho.cost()));
var cheeseRancho = new AddCheese(rancho);
console.log(cheeseRancho.getName());
console.log("Cost: ".concat(cheeseRancho.cost()));
var cheesePepperRancho = new AddPepper(cheeseRancho);
console.log(cheesePepperRancho.getName());
console.log("Cost: ".concat(cheesePepperRancho.cost()));
