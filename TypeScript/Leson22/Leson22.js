"use strict";
let user = {
    username: 'Ahmed',
    country: 'Egypt',
};
user.country = 'Syria';
console.log(user);
function getData(data) {
    console.log(`User ID: ${data.id}`);
    console.log(`User Name: ${data.username}`);
    console.log(`User Country: ${data.country}`);
}
getData({ id: 200, username: 'Ali', country: 'KSA' });
//# sourceMappingURL=Leson22.js.map