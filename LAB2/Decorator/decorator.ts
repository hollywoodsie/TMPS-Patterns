interface IPizza {
  getName(): string;
  cost(): number;
}

class Diabolo implements IPizza {
  public name = 'Diabolo';
  public cost(): number {
    return 100;
  }
  public getName(): string {
    return `Pizza: ${this.name}`;
  }
}

class Rancho implements IPizza {
  public name = 'Rancho';
  public cost(): number {
    return 90;
  }
  public getName(): string {
    return `Pizza: ${this.name}`;
  }
}

class Decorator implements IPizza {
  protected object: IPizza;

  constructor(object: IPizza) {
    this.object = object;
  }

  public getName(): string {
    return this.object.getName();
  }
  public cost(): number {
    return this.object.cost();
  }
}

class AddCheese extends Decorator {
  public getName(): string {
    return this.object.getName() + ', Cheese Added';
  }
  public cost(): number {
    return this.object.cost() + 10;
  }
}

class AddPepper extends Decorator {
  public getName(): string {
    return this.object.getName() + ', Pepper Added';
  }
  public cost(): number {
    return this.object.cost() + 5;
  }
}

const rancho = new Rancho();
console.log(rancho.getName());
console.log(`Cost ${rancho.cost()}`);

const cheeseRancho = new AddCheese(rancho);
console.log(cheeseRancho.getName());
console.log(`Cost: ${cheeseRancho.cost()}`);

const cheesePepperRancho = new AddPepper(cheeseRancho);
console.log(cheesePepperRancho.getName());
console.log(`Cost: ${cheesePepperRancho.cost()}`);
