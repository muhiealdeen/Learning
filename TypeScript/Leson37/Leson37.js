"use strict";
class Collection {
    constructor() {
        this.data = [];
    }
    add(itme) {
        this.data.push(itme);
    }
}
let itemTwo = new Collection();
itemTwo.add({
    itemType: 'Book',
    title: 'Uncharted',
    style: 'Action',
    price: 150,
});
console.log(itemTwo);
//# sourceMappingURL=Leson37.js.map