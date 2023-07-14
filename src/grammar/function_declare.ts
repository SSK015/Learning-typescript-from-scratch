let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}

let answer = mySum(5,6);

console.log(answer);