/*
  Class
  - Get And Set Accessors
*/

class User3 {
  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }
  msg: () => string;
  constructor(
    private _username: string,
    public salary: number,
    public readonly address: string,
  ) {
    this.msg = function () {
      return `Hello ${this._username} Your Salary Is ${this.salary}`;
    };
  }
  sayMsg() {
    return `Hello ${this._username} Your Salary Is ${this.salary}`;
  }
  get username(): string {
    return this._username;
  }
  set username(value: string) {
    this._username = value;
  }
}

let userOne3 = new User3('Elzero', 6000, 'Cairo');

console.log(userOne3.username);
userOne3.username = 'Ahmed';
console.log(userOne3.username);
console.log(userOne3.salary);
console.log(userOne3.msg());
console.log(userOne3.sayMsg());
