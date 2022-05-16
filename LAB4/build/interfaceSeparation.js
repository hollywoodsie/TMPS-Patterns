"use strict";
//bad way
// interface ITWorker {
//   getSalary(): void;
//   doInterview(): void;
//   codeSomething(): void;
//   testProduct(): void;
// }
class HR {
    getSalary() {
        return `Claim 5000 $`;
    }
    doInterview() {
        return true;
    }
}
class Developer {
    getSalary() {
        return `Claim 3000 $`;
    }
    codeSomething() {
        return true;
    }
}
class Tester {
    getSalary() {
        return `Claim 900$`;
    }
    testProduct() {
        return true;
    }
}
