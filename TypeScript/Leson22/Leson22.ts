/*
  Interface
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use Read Only And Optional Operator
*/

interface User {
  id: number;
  username: string;
  country: string;
}

let user: User = {
  id: 1,
  username: 'Ahmed',
  country: 'Egypt',
};
console.log(user);
