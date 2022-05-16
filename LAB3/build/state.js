"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Computer {
    constructor() {
        this.state = new InitialState();
        this.showState();
    }
    turnOn() {
        this.state = this.state.turnOn();
        this.showState();
    }
    enterPass() {
        this.state = this.state.enterPass();
        this.showState();
    }
    openBrowser() {
        this.state = this.state.openBrowser();
        this.showState();
    }
    logInGitHub() {
        this.state = this.state.logInGitHub();
        this.showState();
    }
    cloneRepo() {
        this.state = this.state.cloneRepo();
        this.showState();
    }
    turnOff() {
        this.state = this.state.turnOff();
        this.showState();
    }
    showState() {
        console.log(this.state);
    }
}
class ComputerState {
    turnOn() {
        throw new Error(`Wrong option!`);
    }
    enterPass() {
        throw new Error(`Wrong option!`);
    }
    openBrowser() {
        throw new Error(`Wrong option!`);
    }
    logInGitHub() {
        throw new Error(`Wrong option!`);
    }
    cloneRepo() {
        throw new Error(`Wrong option!`);
    }
    turnOff() {
        throw new Error(`Wrong option!`);
    }
}
class InitialState extends ComputerState {
    turnOn() {
        return new PasswordMenuState();
    }
}
class PasswordMenuState extends ComputerState {
    enterPass() {
        return new DesktopComputerState();
    }
}
class DesktopComputerState extends ComputerState {
    openBrowser() {
        return new GitHubGuestState();
    }
}
class GitHubGuestState extends ComputerState {
    logInGitHub() {
        return new GitHubUserState();
    }
}
class GitHubUserState extends ComputerState {
    cloneRepo() {
        return new FinalState();
    }
}
class FinalState extends ComputerState {
    turnOff() {
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
