abstract class SmartHouseLightsOff {
  protected firstMethod(): void {
    console.log(`\nTurning lights in hall off...(common step for all)`);
  }

  protected abstract secondMethod(): void;

  protected thirdMethod(): void {}

  public templateMethod() {
    this.firstMethod();
    this.secondMethod();
    this.thirdMethod();
  }
}

class OffFromKitchen extends SmartHouseLightsOff {
  // A concrete class that only overrides step two"
  protected secondMethod() {
    console.log('Turning lights in kitchen off...(From kitchen)');
  }
}

class OffFromBedroom extends SmartHouseLightsOff {
  protected secondMethod() {
    console.log('Turning lights in kitchen off...(From bedroom)');
  }

  protected thirdMethod() {
    console.log('Turning lights in bedroom off...(From bedroom)');
  }
}

const imInBedroom = new OffFromBedroom();
const imInKitchen = new OffFromKitchen();

imInBedroom.templateMethod();
console.log(`All lights turned off!(From bedroom)`);

imInKitchen.templateMethod();
console.log(`All lights turned off!(From kitchen)`);
export {};
