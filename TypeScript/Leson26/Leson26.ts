/*
  Interface
  - Interface vs Type Aliases
  - Take A Look On HTMLElement Interface
*/
let el = document.getElementById("id") as HTMLElement;
// homepage
type Settings1 {
  readonly theme: boolean;
  font: string;
  sidebar?: boolean;
  external: boolean;
}


let userSettings1: Settings1 = {
  theme: true,
  font: 'Open Sans',
  // sidebar: false,
  external: true,
};