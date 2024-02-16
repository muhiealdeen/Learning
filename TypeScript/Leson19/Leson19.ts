/*
  Data Types
  - Type Assertions
  --- Sometime Compiler Doesnt Know The Information We Do
  --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
*/

// let myImg = document.getElementById('myImg') as HTMLImageElement;
let myImg = <HTMLImageElement>document.getElementById('myImg');
console.log(myImg.src);
