/*
  Generics
  - Classes And Interfaces
*/
interface Book {
  itemType: string;
  title: string;
  isbn: number;
}

interface Game {
  itemType: string;
  title: string;
  style: string;
  price: number;
}
class Collection<T> {
  public data: T[] = [];
  add(itme: T): void {
    this.data.push(itme);
  }
}

let itemOne = new Collection<Book>();
itemOne.add({ itemType: 'Book', title: 'Atomic Habits', isbn: 12345 });
itemOne.add({ itemType: 'Book', title: 'Follow Your Heart', isbn: 54321 });
console.log(itemOne);

let itemTwo = new Collection();
itemTwo.add({
  itemType: 'Book',
  title: 'Uncharted',
  style: 'Action',
  price: 150,
});
console.log(itemTwo);
