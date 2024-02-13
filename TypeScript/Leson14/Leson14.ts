/*
  Data Types
  - Literal Types
*/
function compare(num1: number, num2: number) {
  if (num1 === num2) {
    return 'Equal';
  } else if (num1 > num2) {
    return 'Greater';
  } else {
    return 'Lesser';
  }
}

console.log(compare(10, 10)); // Equal
console.log(compare(10, 5)); // Greater
console.log(compare(5, 10)); // Lesser
