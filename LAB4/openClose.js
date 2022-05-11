// class Rectangle {
//   width: number;
//   height: number;
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.areaOf = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.areaOf = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
var CalculationWorker = /** @class */ (function () {
    function CalculationWorker(parts) {
        this.parts = parts;
    }
    CalculationWorker.prototype.totalAreaOf = function () {
        return this.parts.reduce(function (fullArea, shape) {
            return (fullArea += shape.areaOf());
        }, 0);
    };
    return CalculationWorker;
}());
var rect = new Rectangle(10, 10);
var circle = new Circle(5);
var calculator = new CalculationWorker([rect, circle]);
console.log("Full fullArea = ".concat(calculator.totalAreaOf()));
