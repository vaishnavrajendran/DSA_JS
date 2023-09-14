// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
// The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelT ms.

// Example 1:
// Input: fn = (x) => x * 2, args = [4], t = 35, cancelT = 190
// Output: 
// [
//    {"time": 0, "returned": 8},
//    {"time": 35, "returned": 8},
//    {"time": 70, "returned": 8},
//    {"time": 105, "returned": 8},
//    {"time": 140, "returned": 8},
//    {"time": 175, "returned": 8}
// ]
// Explanation: 
// const cancel = cancellable(x => x * 2, [4], 35);
// setTimeout(cancel, 190);

// Every 35ms, fn(4) is called. Until t=190ms, then it is cancelled.
// 1st fn call is at 0ms. fn(4) returns 8.
// 2nd fn call is at 35ms. fn(4) returns 8.
// 3rd fn call is at 70ms. fn(4) returns 8.
// 4th fn call is at 105ms. fn(4) returns 8.
// 5th fn call is at 140ms. fn(4) returns 8.
// 6th fn call is at 175ms. fn(4) returns 8.
// Cancelled at 190ms\




var cancellable = function (fn, args, t) {
    const timeout = setInterval(() => {
        fn(...args);
    }, t);
    return () => clearInterval(timeout)
};


const result = []

const fn = (x) => x * 2
const args = [4], t = 35, cancelT = 190

const start = performance.now()

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start)
    result.push({ "time": diff, "returned": fn(...argsArr) })
}

const cancel = cancellable(log, args, t);

setTimeout(() => {
    cancel()
}, cancelT)

setTimeout(() => {
    console.log(result)  // [
    //      {"time":0,"returned":8},
    //      {"time":35,"returned":8},
    //      {"time":70,"returned":8},           
    //      {"time":105,"returned":8},
    //      {"time":140,"returned":8},
    //      {"time":175,"returned":8}
    //  ]
}, cancelT + t + 15)
