/*
  Type Annotations With Object
*/

let myObject: {
  readonly userName: string;
  id: number;
  hire?: boolean;
  skils: {
    one: string;
    two: string;
  };
} = {
  userName: 'Elzero',
  id: 100,
  // hire: true,
  skils: {
    one: 'HTML',
    two: 'CSS',
  },
};

// myObject.userName = 'Osama';
myObject.id = 200;
// myObject.hire = false;

console.log(myObject.userName);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skils.one);
console.log(myObject.skils.two);
