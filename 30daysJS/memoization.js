function memoize(fn) {
    const cache = {}
    return function (...args) {
        const key = JSON.stringify(args)
        if(cache[key] === undefined){
            cache[key] = fn(...args)
        }
        return cache[key]
    }
}



let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
console.log(memoizedFn(2, 3));// 5
console.log(memoizedFn(2, 3));// 5
console.log(callCount) // 1 