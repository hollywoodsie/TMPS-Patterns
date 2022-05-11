class AutomaticGuns {
    createPistol() {
        return new AutoPistol();
    }
    createRifle() {
        return new AutoRifle();
    }
}
class SingleGuns {
    createPistol() {
        return new SinglePistol();
    }
    createRifle() {
        return new SingleRifle();
    }
}
class AutoPistol {
    usePistol() {
        return 'automatic pistol in backpack!';
    }
}
class SinglePistol {
    usePistol() {
        return 'single mode pistol in backpack!';
    }
}
class AutoRifle {
    useRifle() {
        return 'Automatic rifle ready!';
    }
    useTogether(secondGun) {
        const result = secondGun.usePistol();
        return `You also have ${result}`;
    }
}
class SingleRifle {
    useRifle() {
        return 'Singlemode rifle ready!';
    }
    useTogether(secondGun) {
        const result = secondGun.usePistol();
        return `You also have ${result}`;
    }
}
/**call */
function clientCode(factory) {
    const pistols = factory.createPistol();
    const rifles = factory.createRifle();
    console.log(rifles.useRifle());
    console.log(rifles.useTogether(pistols));
}
console.log('AutomaticGuns factory result :\n');
clientCode(new AutomaticGuns());
console.log('');
console.log('SingleGuns factory result :\n');
clientCode(new SingleGuns());
//# sourceMappingURL=abstractfactory.js.map