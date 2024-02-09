/*
  Type Annotations With Functions

  - noImplicitAny

  - noImplicitReturns
  --- Will Check All Code Paths In A Function To Ensure They Return A Value

  - noUnusedLocals
  --- Report Errors On Unused Local Variables

  - noUnusedParameters
  --- Report Errors On Unused Parameters In Functions.
*/

let showMsg = true;

function showDetails(name: string, age: number, salary: number): string {
  let test = 10;

  if (showMsg) {
    return `Hello ${name} your age is${age}, Your salary is ${salary}, Test Variable${test}`;
  }
  return ` No data to show`;
}
console.log(showDetails('Osama', 40, 5000));
