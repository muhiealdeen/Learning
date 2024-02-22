"use strict";
let user1 = {
    id: 100,
    username: 'Ahmed',
    country: 'Egypt',
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcome: () => {
        return `Welcome ${user1.username}`;
    },
    getDouble(n) {
        return n * 2;
    },
};
console.log(user1.id);
console.log(user1.sayHello());
console.log(user1.sayWelcome());
console.log(user1.getDouble(5));
//# sourceMappingURL=Leson23.js.map