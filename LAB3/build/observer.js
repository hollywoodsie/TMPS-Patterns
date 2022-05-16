"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Update {
    constructor() {
        this.subs = [];
    }
    addSub(subscriber) {
        this.subs.push(subscriber);
    }
    pushPatchNote() {
        this.subs.map((observer) => observer.sendMessage());
    }
}
class Player {
    constructor(nickname, email) {
        this.nickname = nickname;
        this.email = email;
    }
    sendMessage() {
        console.log(`${this.nickname} notified about update!`);
    }
}
class Developer {
    constructor(name, branch) {
        this.name = name;
        this.branch = branch;
    }
    sendMessage() {
        console.log(`Message to ${this.name} from ${this.branch}: No bugs detected on patch we pushed, but be ready to fix something.`);
    }
}
const updateVersion1 = new Update();
const playerOne = new Player('hollwoodzie', 'hollywodzie@gmail.com');
const playerTwo = new Player('kisuramanila', 'manilakisura@gmai.com');
const developerOne = new Developer('Roman Covali', 'Level Creation Branch');
updateVersion1.addSub(developerOne);
updateVersion1.addSub(playerOne);
updateVersion1.addSub(playerTwo);
updateVersion1.pushPatchNote();
