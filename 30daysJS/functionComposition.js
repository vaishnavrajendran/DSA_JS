// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65

function compose(functions) {
  return function (x) {
    return functions.reduceRight((result, fn) => fn(result), x);
  };
}

const composedFunction = compose([x => x + 1, x => 2 * x]);

// Now, you can use the composed function:
const result = composedFunction(3); // This will be (2 * 3) + 1 = 7


// const fn = compose([x => x + 1, x => 2 * x])
// console.log(fn(4));
