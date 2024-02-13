/*
  Data Types
  - Literal Types
*/

type num = 0 | 1 | -1;
function compare(num1: number, num2: number): num {
  if (num1 === num2) {
    return 0;
  } else if (num1 > num2) {
    return 1;
  } else {
    return -1;
  }
}

console.log(compare(10, 10)); // 0
console.log(compare(10, 5)); // 1
console.log(compare(5, 10)); //-1
