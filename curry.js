

const curry = (func) => {
	return function curried (...args) {
		if (args.length >= func.length) {
			return func.apply(this, args)
		}
		
		return function(...moreArgs) {
			return curried.apply(this, args.concat(moreArgs))
		}
	}
}



const sum = (a, b, c) => a + b + c
const curried = curry(sum)

console.log(sum(1,2,3))
console.log(curried(1,2,3))
console.log(curried(1)(2,3))



