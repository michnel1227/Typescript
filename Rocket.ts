import {Payload} from './Payload';
import {Astronaut} from './Astronaut';
import {Cargo} from './Cargo';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo [] = [];
    astronauts: Astronaut[] = [];
    constructor (name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number {
        let sumMass: number = 0;
        for (let i = 0; i < items.length; i++) {
            sumMass += items[i].massKg
        }
        return sumMass
        //let totalMass: number = 0;
        //items.forEach(item: Payload) => {
            //totalMass += item.massKg
            //})
            //return totalMass;
    }
    currentMassKg(): number {
        let totalMass = this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
        return totalMass
    }
    canAdd(item: Payload): boolean {
        let ableToAdd = (this.currentMassKg() + item.massKg <= this.totalCapacityKg)
        return ableToAdd
    }
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo)
        } return (this.canAdd(cargo))
    }
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
        } return (this.canAdd(astronaut))
    }
}