/*
  Generics
  - Help Write A Reusable Code
  - Allow To Pass Type As A Parameter To Another Type
  - You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
  - We Can Create:
  --- Generic Classes
  --- Generic Functions
  --- Generic Methods
  --- Generic Interfaces
*/

function returnNumber(val: number): number {
  return val;
}
function returnString(val: string): string {
  return val;
}
function returnBoolean(val: boolean): boolean {
  return val;
}
console.log(returnNumber(12));
console.log(returnString('Hello'));
console.log(returnBoolean(true));

function returnType<GenericType>(val: GenericType): GenericType {
  return val;
}

console.log(returnType<number>(12));
console.log(returnType<string>('Hello'));
console.log(returnType<boolean>(true));
console.log(returnType<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
