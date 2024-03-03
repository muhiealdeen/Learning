"use strict";
class User4 {
    static getCount() {
        console.log(`${this.created} objects created`);
    }
    constructor(username) {
        this.username = username;
        User4.created++;
    }
}
User4.created = 0;
let u1 = new User4(`Elzero`);
let u2 = new User4(`Ahmad`);
let u3 = new User4(`Osama`);
console.log(User4.created);
User4.getCount();
//# sourceMappingURL=Leson30.js.map