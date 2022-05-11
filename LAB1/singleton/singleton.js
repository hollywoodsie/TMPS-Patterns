//Simulate a database connection class
class MyDBConn {
    constructor() {
        this.id = 0;
        //... db connection logic
        this.id = Math.random(); //the ID could represent the actual connection to the db
    }
    getID() {
        return this.id;
    }
    static getInstance() {
        if (!MyDBConn.instance) {
            MyDBConn.instance = new MyDBConn();
        }
        return MyDBConn.instance;
    }
}
MyDBConn.instance = null;
const connections = [
    MyDBConn.getInstance(),
    MyDBConn.getInstance(),
    MyDBConn.getInstance(),
    MyDBConn.getInstance(),
    MyDBConn.getInstance(),
];
connections.forEach((c) => {
    console.log(c.getID());
});
//# sourceMappingURL=singleton.js.map