/*
  Class
  - Abstract Classes And Members
  --- We Cannot Create An Instance Of An Abstract Class
*/

abstract class Food {
  constructor(public title: string) {}
  abstract getCookingTime(): void;
  // {
  //   console.log(' Coooking Time Is ...');
  // }
}
class Pizza extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }
  getCookingTime(): void {
    console.log(' Coooking Time For Pizzaq Is 60 Minutes');
  }
}
class Burger extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }
  getCookingTime(): void {
    console.log(' Coooking Time For Burger Is 30 Minutes');
  }
}
