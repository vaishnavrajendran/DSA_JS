// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
// After a delay of t, fn should be called with args passed as parameters unless cancelFn was invoked before the delay of t milliseconds elapses, specifically at cancelT ms. In that case, fn should never be called.

// Input: fn = (x) => x**2, args = [2], t = 100, cancelT = 50 
// Output: []
// Explanation: 
// const cancel = cancellable((x) => x**2, [2], 100); // fn(2) not called
// setTimeout(cancel, 50);

// The cancellation was scheduled to occur after a delay of cancelT (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.


var cancellable = function(fn, args, t) {
    const timer= setTimeout(()=>{
         fn(...args);
 
     },t);
 
     return ()=> clearTimeout(timer);
 };

const result = []
const fn = (x) => x * 5
const args = [2], t = 20, cancelT = 50
const start = performance.now()
const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ "time": diff, "returned": fn(...argsArr) })
}

const cancel = cancellable(log, args, t);
const maxT = Math.max(t, cancelT)
setTimeout(() => {
    console.log("123");
    cancel()
}, cancelT)
setTimeout(() => {
    console.log(result) // [{"time":20,"returned":10}]
}, maxT + 15)