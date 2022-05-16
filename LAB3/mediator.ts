class GameDevelopment {
  public hr: HR;
  public developer: Developer;
  public tester: Tester;
  public needWorkers: boolean;
  public codeExists: boolean;

  constructor(
    hr: HR,
    developer: Developer,
    tester: Tester,
    needWorkers: boolean,
    codeExists: boolean
  ) {
    this.hr = hr;
    this.developer = developer;
    this.tester = tester;
    this.needWorkers = needWorkers;
    this.codeExists = codeExists;
  }
  public hrWork() {
    if (this.needWorkers) {
      this.needWorkers = false;
      return this.hr.doInterview();
    } else return `We don't need new workers now! I'm chilling!`;
  }
  public developerWork() {
    this.codeExists = true;
    return this.developer.codeSomething();
  }
  public testerWork() {
    if (this.codeExists) {
      return this.tester.testProject();
    } else
      return `Developer isn't done with his work, have nothing to test now!`;
  }
  public dismissWorker(worker: ITWorker) {
    this.needWorkers = true;
    return worker.imDone();
  }
}

interface ITWorker {
  imDone(): string;
}

interface ITStuff {
  //....something
}

class HR implements ITStuff {
  public doInterview() {
    return `I'm HR and now i will make an interview!`;
  }
}

class Developer implements ITWorker {
  public codeSomething() {
    return `I'm developer and now i will code some codeblocks! Need to test!`;
  }
  public imDone() {
    return `(Developer)I'm done i'm leaving...`;
  }
}

class Tester implements ITWorker {
  public testProject() {
    return `I'm tester and now i will test some project functionality!`;
  }
  public imDone() {
    return `(Tester)I'm done, i'm leaving...`;
  }
}
const gameDevHr = new HR();
const gameDeveloper = new Developer();
const gameTester = new Tester();

const gameDevBranch = new GameDevelopment(
  gameDevHr,
  gameDeveloper,
  gameTester,
  false,
  false
);

//HR work
console.log(gameDevBranch.hrWork());
console.log(gameDevBranch.dismissWorker(gameDeveloper));
console.log(gameDevBranch.hrWork());

console.log(`\n`);
//Tester/Developer work
console.log(gameDevBranch.testerWork());
console.log(gameDevBranch.developerWork());
console.log(gameDevBranch.testerWork());

export {};
