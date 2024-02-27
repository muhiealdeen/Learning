/*
  Type Annotations With Class
*/
class User {
  u: string;
  s: number;
  msg: () => string;
  constructor(username: string, salary: number) {
    this.u = username;
    this.s = salary;
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    };
  }
  sayMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
}

let userOne3 = new User('Elzero', 6000);

console.log(userOne3.u);
console.log(userOne3.s);
console.log(userOne3.msg());
console.log(userOne3.sayMsg());
