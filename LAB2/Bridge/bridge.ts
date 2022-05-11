interface IAbstraction {
  method(value: string[]): void;
}

class AbstractionA implements IAbstraction {
  private implementer: IImplementation;

  constructor(implementer: IImplementation) {
    this.implementer = implementer;
  }

  public method(value: string[]) {
    this.implementer.method(value.reverse());
    console.log(`--->(Abs.A)`);
  }
}

class AbstractionB implements IAbstraction {
  private implementer: IImplementation;

  constructor(implementer: IImplementation) {
    this.implementer = implementer;
  }

  public method(value: string[]) {
    this.implementer.method(value);
    console.log(`--->(Abs.B)`);
  }
}

interface IImplementation {
  method(value: string[]): void;
}

// class ReverseImplementation implements IImplementation {
//   public method(value: string[]) {
//     console.log(`Result of ReverseImplementation:`);
//     console.log(value.slice().reverse());
//   }
// }

class LowerCaseImplementation implements IImplementation {
  public method(value: string[]) {
    console.log(`Result of LowerCaseImplementation:`);
    value.forEach((v) => {
      if (v === v.toLowerCase()) console.log(v);
    });
  }
}

class UpperCaseImplementation implements IImplementation {
  public method(value: string[]) {
    console.log(`Result of UpperCaseImplementation:`);
    value.forEach((v) => {
      if (v === v.toUpperCase()) console.log(v);
    });
  }
}

const data = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd'];

const bLower = new AbstractionB(new LowerCaseImplementation());
bLower.method(data);

const aLower = new AbstractionA(new LowerCaseImplementation());
aLower.method(data);

const bUpper = new AbstractionB(new UpperCaseImplementation());
bUpper.method(data);

const aUpper = new AbstractionA(new UpperCaseImplementation());
aUpper.method(data);
