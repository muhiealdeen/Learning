"use strict";
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log(`Attacking Now`);
    }
}
class Amazon extends Player {
    constructor(name, spears) {
        super(name);
        this.spears = spears;
    }
    attack() {
        console.log(`Attacking With ${this.spears} Spears`);
        this.spears--;
    }
}
class Barbarian extends Player {
    constructor(name, axeDurability) {
        super(name);
        this.axeDurability = axeDurability;
    }
    attack() {
        console.log(`Attacking With ${this.axeDurability} Axes`);
        this.axeDurability--;
    }
}
let barOne = new Barbarian('Muhie', 100);
console.log(barOne.name);
barOne.attack();
console.log(barOne.axeDurability);
let AmazonOne = new Amazon('Zaid', 5);
console.log(AmazonOne.name);
AmazonOne.attack();
console.log(AmazonOne.spears);
//# sourceMappingURL=Leson33.js.map