interface IDatabase {
  request(): void;
}

class Database implements IDatabase {
  public dataArray: string[];

  constructor() {
    this.dataArray = [
      'james2021',
      'john1010',
      'sam2011',
      'login201',
      'rofl000',
    ];
  }

  public request() {
    return this.dataArray;
  }
}

class ProxyServer implements IDatabase {
  public dataArray: string[];
  private source: Database;

  constructor() {
    this.dataArray = [];
    this.source = new Database();
  }
  public request() {
    if (this.dataArray.length === 0) {
      console.log('Caching data from Database to Proxy:');
      this.dataArray = this.source.request();
      return this.dataArray;
    }
    console.log('Data from cache:');
    return this.dataArray;
  }
}

const proxyObject = new ProxyServer();
console.log(proxyObject.request()); //first request caching data from db to proxy
console.log(proxyObject.request()); //use this again => check data from cache
