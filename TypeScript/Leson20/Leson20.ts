/*
  Data Types
  - Union And Intersection Types
  --- Union Type
  ------ The | Symbol Is Used To Create The Union => "Or"

  --- Intersection Type
  ------ Is A Type That Combines Several Types Into One
  ------ The & Symbol Is Used To Create An Intersection => "And"

  --- If A Union Is An OR, Then An Intersection Is An AND.
*/

// let all2: number | string =100;

type A = {
  one: string;
  tow: number;
  three: boolean;
};
type B = A & {
  four: number;
};

type C = {
  five: boolean;
};
type mix = A & C;

function getActions(btns: B) {
  console.log(`Hello ${btns.one}`);
  console.log(`Hello ${btns.tow}`);
  console.log(`Hello ${btns.three}`);
  console.log(`Hello ${btns.four}`);
}
getActions({ one: 'string', tow: 100, three: true, four: 200 });
