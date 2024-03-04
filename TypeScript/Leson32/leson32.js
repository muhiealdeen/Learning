"use strict";
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log(' Coooking Time For Pizzaq Is 60 Minutes');
    }
}
class Burger extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log(' Coooking Time For Burger Is 30 Minutes');
    }
}
let PizzaOne = new Pizza('Awesome Pizza', 100);
console.log(PizzaOne.title);
console.log(PizzaOne.price);
PizzaOne.getCookingTime();
//# sourceMappingURL=leson32.js.map