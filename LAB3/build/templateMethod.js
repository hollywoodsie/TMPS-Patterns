"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmartHouseLightsOff {
    firstMethod() {
        console.log(`\nTurning lights in hall off...(common step for all)`);
    }
    thirdMethod() { }
    templateMethod() {
        this.firstMethod();
        this.secondMethod();
        this.thirdMethod();
    }
}
class OffFromKitchen extends SmartHouseLightsOff {
    // A concrete class that only overrides step two"
    secondMethod() {
        console.log('Turning lights in kitchen off...(From kitchen)');
    }
}
class OffFromBedroom extends SmartHouseLightsOff {
    secondMethod() {
        console.log('Turning lights in kitchen off...(From bedroom)');
    }
    thirdMethod() {
        console.log('Turning lights in bedroom off...(From bedroom)');
    }
}
const imInBedroom = new OffFromBedroom();
const imInKitchen = new OffFromKitchen();
imInBedroom.templateMethod();
console.log(`All lights turned off!(From bedroom)`);
imInKitchen.templateMethod();
console.log(`All lights turned off!(From kitchen)`);
