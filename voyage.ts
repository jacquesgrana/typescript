
class Sejour {
    constructor(private _nom : string, private _prix : number) {}

    get nom() : string {
        return this._nom;
    } 

    get prix() : number {
        return this._prix;
    } 

    toString() : string {
        return `Sejour : nom : ${this._nom} prix : ${this._prix}`;
    }
}

class SejourService {
    private _sejours : Sejour[];

    constructor() {
        this._sejours = new Array<Sejour>;
        this._sejours.push(new Sejour("Paris", 1500));
        this._sejours.push(new Sejour("Moscou", 4200));
        this._sejours.push(new Sejour("Londres", 2000));
        this._sejours.push(new Sejour("Tokyo", 6400));
    }

    searchSejourByName(nom : string) : Sejour {
        return this._sejours.filter(s => s.nom == nom)[0];
    }
}

let sejourService = new SejourService();

let sejour = sejourService.searchSejourByName("Paris");
console.log(sejour.toString());