
interface IGunsPrototype {
  
  clone(): Pistols;
}

class Pistols implements IGunsPrototype {
  public model: string;
  public price: string;
  public id: string;

  constructor() {
    this.model = 'someName';
    this.price = 'somePrice';
    this.id = 'someId';
  }

  public clone(): Pistols {
    let copy = new Pistols();

    copy.model = this.model;
    copy.price = this.price;
    copy.id = this.id;

    return copy;
  }
}
  const proto = new Pistols();
  console.log('Basic Prototype:', proto);
  proto.model = 'Five-Seven';
  proto.price = '500$';
  proto.id = 'FS1';
  console.log('Prototype after change:', proto)
  let fiveSeven = proto.clone();
  fiveSeven.model = 'Five-Seven'
  console.log('Clone :', fiveSeven);
  let desertEagle  = fiveSeven.clone();
  desertEagle.id = 'FS2'
  console.log('Clone2:', desertEagle);
 
  
  

  

      