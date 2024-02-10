"use strict";
function addAll(...numbers) {
    let result = 0;
    numbers.forEach((number) => (result += number));
    return result;
}
console.log(addAll(10, 20, 30, 100, 10.5, +true));
//# sourceMappingURL=Leson10.js.map