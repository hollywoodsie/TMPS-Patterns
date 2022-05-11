// class Bird {
//   fly(speed) {
//     return `Flying at ${speed} km/h`;
//   }
// }

// class Eagle extends Bird {
//   dive() {
//     return `I'm diving...`;
//   }

//   fly(speed) {
//     return `Soaring through the sky at ${speed}`;
//   }
// }

// class Penguin extends Bird {
//   fly() {
//     return `Sorry, I can't fly!`;
//     //return new Error(`Sorry, I can't fly`);
//   }
// }

// const superBird = new Bird();
// const pengBird = new Penguin();
// const eagleBird = new Eagle();

// function flyingBird(bird) {
//   let speed: number = 10;
//   if (bird instanceof Penguin) {
//     return bird.fly();
//   } else return bird.fly(speed);
// }

// console.log(flyingBird(superBird));
// console.log(flyingBird(eagleBird));
// console.log(flyingBird(pengBird));

interface Bird {
  fly(): string;
}

interface Flying extends Bird {
  speed: number;
}

interface NotFlying extends Bird {} //просто пример, по сути можно сразу реализовывать Bird, но это только в этом случае

class Eagle implements Flying {
  speed: number = 20;

  fly() {
    return `I'm flying with speed ${this.speed}!`;
  }
}

class Penguin implements NotFlying {
  fly() {
    return `Sorry, I can't fly!`;
  }
}

function flyingBird(bird: Bird) {
  console.log(bird.fly());
}

let eagle = new Eagle();
let penguin = new Penguin();

flyingBird(eagle);
flyingBird(penguin);
