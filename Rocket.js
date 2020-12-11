"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sumMass = 0;
        for (var i = 0; i < items.length; i++) {
            sumMass += items[i].massKg;
        }
        return sumMass;
        //let totalMass: number = 0;
        //items.forEach(item: Payload) => {
        //totalMass += item.massKg
        //})
        //return totalMass;
    };
    Rocket.prototype.currentMassKg = function () {
        var totalMass = this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
        return totalMass;
    };
    Rocket.prototype.canAdd = function (item) {
        var ableToAdd = (this.currentMassKg() + item.massKg <= this.totalCapacityKg);
        return ableToAdd;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
        }
        return (this.canAdd(cargo));
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
        }
        return (this.canAdd(astronaut));
    };
    return Rocket;
}());
exports.Rocket = Rocket;
