/*
  Function
  - Optional and Default Parameters

  - In JavaScript, Every Parameter Is Optional => "undefined" If You Didnt Use It
  - "?" Optional Parameter
*/

function showData(neme?: string, age?: number, country?: string): string {
  neme = neme || 'un';
  return `Hello ${neme}, Your Age Is ${age}, Your Country Is ${country}`;
}
console.log(showData('Osama', 38, 'Egypt'));
