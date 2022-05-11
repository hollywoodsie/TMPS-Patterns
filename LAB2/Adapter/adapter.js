var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SocketPlugUsa = /** @class */ (function () {
    function SocketPlugUsa() {
        this.name = 'US-Socket-Plug';
        this.voltage = 120;
        this.orientation = true;
    }
    return SocketPlugUsa;
}());
var SocketPlugEu = /** @class */ (function () {
    function SocketPlugEu() {
        this.name = 'EU-Socket-Plug';
        this.voltage = 220;
        this.orientation = false;
    }
    return SocketPlugEu;
}());
var SocketClient = /** @class */ (function () {
    function SocketClient(plug) {
        this.plug = plug;
    }
    SocketClient.prototype.plugin = function (plug) {
        if (plug.voltage !== this.plug.voltage ||
            plug.orientation !== this.plug.orientation) {
            console.error("Failed to connect ".concat(plug.name, " with ").concat(this.plug.name, ".\nExpected : ").concat(this.plug.voltage, " V Got : ").concat(plug.voltage, " V\nExpected Orientation : ").concat(this.plug.orientation, " Got : ").concat(plug.orientation));
            return;
        }
        console.log("Successfully connected ".concat(plug.name, " to ").concat(this.plug.name, " with ").concat(plug.voltage, " V and ").concat(plug.orientation, " orientation!"));
    };
    return SocketClient;
}());
var SocketClientUsa = /** @class */ (function (_super) {
    __extends(SocketClientUsa, _super);
    function SocketClientUsa() {
        return _super.call(this, { voltage: 120, name: 'US-Socket', orientation: true }) || this;
    }
    return SocketClientUsa;
}(SocketClient));
var SocketClientEu = /** @class */ (function (_super) {
    __extends(SocketClientEu, _super);
    function SocketClientEu() {
        return _super.call(this, { voltage: 220, name: 'EU-Socket', orientation: false }) || this;
    }
    return SocketClientEu;
}(SocketClient));
var EuToUsAdapter = /** @class */ (function () {
    function EuToUsAdapter(_a) {
        var name = _a.name;
        this.name = name;
        this.voltage = 120;
        this.orientation = true;
        console.log("Adapt ".concat(name, " connector to a US-connector."));
    }
    return EuToUsAdapter;
}());
var euPowerSocket = new SocketClientEu();
var usPowerSocket = new SocketClientUsa();
var euPlugAdaptee = new SocketPlugEu();
var usPlugAdaptee = new SocketPlugUsa();
euPowerSocket.plugin(euPlugAdaptee);
usPowerSocket.plugin(usPlugAdaptee);
usPowerSocket.plugin(new EuToUsAdapter(euPlugAdaptee));
