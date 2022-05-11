var Pistols = /** @class */ (function () {
    function Pistols() {
        this.model = 'someName';
        this.price = 'somePrice';
        this.id = 'someId';
    }
    Pistols.prototype.clone = function () {
        var copy = new Pistols();
        copy.model = this.model;
        copy.price = this.price;
        copy.id = this.id;
        return copy;
    };
    return Pistols;
}());
var proto = new Pistols();
console.log('Basic Prototype:', proto);
proto.model = 'Five-Seven';
proto.price = '500$';
proto.id = 'FS1';
console.log('Prototype after change:', proto);
var fiveSeven = proto.clone();
fiveSeven.model = 'Five-Seven';
console.log('Clone :', fiveSeven);
var desertEagle = fiveSeven.clone();
desertEagle.id = 'FS2';
console.log('Clone2:', desertEagle);
