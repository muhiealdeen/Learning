"use strict";
function logging(msg) {
    console.log(msg, 'msg');
    return;
}
console.log(logging('I anm a Messsage'));
console.log('Test');
const fail = (msg) => {
    throw new Error(msg);
};
function alwayslog(name) {
    while (true) {
        console.log(name);
    }
}
alwayslog('Ahmed');
//# sourceMappingURL=Leson16.js.map