"use strict";
// class ConcreteDatabaseConnection {
//
// }
class ConcreteDatabaseConnection {
    constructor() { }
    connect(host, user, password) { }
}
class Authentication {
    constructor(connection) {
        this.connection = connection;
    }
    auth(login, password) { }
}
