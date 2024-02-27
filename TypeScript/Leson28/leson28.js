"use strict";
class User1 {
    constructor(username, salary, address) {
        this.username = username;
        this.salary = salary;
        this.address = address;
        this.msg = function () {
            return `Hello ${this.username} Your Salary Is ${this.salary}`;
        };
    }
    sayMsg() {
        return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
}
let userOne1 = new User1(`Elzero`, 6000, `Egypt`);
console.log(userOne1.msg());
console.log(userOne1.sayMsg());
//# sourceMappingURL=leson28.js.map