/*
  Interface
  - Interface Method And Parameters
*/
interface User {
  id?: number;
  readonly username: string;
  country: string;
  sayHello(): string;
  sayWelcome: () => string;
  getDouble(num: number): number;
}

let user1: User = {
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
// console.log(user1.username);
// console.log(user1.country);
console.log(user1.sayHello());
console.log(user1.sayWelcome());
console.log(user1.getDouble(5));
