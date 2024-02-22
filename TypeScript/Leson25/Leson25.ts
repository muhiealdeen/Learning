/*
  Interface
  - Extending Interfaces
*/
interface User2 {
  id?: number;
  username: string;
  country: string;
}
interface Moderator {
  role: string | number;
}
interface Admin extends User2, Moderator {
  protect?: boolean;
}

let user2: Admin = {
  id: 100,
  username: 'Ahmed',
  country: 'Egypt',
  role: 'Mod',
  protect: true,
};

console.log(user2.id);
