class RifleBuilder {
    constructor() {
        this.reset();
    }
    reset() {
        this.product = new Rifle();
    }
    produceBarrel() {
        this.product.parts.push('Barrel');
    }
    produceButt() {
        this.product.parts.push('Butt');
    }
    produceSight() {
        this.product.parts.push('Red Dot Sight');
    }
    produceClip() {
        this.product.parts.push('30 bullets clip');
    }
    produceSupressor() {
        this.product.parts.push('Barrel supressor');
    }
    getProduct() {
        const result = this.product;
        this.reset();
        return result;
    }
}
class SniperBuilder {
    constructor() {
        this.reset();
    }
    reset() {
        this.product = new SniperRifle();
    }
    produceBarrel() {
        this.product.parts.push('Barrel');
    }
    produceButt() {
        this.product.parts.push('Butt');
    }
    produceSight() {
        this.product.parts.push('Sniper x15 sight');
    }
    produceClip() {
        this.product.parts.push('7 bullets clip');
    }
    produceSupressor() {
        this.product.parts.push('Overhead supressor');
    }
    getProduct() {
        const result = this.product;
        this.reset();
        return result;
    }
}
class Rifle {
    constructor() {
        this.parts = [];
    }
    listParts() {
        console.log(`Includes: ${this.parts.join(', ')}\n`);
    }
}
class SniperRifle {
    constructor() {
        this.parts = [];
    }
    listParts() {
        console.log(`Includes: ${this.parts.join(', ')}\n`);
    }
}
class Director {
    setBuilder(builder) {
        this.builder = builder;
    }
    buildNoisyRifle() {
        this.builder.produceBarrel();
        this.builder.produceButt();
        this.builder.produceSight();
        this.builder.produceClip();
    }
    buildSilentRifle() {
        this.builder.produceBarrel();
        this.builder.produceButt();
        this.builder.produceSight();
        this.builder.produceClip();
        this.builder.produceSupressor();
    }
}
function clientCode(director) {
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
//# sourceMappingURL=builder.js.map