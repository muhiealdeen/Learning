/*
  Data Types
  - Advanced Type Alias
*/

type Buttons = {
  up: string;
  down: string;
  left: string;
  right: string;
};
function getActions(btns: Buttons) {
  console.log(`Acti For Button Up Is ${btns.up}`);
  console.log(`Acti For Button Right Is ${btns.right}`);
  console.log(`Acti For Button Left Is ${btns.left}`);
  console.log(`Acti For Button Down Is ${btns.down}`);
}
