const fib = (num) => {
    if (num < 2) return num;
    return fib(num - 1) + fib(num - 2);
};

const memo = (func) => {
    const cache = {};
    return (...args) => {
        if (args.toString() in cache) {
            return cache[args.toString()];
        }
        const result = func.apply(this, args);
        cache[args.toString()] = result;
        return result;
    };
};

const memoFib = memo(fib);

console.log(memoFib(42));
console.log(memoFib(42));
console.log(memoFib(42));
console.log(memoFib(42));
console.log(memoFib(42));
console.log(memoFib(42));
console.log(memoFib(42));
console.log(memoFib(42));
console.log(memoFib(42));
console.log(memoFib(42));
console.log(memoFib(42));
console.log(memoFib(42));
console.log(memoFib(42));
console.log(memoFib(42));
console.log(memoFib(42));
console.log(memoFib(42));
