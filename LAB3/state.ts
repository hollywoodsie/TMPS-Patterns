interface ComputerOptions {
  turnOn(): void;
  enterPass(): void;
  openBrowser(): void;
  logInGitHub(): void;
  cloneRepo(): void;
}

class Computer implements ComputerOptions {
  private state: ComputerState = new InitialState();
  constructor() {
    this.showState();
  }
  public turnOn(): void {
    this.state = this.state.turnOn();
    this.showState();
  }
  public enterPass(): void {
    this.state = this.state.enterPass();
    this.showState();
  }
  public openBrowser(): void {
    this.state = this.state.openBrowser();
    this.showState();
  }
  public logInGitHub(): void {
    this.state = this.state.logInGitHub();
    this.showState();
  }
  public cloneRepo(): void {
    this.state = this.state.cloneRepo();
    this.showState();
  }
  public turnOff(): void {
    this.state = this.state.turnOff();
    this.showState();
  }

  private showState(): void {
    console.log(this.state);
  }
}

abstract class ComputerState implements ComputerOptions {
  public turnOn(): ComputerState {
    throw new Error(`Wrong option!`);
  }
  public enterPass(): ComputerState {
    throw new Error(`Wrong option!`);
  }
  public openBrowser(): ComputerState {
    throw new Error(`Wrong option!`);
  }
  public logInGitHub(): ComputerState {
    throw new Error(`Wrong option!`);
  }
  public cloneRepo(): ComputerState {
    throw new Error(`Wrong option!`);
  }
  public turnOff(): ComputerState {
    throw new Error(`Wrong option!`);
  }
}

class InitialState extends ComputerState {
  public turnOn(): ComputerState {
    return new PasswordMenuState();
  }
}

class PasswordMenuState extends ComputerState {
  public enterPass(): ComputerState {
    return new DesktopComputerState();
  }
}

class DesktopComputerState extends ComputerState {
  public openBrowser(): ComputerState {
    return new GitHubGuestState();
  }
}

class GitHubGuestState extends ComputerState {
  public logInGitHub(): ComputerState {
    return new GitHubUserState();
  }
}

class GitHubUserState extends ComputerState {
  public cloneRepo(): ComputerState {
    return new FinalState();
  }
}

class FinalState extends ComputerState {
  public turnOff(): ComputerState {
    return new InitialState();
  }
}

const computer = new Computer();
computer.turnOn();
computer.enterPass();
computer.openBrowser();
computer.logInGitHub();
computer.cloneRepo();
computer.turnOff();

computer.logInGitHub(); //wrong

export {};
