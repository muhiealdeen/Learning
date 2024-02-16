/*
  Data Types
  - Enums => Enumerations
  --- Enum Can Refer To Other Enum
  --- Enum Can Refer To Same Enum
  --- Enum Can Have Calculations
  --- Enum Can Have Functions
*/

function getHardSeconfs(): number {
  return 3;
}
enum Kids {
  five = 25,
  Seven = 20,
  Ten = 15,
}

enum level {
  Kid = Kids.Ten,
  Easy = 9,
  Medium = Easy - 3,
  Hard = getHardSeconfs(),
}

let lvl: string = 'Easy';
if (lvl === 'Easy') {
  console.log(`The Level Is ${lvl} And the Number Of Seconds Is ${level.Hard}`);
}
