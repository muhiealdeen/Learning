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

type Last = Buttons & {
  x: boolean;
};
function getActions(btns: Last) {
  console.log(`Acti For Button Up Is ${btns.up}`);
  console.log(`Acti For Button Right Is ${btns.right}`);
  console.log(`Acti For Button Left Is ${btns.left}`);
  console.log(`Acti For Button Down Is ${btns.down}`);
  console.log(`Acti For Button x Is ${btns.x}`);
}

getActions({
  up: 'Jump',
  down: 'go down',
  left: 'fo left',
  right: 'got rigt',
  x: true,
});
