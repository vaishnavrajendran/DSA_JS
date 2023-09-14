const once = function (fn) {
    let called = false
    return function (...args) {
        if(!called) {
            called = true;
            return fn(...args)
        }
        return undefined
    }
}

const fn = (a,b,c) => a+b+c
const onceFn = once(fn)
console.log(onceFn(1,2,3));
console.log(onceFn(1,2,4));