"use strict";
let mySum = function (x, y) {
    return x + y;
};
let answer = mySum(5, 6);
console.log(answer);
function push(array, ...items) {
    items.forEach(function (item) {
        array.push(item);
    });
}
let a = [];
push(a, 1, 2, 3);
console.log(a);
