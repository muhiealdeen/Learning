/*
  Data Types
  - Void
  --- Function That Will Return Nothing
  --- Function In JavaScript That Not Return A Value Will Show undefined
  --- undefined is not void
  - Never
  --- Return Type Never Returns
  --- The Function Doesn't Have A Normal Completion
  --- It Throws An Error Or Never Finishes Running At All "Infinite Loop"
*/
function logging(msg: string): void {
  console.log(msg, 'msg');
  return;
}

console.log(logging('I anm a Messsage'));
console.log('Test');

const fail = (msg: string) => {
  throw new Error(msg);
  // return 10;
};
function alwayslog(name): never {
  while (true) {
    console.log(name);
  }
}
alwayslog('Ahmed');
// console.log('Test');
