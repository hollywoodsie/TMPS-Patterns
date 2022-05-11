"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShopAvailability {
    constructor(stage) {
        this.stage = stage;
    }
    setStrategy(stage) {
        this.stage = stage;
    }
    get status() {
        return this.stage.setStatus();
    }
}
class Warmup {
    setStatus() {
        console.log(`Players are on warmup. Shop unavailable!`);
        return false;
    }
}
class FreezeTime {
    setStatus() {
        console.log(`Freeze time begins. You have 10 seconds to buy guns!`);
        return true;
    }
}
class GameTime {
    setStatus() {
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
