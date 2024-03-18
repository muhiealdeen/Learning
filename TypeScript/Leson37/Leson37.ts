/*
  Generics
  - Classes And Interfaces
*/
interface book {
  itemType: string;
  title: string;
  isbn: number;
}
class Colection<T> {
  public data: T[] = [];
  add(itme: T): void {
    this.data.push(itme);
  }
}
