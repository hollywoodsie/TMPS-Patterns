// class Rectangle {
//   width: number;
//   height: number;

//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }
// }
// class CalculationWorker {
//   parts: Rectangle[];

//   constructor(parts: Rectangle[]) {
//     this.parts = parts;
//   }

//   totalAreaOf(): number {
//     return this.parts.reduce((fullArea: number, shape: Rectangle) => {
//       return (fullArea += shape.width * shape.height);
//     }, 0);
//   }
// }
// class Circle {
//   radius: number;

//   constructor(radius: number) {
//     this.radius = radius;
//   }
// }
//-------------------------------------------------------------------------------------
// class CalculationWorker {
//   // !
//   parts: [Rectangle | Circle];

//   constructor(parts: [Rectangle | Circle]) {
//     this.parts = parts;
//   }

//   totalAreaOf(): number {
//     return this.parts.reduce((fullArea: number, shape: Rectangle | Circle) => {
//       // 2. !
//       //
//       if (shape instanceof Rectangle) {
//         return (fullArea += shape.width * shape.height);
//       } else if (shape instanceof Circle) {
//         return (fullArea += shape.radius ** 2 * Math.PI);
//       } else return fullArea;
//     }, 0);
//   }
// }

//good way
interface CalculationArea {
  areaOf(): number;
}

class Rectangle implements CalculationArea {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  areaOf(): number {
    return this.width * this.height;
  }
}

class Circle implements CalculationArea {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  areaOf(): number {
    return Math.PI * this.radius ** 2;
  }
}

class CalculationWorker {
  parts: CalculationArea[];

  constructor(parts: CalculationArea[]) {
    this.parts = parts;
  }

  totalAreaOf(): number {
    return this.parts.reduce((fullArea: number, shape: CalculationArea) => {
      return (fullArea += shape.areaOf());
    }, 0);
  }
}

const rect = new Rectangle(10, 10);

const circle = new Circle(5);

const calculator = new CalculationWorker([rect, circle]);

console.log(`Full fullArea = ${calculator.totalAreaOf()}`);
