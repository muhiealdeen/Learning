/*
  Class
  - Static Members
  --- Don't Use "name, length, call"
*/

class User4 {
  static created: number = 0;
  static getCount(): void {
    console.log(`${this.created} objects created`);
  }
  constructor(public username: string) {
    User4.created++;
  }
}
let u1 = new User4(`Elzero`);
let u2 = new User4(`Ahmad`);
let u3 = new User4(`Osama`);
User4.getCount();
