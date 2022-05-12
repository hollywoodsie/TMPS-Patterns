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
const updateVersion1 = new Update();
const playerOne = new Player('hollwoodzie', 'hollywodzie@gmail.com');
const playerTwo = new Player('kisuramanila', 'manilakisura@gmai.com');
updateVersion1.addSub(playerOne);
updateVersion1.addSub(playerTwo);
updateVersion1.pushPatchNote();
