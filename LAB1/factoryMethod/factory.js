//The classes we care about, the "use" method is where our "business logic" would live
class Pistol {
    constructor() {
        this.ammo = 12;
        this.type = 'Pistol';
        this.price = 250;
    }
    use(bulletsCount) {
        console.log('You fired', bulletsCount, 'bullets from', this.type, '!');
        console.log(this.ammo - bulletsCount, 'bullets left!');
    }
}
class Rifle {
    constructor() {
        this.ammo = 30;
        this.type = 'Rifle';
        this.price = 2700;
    }
    use(bulletsCount) {
        console.log('You fired', bulletsCount, 'bullets from', this.type, '!');
        console.log(this.ammo - bulletsCount, 'bullets left!');
    }
}
class Shotgun {
    constructor() {
        this.ammo = 7;
        this.type = 'Shotgun';
        this.price = 1200;
    }
    use(bulletsCount) {
        console.log('You fired', bulletsCount, 'bullets from', this.type, '!');
        console.log(this.ammo - bulletsCount, 'bullets left!');
    }
}
//The GunsHandler is "abstract" because noone is going to instantiate it
//We want to extend it and implement the abstract method
class GunsHandler {
    getInfo() {
        const myGuns = this.createGuns();
        console.log('Type:', myGuns.type);
        console.log('Price:', myGuns.price);
        console.log('Ammo:', myGuns.ammo);
    }
    //This is the method we care about, the rest of the business logic resides here
    useGuns(bulletsCount) {
        const myGuns = this.createGuns();
        myGuns.use(bulletsCount);
    }
}
//Here is where we implement the custom object creation
class PistolHandler extends GunsHandler {
    createGuns() {
        return new Pistol();
    }
}
class RifleHandler extends GunsHandler {
    createGuns() {
        return new Rifle();
    }
}
class ShotgunHandler extends GunsHandler {
    createGuns() {
        return new Shotgun();
    }
}
/// User code...
const pistols = new PistolHandler();
const rifles = new RifleHandler();
const shotguns = new ShotgunHandler();
pistols.getInfo();
shotguns.getInfo();
pistols.useGuns(5);
shotguns.useGuns(2);
//# sourceMappingURL=factory.js.map