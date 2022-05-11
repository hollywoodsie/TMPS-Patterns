class ShopAvailability {
  private stage: Stages;

  constructor(stage: Stages) {
    this.stage = stage;
  }

  public setStrategy(stage: Stages) {
    this.stage = stage;
  }
  get status() {
    return this.stage.setStatus();
  }
}

interface Stages {
  setStatus(): boolean;
}

class Warmup implements Stages {
  setStatus(): boolean {
    console.log(`Players are on warmup. Shop unavailable!`);
    return false;
  }
}

class FreezeTime implements Stages {
  setStatus(): boolean {
    console.log(`Freeze time begins. You have 10 seconds to buy guns!`);
    return true;
  }
}

class GameTime implements Stages {
  setStatus(): boolean {
    console.log(`Freeze time ended. Shop closed. Have fun!`);
    return false;
  }
}

const shop = new ShopAvailability(new Warmup());
console.log(shop.status);
shop.setStrategy(new FreezeTime());
console.log(shop.status);
shop.setStrategy(new GameTime());
console.log(shop.status);

export {};
