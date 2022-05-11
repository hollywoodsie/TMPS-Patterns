// class Bird {
//   fly(speed) {
//     return `Flying at ${speed} km/h`;
//   }
// }
var Eagle = /** @class */ (function () {
    function Eagle() {
        this.speed = 20;
    }
    Eagle.prototype.fly = function () {
        return "I'm flying with speed ".concat(this.speed, "!");
    };
    return Eagle;
}());
var Penguin = /** @class */ (function () {
    function Penguin() {
    }
    Penguin.prototype.fly = function () {
        return "Sorry, I can't fly!";
    };
    return Penguin;
}());
function flyingBird(bird) {
    console.log(bird.fly());
}
var eagle = new Eagle();
var penguin = new Penguin();
flyingBird(eagle);
flyingBird(penguin);
