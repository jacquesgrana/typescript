console.log("Meteo App");

class Meteo {

    constructor(
        private _ville:string, 
        private _temperature:number
        ){
    }

    toString() : string {
        return `Ville : nom : ${this._ville} temperature : ${this._temperature}`;
    }
}


let nantesCeMatin = new Meteo('Nantes', 12);
console.log(nantesCeMatin.toString());