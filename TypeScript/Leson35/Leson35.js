"use strict";
function returnType(val) {
    return val;
}
console.log(returnType(10));
console.log(returnType('Hello'));
const returntypeArrowSyntax = (val) => val;
console.log(returntypeArrowSyntax(10));
console.log(returntypeArrowSyntax('Hello'));
function textType(val) {
    return `The Value is ${val} The Type Is ${typeof val}`;
}
console.log(textType(10));
console.log(textType('Hello'));
function multipleType(valueOne, valueTwo) {
    return `The First Value is ${valueOne} The second Type Is ${valueTwo}`;
}
console.log(multipleType('Elzero', 10));
console.log(multipleType('Hello', true));
//# sourceMappingURL=Leson35.js.map