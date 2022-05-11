interface IGunsFactory {
  createPistol(): Pistols;

  createRifle(): Rifles;
}

class AutomaticGuns implements IGunsFactory {
  public createPistol(): Pistols {
    return new AutoPistol();
  }

  public createRifle(): Rifles {
    return new AutoRifle();
  }
}

class SingleGuns implements IGunsFactory {
  public createPistol(): Pistols {
    return new SinglePistol();
  }

  public createRifle(): Rifles {
    return new SingleRifle();
  }
}

interface Pistols {
  usePistol(): string;
}

class AutoPistol implements Pistols {
  public usePistol(): string {
    return 'automatic pistol in backpack!';
  }
}

class SinglePistol implements Pistols {
  public usePistol(): string {
    return 'single mode pistol in backpack!';
  }
}

interface Rifles {
  useRifle(): string;

  useTogether(collaborator: Pistols): string;
}

class AutoRifle implements Rifles {
  public useRifle(): string {
    return 'Automatic rifle ready!';
  }

  public useTogether(secondGun: Pistols): string {
    const result = secondGun.usePistol();
    return `You also have ${result}`;
  }
}

class SingleRifle implements Rifles {
  public useRifle(): string {
    return 'Singlemode rifle ready!';
  }

  public useTogether(secondGun: Pistols): string {
    const result = secondGun.usePistol();
    return `You also have ${result}`;
  }
}

/**call */
function clientCode(factory: IGunsFactory) {
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
