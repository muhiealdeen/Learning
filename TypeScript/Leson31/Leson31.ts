/*
  Class
  - Implement Interface
*/
interface Settings5 {
  theme: boolean;
  font: string;
  sane(): void;
}
class User5 implements Settings5 {
  constructor(
    public username: string,
    public theme: boolean,
    public font: string,
  ) {}
  sane(): void {
    throw new Error('Method not implemented.');
  }
  save(): void {
    console.log(`Saved`);
  }
  update(): void {
    console.log(`Updated`);
  }
}
let userFive = new User5(`Elzero`, true, 'Open Sane');
console.log(userFive.username);
console.log(userFive.theme);

userFive.save();
userFive.update();
