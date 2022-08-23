"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: false,
        configurable: true
    });
    Sejour.prototype.toString = function () {
        return "Sejour : nom : ".concat(this._nom, " prix : ").concat(this._prix);
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = new Array;
        this._sejours.push(new Sejour("Paris", 1500));
        this._sejours.push(new Sejour("Moscou", 4200));
        this._sejours.push(new Sejour("Londres", 2000));
        this._sejours.push(new Sejour("Tokyo", 6400));
    }
    SejourService.prototype.searchSejourByName = function (nom) {
        return this._sejours.filter(function (s) { return s.nom == nom; })[0];
    };
    return SejourService;
}());
var sejourService = new SejourService();
var sejour = sejourService.searchSejourByName("Paris");
console.log(sejour.toString());
