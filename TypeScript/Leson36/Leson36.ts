/*
  Generics
  - Classes
*/
class User6 {
  constructor(public value: string) {}
  show(msg: string): void {
    console.log(`${msg} -- ${this.value}`);
  }
}
let userSix = new User6('Muhie');
console.log(userSix.value);
userSix.show('Massages');

let userSix2 = new User6('Muhie');
console.log(userSix2.value);
userSix2.show('Massages');
