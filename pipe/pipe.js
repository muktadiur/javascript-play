const add = (num) => num + 2;
const multiply = (num) => num * 2;

const result = multiply(add(5));
console.log(result);

const pipe =
    (...fns) =>
    (num) =>
        fns.reduce((result, fn) => fn(result), num);
const res = pipe(add, multiply)(5);

console.log(res);
