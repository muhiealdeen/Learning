/*
  Interface
  - ReOpen The Interface And Use Cases
*/
// homepage
interface Settings {
  readonly theme: boolean;
  font: string;
}

// Article Page
interface Settings {
  sidebar?: boolean;
}

// Contact Page
interface Settings {
  external: boolean;
}

let userSettings: Settings = {
  theme: true,
  font: 'Open Sans',
  // sidebar: false,
  external: true,
};
