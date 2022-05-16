"use strict";
//bad way
class Malfurion {
    useAbility() {
        return `Used Malfurion's hero power!`;
    }
}
class Rexxar {
    useAbility() {
        return `Used Rexxar's hero power!`;
    }
}
class Illidan {
    useAbility() {
        return `Used Illidan's hero power!`;
    }
}
const malfurion = new Malfurion();
console.log(malfurion.useAbility());
