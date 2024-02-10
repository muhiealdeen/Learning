/*
  Function
  - Rest Parameter
  - What About Float => All Is Under Type Number
*/
function addAll(...numbers: number[]) {
  let result = 0;
  // for( let i =0 i<numbers.length;i++){
  //   result += numbers[i]
  // }
  numbers.forEach((number) => (result += number));
  return result;
}

console.log(addAll(10, 20, 30, 100, 10.5, +true));
