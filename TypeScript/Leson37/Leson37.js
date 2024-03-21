"use strict";
class Collection {
    constructor() {
        this.data = [];
    }
    add(itme) {
        this.data.push(itme);
    }
}
let itemOne = new Collection();
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
//# sourceMappingURL=Leson37.js.map