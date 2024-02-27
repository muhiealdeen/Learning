/*
  Class
  - Data Access Modifiers & Parameters Properties
  --- Public
  ------ All Members Of A Class In TypeScript Are Public
  ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
  --- Private
  ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
  --- Protected
  ------ Same Like Private But Can Be Accessed Using The Deriving Class

  - TypeScript Is A Layer On Top Of JavaScript
  - It Should Remove All Annotations And Although Access Modifiers "Private For Example"
*/

class User1 {
  private username: string;
  protected salary: number;
  msg: () => string;
  constructor(username: string, salary: number) {
    this.username = username;
    this.salary = salary;
    this.msg = function () {
      return `Hello ${this.username} Your Salary Is ${this.salary}`;
    };
  }
  sayMsg() {
    return `Hello ${this.username} Your Salary Is ${this.salary}`;
  }
}
let userOne1 = new User1(`Elzero`, 6000);
// console.log(userOne1.username);
// console.log(userOne1.salary);
console.log(userOne1.msg());
console.log(userOne1.sayMsg());
