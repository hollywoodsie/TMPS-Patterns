// class ConcreteDatabaseConnection {
//
// }

// class Authentication {
//   connection: ConcreteDatabaseConnection;

//   constructor(connection: ConcreteDatabaseConnection) {
//     this.connection = connection;
//   }

//   auth(login: string, password: string){}
// }

interface AbstractDatabaseConnection {
  connect(host: string, user: string, password: string): void;
}

class ConcreteDatabaseConnection implements AbstractDatabaseConnection {
  constructor() {}
  connect(host: string, user: string, password: string): void {}
}

class Authentication {
  connection: AbstractDatabaseConnection;

  constructor(connection: AbstractDatabaseConnection) {
    this.connection = connection;
  }

  auth(login: string, password: string) {}
}
