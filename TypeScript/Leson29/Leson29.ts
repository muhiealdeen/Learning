/*
  Class
  - Get And Set Accessors
*/

class User3 {
  msg: () => string;
  constructor(
    private _username: string,
    protected salary: number,
    public readonly address: string,
  ) {
    this.msg = function () {
      return `Hello ${this._username} Your Salary Is ${this.salary}`;
    };
  }
  sayMsg() {
    return `Hello ${this._username} Your Salary Is ${this.salary}`;
  }
  get username() {
    return this._username;
  }
  set username(value: string) {
    this._username = value;
  }
}
let userOne3 = new User3(`Elzero`, 6000, `Egypt`);

console.log(userOne3.username);
userOne3.username = `Ahmad `;
console.log(userOne3.username);
console.log(userOne3.salary);
console.log(userOne3.msg());
console.log(userOne3.sayMsg());
