//bad way
// interface ITWorker {
//   getSalary(): void;
//   doInterview(): void;
//   codeSomething(): void;
//   testProduct(): void;
// }

// class HR implements ITWorker {
//   getSalary(): string {
//     return `Claim 5000 $`;
//   }
//   doInterview(): boolean {
//     return true;
//   }
//   codeSomething(): void {}
//   testProduct(): void {}
// }

// class Developer implements ITWorker {
//   getSalary(): string {
//     return `Claim 3000 $`;
//   }
//   doInterview(): void {}
//   codeSomething(): boolean {
//     return true;
//   }
//   testProduct(): void {}
// }

// class Tester implements ITWorker {
//   getSalary(): string {
//     return `Claim 900$`;
//   }
//   doInterview(): void {}
//   codeSomething(): void {}
//   testProduct(): boolean {
//     return true;
//   }
// }

//good way
interface ITWorker {
  getSalary(): void;
}
interface HRDepartment {
  doInterview(): void;
}
interface CodeStuff {
  codeSomething(): void;
}
interface TestStuff {
  testProduct(): void;
}

class HR implements ITWorker, HRDepartment {
  getSalary(): string {
    return `Claim 5000 $`;
  }
  doInterview(): boolean {
    return true;
  }
}

class Developer implements ITWorker, CodeStuff {
  getSalary(): string {
    return `Claim 3000 $`;
  }
  codeSomething(): boolean {
    return true;
  }
}

class Tester implements ITWorker, TestStuff {
  getSalary(): string {
    return `Claim 900$`;
  }
  testProduct(): boolean {
    return true;
  }
}
