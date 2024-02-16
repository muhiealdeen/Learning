"use strict";
const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;
var level;
(function (level) {
    level[level["Kids"] = 15] = "Kids";
    level[level["Easy"] = 9] = "Easy";
    level[level["Medium"] = 6] = "Medium";
    level[level["Hard"] = 3] = "Hard";
})(level || (level = {}));
let lvl = 'Easy';
if (lvl === 'Easy') {
    console.log(`The Level Is ${lvl} And the Number Of Seconds Is ${level.Easy}`);
}
//# sourceMappingURL=Leson17.js.map