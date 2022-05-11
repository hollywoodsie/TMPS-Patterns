var AbstractionA = /** @class */ (function () {
    function AbstractionA(implementer) {
        this.implementer = implementer;
    }
    AbstractionA.prototype.method = function (value) {
        this.implementer.method(value.reverse());
        console.log("--->(Abs.A)");
    };
    return AbstractionA;
}());
var AbstractionB = /** @class */ (function () {
    function AbstractionB(implementer) {
        this.implementer = implementer;
    }
    AbstractionB.prototype.method = function (value) {
        this.implementer.method(value);
        console.log("--->(Abs.B)");
    };
    return AbstractionB;
}());
// class ReverseImplementation implements IImplementation {
//   public method(value: string[]) {
//     console.log(`Result of ReverseImplementation:`);
//     console.log(value.slice().reverse());
//   }
// }
var LowerCaseImplementation = /** @class */ (function () {
    function LowerCaseImplementation() {
    }
    LowerCaseImplementation.prototype.method = function (value) {
        console.log("Result of LowerCaseImplementation:");
        value.forEach(function (v) {
            if (v === v.toLowerCase())
                console.log(v);
        });
    };
    return LowerCaseImplementation;
}());
var UpperCaseImplementation = /** @class */ (function () {
    function UpperCaseImplementation() {
    }
    UpperCaseImplementation.prototype.method = function (value) {
        console.log("Result of UpperCaseImplementation:");
        value.forEach(function (v) {
            if (v === v.toUpperCase())
                console.log(v);
        });
    };
    return UpperCaseImplementation;
}());
var data = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd'];
var bLower = new AbstractionB(new LowerCaseImplementation());
bLower.method(data);
var aLower = new AbstractionA(new LowerCaseImplementation());
aLower.method(data);
var bUpper = new AbstractionB(new UpperCaseImplementation());
bUpper.method(data);
var aUpper = new AbstractionA(new UpperCaseImplementation());
aUpper.method(data);
