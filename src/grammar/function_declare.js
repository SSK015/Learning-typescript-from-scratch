var mySum = function (x, y) {
    return x + y;
};
var answer = mySum(5, 6);
console.log(answer);
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
console.log(a);
