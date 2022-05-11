var Database = /** @class */ (function () {
    function Database() {
        this.dataArray = ['james2021', 'john1010', 'sam2011', 'login201', 'rofl000'];
    }
    Database.prototype.request = function () {
        return this.dataArray;
    };
    return Database;
}());
var ProxyServer = /** @class */ (function () {
    function ProxyServer() {
        this.dataArray = [];
        this.source = new Database();
    }
    ProxyServer.prototype.request = function () {
        if (this.dataArray.length === 0) {
            console.log('Caching data from Database to Proxy:');
            this.dataArray = this.source.request();
            return this.dataArray;
        }
        console.log('Data from cache:');
        return this.dataArray;
    };
    return ProxyServer;
}());
var proxyObject = new ProxyServer();
console.log(proxyObject.request()); //first request caching data from db to proxy
console.log(proxyObject.request()); //use this again => check data from cache
