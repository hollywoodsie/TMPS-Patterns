interface IBuilder {
  produceBarrel(): void;
  produceButt(): void;
  produceSight(): void;
  produceClip(): void;
  produceSupressor(): void;
}

class RifleBuilder implements IBuilder {
  private product: Rifle;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Rifle();
  }

  public produceBarrel(): void {
    this.product.parts.push('Barrel');
  }

  public produceButt(): void {
    this.product.parts.push('Butt');
  }

  public produceSight(): void {
    this.product.parts.push('Red Dot Sight');
  }
  public produceClip(): void {
    this.product.parts.push('30 bullets clip');
  }
  public produceSupressor(): void {
    this.product.parts.push('Barrel supressor');
  }

  public getProduct(): Rifle {
    const result = this.product;
    this.reset();
    return result;
  }
}

class SniperBuilder implements IBuilder {
  private product: SniperRifle;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new SniperRifle();
  }

  public produceBarrel(): void {
    this.product.parts.push('Barrel');
  }

  public produceButt(): void {
    this.product.parts.push('Butt');
  }

  public produceSight(): void {
    this.product.parts.push('Sniper x15 sight');
  }
  public produceClip(): void {
    this.product.parts.push('7 bullets clip');
  }
  public produceSupressor(): void {
    this.product.parts.push('Overhead supressor');
  }

  public getProduct(): Rifle {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Rifle {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Includes: ${this.parts.join(', ')}\n`);
  }
}
class SniperRifle {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Includes: ${this.parts.join(', ')}\n`);
  }
}

class Director {
  private builder: IBuilder;

  public setBuilder(builder: IBuilder): void {
    this.builder = builder;
  }

  public buildNoisyRifle(): void {
    this.builder.produceBarrel();
    this.builder.produceButt();
    this.builder.produceSight();
    this.builder.produceClip();
  }

  public buildSilentRifle(): void {
    this.builder.produceBarrel();
    this.builder.produceButt();
    this.builder.produceSight();
    this.builder.produceClip();
    this.builder.produceSupressor();
  }
}

function clientCode(director: Director) {
  const builder = new RifleBuilder();
  director.setBuilder(builder);

  console.log('Noisy gun:');
  director.buildNoisyRifle();
  builder.getProduct().listParts();

  console.log('Silent gun:');
  director.buildSilentRifle();
  builder.getProduct().listParts();

  //without Director
  console.log('Custom gun:');
  builder.produceBarrel();
  builder.produceButt();
  builder.produceClip();
  builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);
