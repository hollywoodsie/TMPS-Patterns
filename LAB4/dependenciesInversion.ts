// class ConcreteDatabaseConnection {
//
// }

// class Auth {
//   connection: ConcreteDatabaseConnection;

//   constructor(connection: ConcreteDatabaseConnection) {
//     this.connection = connection;
//   }

//   async auth(login: string, password: string): Promise<void> {
//
//   }
// }

interface DBConn {
  connect(host: string, user: string, password: string): void;
}

class ConcreteDatabaseConnection implements DBConn {
  constructor() {}
  connect(host: string, user: string, password: string): void {}
}

class Auth {
  connection: DBConn;

  constructor(connection: DBConn) {
    this.connection = connection;
  }

  auth(login: string, password: string) {}
}
