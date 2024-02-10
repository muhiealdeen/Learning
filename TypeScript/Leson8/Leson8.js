"use strict";
let showMsg = true;
function showDetails(name, age, salary) {
    let test = 10;
    if (showMsg) {
        return `Hello ${name} your age is${age}, Your salary is ${salary}, Test Variable${test}`;
    }
    return ` No data to show`;
}
console.log(showDetails('Osama', 40, 5000));
//# sourceMappingURL=Leson8.js.map