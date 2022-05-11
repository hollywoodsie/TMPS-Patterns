// class ConcreteDatabaseConnection {
//
// }
var ConcreteDatabaseConnection = /** @class */ (function () {
    function ConcreteDatabaseConnection() {
    }
    ConcreteDatabaseConnection.prototype.connect = function (host, user, password) { };
    return ConcreteDatabaseConnection;
}());
var Auth = /** @class */ (function () {
    function Auth(connection) {
        this.connection = connection;
    }
    Auth.prototype.auth = function (login, password) { };
    return Auth;
}());
