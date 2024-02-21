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
  id?: number;
  readonly username: string;
  country: string;
}

let user: User = {
  // id: 1,
  username: 'Ahmed',
  country: 'Egypt',
};

user.country = 'Syria';
console.log(user);

function getData(data: User) {
  console.log(`User ID: ${data.id}`);
  console.log(`User Name: ${data.username}`);
  console.log(`User Country: ${data.country}`);
}
getData({ id: 200, username: 'Ali', country: 'KSA' });
