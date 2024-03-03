"use strict";
class User5 {
    constructor(username, theme, font) {
        this.username = username;
        this.theme = theme;
        this.font = font;
    }
    sane() {
        throw new Error('Method not implemented.');
    }
    save() {
        console.log(`Saved`);
    }
    update() {
        console.log(`Updated`);
    }
}
let userFive = new User5(`Elzero`, true, 'Open Sane');
console.log(userFive.username);
console.log(userFive.theme);
userFive.save();
userFive.update();
//# sourceMappingURL=Leson31.js.map