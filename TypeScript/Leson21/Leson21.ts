/*
  Type Annotations With Object
*/
let myObject: {
  userName: string;
  id: number;
  hire: boolean;
} = {
  userName: 'Elzero',
  id: 100,
  hire: true,
};

myObject.userName = 'Osama';
myObject.id = 200;
myObject.hire = false;

console.log(myObject.userName);
console.log(myObject.id);
console.log(myObject.hire);
