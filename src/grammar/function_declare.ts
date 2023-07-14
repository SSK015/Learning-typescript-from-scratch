let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}

let answer = mySum(5,6);

console.log(answer);

function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a: any[] = [];
push(a, 1, 2, 3);
console.log(a);