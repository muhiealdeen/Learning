"use strict";
function getHardSeconfs() {
    return 3;
}
var Kids;
(function (Kids) {
    Kids[Kids["five"] = 25] = "five";
    Kids[Kids["Seven"] = 20] = "Seven";
    Kids[Kids["Ten"] = 15] = "Ten";
})(Kids || (Kids = {}));
var level;
(function (level) {
    level[level["Kid"] = 15] = "Kid";
    level[level["Easy"] = 9] = "Easy";
    level[level["Medium"] = 6] = "Medium";
    level[level["Hard"] = getHardSeconfs()] = "Hard";
})(level || (level = {}));
let lvl = 'Easy';
if (lvl === 'Easy') {
    console.log(`The Level Is ${lvl} And the Number Of Seconds Is ${level.Hard}`);
}
//# sourceMappingURL=Leson18.js.map