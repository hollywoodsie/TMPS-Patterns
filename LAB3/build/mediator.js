"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameDevelopment {
    constructor(hr, developer, tester, needWorkers, codeExists) {
        this.hr = hr;
        this.developer = developer;
        this.tester = tester;
        this.needWorkers = needWorkers;
        this.codeExists = codeExists;
    }
    hrWork() {
        if (this.needWorkers) {
            this.needWorkers = false;
            return this.hr.doInterview();
        }
        else
            return `We don't need new workers now! I'm chilling!`;
    }
    developerWork() {
        this.codeExists = true;
        return this.developer.codeSomething();
    }
    testerWork() {
        if (this.codeExists) {
            return this.tester.testProject();
        }
        else
            return `Developer isn't done with his work, have nothing to test now!`;
    }
    dismissWorker(worker) {
        this.needWorkers = true;
        return worker.imDone();
    }
}
class HR {
    doInterview() {
        return `I'm HR and now i will make an interview!`;
    }
}
class Developer {
    codeSomething() {
        return `I'm developer and now i will code some codeblocks! Need to test!`;
    }
    imDone() {
        return `(Developer)I'm done i'm leaving...`;
    }
}
class Tester {
    testProject() {
        return `I'm tester and now i will test some project functionality!`;
    }
    imDone() {
        return `(Tester)I'm done, i'm leaving...`;
    }
}
const gameDevHr = new HR();
const gameDeveloper = new Developer();
const gameTester = new Tester();
const gameDevBranch = new GameDevelopment(gameDevHr, gameDeveloper, gameTester, false, false);
//HR work
console.log(gameDevBranch.hrWork());
console.log(gameDevBranch.dismissWorker(gameDeveloper));
console.log(gameDevBranch.hrWork());
console.log(`\n`);
//Tester/Developer work
console.log(gameDevBranch.testerWork());
console.log(gameDevBranch.developerWork());
console.log(gameDevBranch.testerWork());
