// interface Coder {
//   writeCode(): void;
//   eatPizza(slices: number): void;
// }

// class DefaultCoder implements Coder {
//   constructor() {
//
//   }
//   writeCode(): void {
//
//   }
//   eatPizza(slices: number): void {
//
//   }
// }
// class HomeCoder implements Coder {
//   constructor() {
//
//   }
//   writeCode(): void {
//
//   }
//   eatPizza(slices: number): void {
//
//
//   }
// }

interface Coder {
  writeCode(): void;
}

interface EatingPizza {
  eatPizza(slices: number): void;
}

class DefaultCoder implements Coder, EatingPizza {
  constructor() {}
  writeCode(): void {}
  eatPizza(slices: number): void {}
}

class HomeCoder implements Coder {
  constructor() {}
  writeCode(): void {}
}
