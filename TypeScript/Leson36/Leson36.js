"use strict";
class User6 {
    constructor(value) {
        this.value = value;
    }
    show(msg) {
        console.log(`${msg} -- ${this.value}`);
    }
}
let userSix = new User6('Muhie');
console.log(userSix.value);
userSix.show('Massages');
let userSix2 = new User6(100);
console.log(userSix2.value);
userSix2.show('Massege');
//# sourceMappingURL=Leson36.js.map