/*
  Type Annotations With Multidimensional Arrays
*/

let arrayOnr: number[] = [1, 2, 3, 4, 5];
let arrayTwo: string[] = ['A', 'B', 'C', 'D', 'E'];


let arrayThree: (number | string)[ ] -[1, 2, 3, 4, 5, "A", "B", "C", "D", "E"];
let arrayaFor: (number | boolean | string[] | boolean[] | string)[] = [1, 2, true, false, ['A', 'B',], [true, false], 'Osama'];