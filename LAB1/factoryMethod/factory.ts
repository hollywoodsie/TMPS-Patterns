interface IGuns {
  ammo: number;
  type: string;
  price: number;
  use(bulletsCount): void;
}

//The classes we care about, the "use" method is where our "business logic" would live
class Pistol implements IGuns {
  public ammo: number = 12;
  public type: string = 'Pistol';
  public price: number = 250;
  public use(bulletsCount): void {
    console.log('You fired', bulletsCount, 'bullets from', this.type, '!');
    console.log(this.ammo - bulletsCount, 'bullets left!');
  }
}

class Rifle implements IGuns {
  public ammo: number = 30;
  public type: string = 'Rifle';
  public price: number = 2700;
  public use(bulletsCount): void {
    console.log('You fired', bulletsCount, 'bullets from', this.type, '!');
    console.log(this.ammo - bulletsCount, 'bullets left!');
  }
}

class Shotgun implements IGuns {
  public ammo: number = 7;
  public type: string = 'Shotgun';
  public price: number = 1200;
  public use(bulletsCount): void {
    console.log('You fired', bulletsCount, 'bullets from', this.type, '!');
    console.log(this.ammo - bulletsCount, 'bullets left!');
  }
}

//The GunsHandler is "abstract" because noone is going to instantiate it
//We want to extend it and implement the abstract method
abstract class GunsHandler {
  //This is the method real handlers need to implement
  public abstract createGuns(): IGuns;

  public getInfo(): any {
    const myGuns = this.createGuns();
    console.log('Type:', myGuns.type);
    console.log('Price:', myGuns.price);
    console.log('Ammo:', myGuns.ammo);
  }
  //This is the method we care about, the rest of the business logic resides here
  public useGuns(bulletsCount): void {
    const myGuns = this.createGuns();
    myGuns.use(bulletsCount);
  }
}

//Here is where we implement the custom object creation
class PistolHandler extends GunsHandler {
  public createGuns(): IGuns {
    return new Pistol();
  }
}

class RifleHandler extends GunsHandler {
  public createGuns(): IGuns {
    return new Rifle();
  }
}

class ShotgunHandler extends GunsHandler {
  public createGuns(): IGuns {
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
