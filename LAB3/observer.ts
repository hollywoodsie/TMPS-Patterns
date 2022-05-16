interface Subscriber {
  sendMessage(): void;
}

class Update {
  private subs: Subscriber[];
  constructor() {
    this.subs = [];
  }

  public addSub(subscriber: Subscriber) {
    this.subs.push(subscriber);
  }

  public pushPatchNote() {
    this.subs.map((observer) => observer.sendMessage());
  }
}

class Player implements Subscriber {
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

class Developer implements Subscriber {
  name: string;
  branch: string;

  constructor(name: string, branch: string) {
    this.name = name;
    this.branch = branch;
  }
  public sendMessage(): void {
    console.log(
      `Message to ${this.name} from ${this.branch}: No bugs detected on patch we pushed, but be ready to fix something.`
    );
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

export {};
