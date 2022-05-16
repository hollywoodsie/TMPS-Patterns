"use strict";
// class Bird {
//   fly(speed) {
//     return `Flying at ${speed} km/h`;
//   }
// }
class Eagle {
    constructor() {
        this.speed = 20;
    }
    fly() {
        return `I'm flying with speed ${this.speed}!`;
    }
}
class Penguin {
    fly() {
        return `Sorry, I can't fly!`;
    }
}
function flyingBird(bird) {
    console.log(bird.fly());
}
let eagle = new Eagle();
let penguin = new Penguin();
flyingBird(eagle);
flyingBird(penguin);
