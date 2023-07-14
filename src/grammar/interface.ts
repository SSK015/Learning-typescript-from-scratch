interface Person {
    readonly name: string;
    age?: number;
    [propName: string]: any;
}

let TOM: Person = {
    name: 'TOM',
    gender: 'male',
    zhekexingqiu: 'earth'
}