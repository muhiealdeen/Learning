/*
  Generics
  - Classes And Interfaces
*/
class Colection<T> {
  public data: T[] = [];
  add(itme: T): void {
    this.data.push(itme);
  }
}
