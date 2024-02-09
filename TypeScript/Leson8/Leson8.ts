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

function showDetails(name, age, salary) {
  if (showMsg) {
    return `Hello ${name} your age is${age}, Your salary is`;
  }
}
console.log(showDetails('Osama', 40, 5000));
