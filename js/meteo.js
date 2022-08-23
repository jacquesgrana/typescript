"use strict";
console.log("Meteo App");
var Meteo = /** @class */ (function () {
    function Meteo(_ville, _temperature) {
        this._ville = _ville;
        this._temperature = _temperature;
    }
    Meteo.prototype.toString = function () {
        return "Ville : nom : ".concat(this._ville, " temperature : ").concat(this._temperature);
    };
    return Meteo;
}());
var nantesCeMatin = new Meteo('Nantes', 12);
console.log(nantesCeMatin.toString());
