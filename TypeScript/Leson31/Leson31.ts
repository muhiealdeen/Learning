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
  constructor(public username: string, public theme: boolean) {}
  font: string;
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
