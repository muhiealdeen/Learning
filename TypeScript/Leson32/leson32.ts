/*
  Class
  - Abstract Classes And Members
  --- We Cannot Create An Instance Of An Abstract Class
*/

class Food {
  getCookingTime(): void {
    console.log(' Coooking Time Is ...');
  }
}
class Pizza extends Food {
  // getCookingTime (): void {
  //   console.log(" Coooking Time Is 20 Minutes");
  // }
}
class Burger extends Food {}
