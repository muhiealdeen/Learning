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
class Colection<T> {
  public data: T[] = [];
  add(itme: T): void {
    this.data.push(itme);
  }
}
