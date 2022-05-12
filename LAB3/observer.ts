interface Observer {
  sendMessage(): void;
}

class Update {
  private subs: Observer[];
  constructor() {
    this.subs = [];
  }

  public addSub(subscriber: Observer) {
    this.subs.push(subscriber);
  }

  public pushPatchNote() {
    this.subs.map((observer) => observer.sendMessage());
  }
}

class Player implements Observer {
  nickname: string;
  email: string;

  constructor(nickname: string, email: string) {
    this.nickname = nickname;
    this.email = email;
  }
  public sendMessage(): void {
    console.log(`${this.nickname} notified about update!`);
  }
}

const updateVersion1 = new Update();

const playerOne = new Player('hollwoodzie', 'hollywodzie@gmail.com');
const playerTwo = new Player('kisuramanila', 'manilakisura@gmai.com');

updateVersion1.addSub(playerOne);
updateVersion1.addSub(playerTwo);
updateVersion1.pushPatchNote();

export {};
