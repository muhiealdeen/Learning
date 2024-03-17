/*
  Generics
  - Classes
*/
class User6<T = string> {
  constructor(public value: T) {}
  show(msg: T): void {
    console.log(`${msg} -- ${this.value}`);
  }
}
let userSix = new User6<string>('Muhie');
console.log(userSix.value);
userSix.show('Massages');

let userSix2 = new User6<number | string>(100);
console.log(userSix2.value);
userSix2.show('Massege');
