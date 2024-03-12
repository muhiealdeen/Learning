/*
  Generics
  - Arrow Function
  - Multiple Types
  - Discussion
*/
function returnType<T>(val: T): T {
  return val;
}
console.log(returnType<number>(10));
console.log(returnType<string>('Hello'));

const returntypeArrowSyntax = <T>(val: T): T => val;
console.log(returntypeArrowSyntax<number>(10));
console.log(returntypeArrowSyntax<string>('Hello'));

function textType<T>(val: T): string {
  return `The Value is ${val} The Type Is ${typeof val}`;
}
console.log(textType<number>(10));
console.log(textType<string>('Hello'));
