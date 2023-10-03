function factorial(num) {
    while (num !== 0) {
        return num * factorial(num - 1)
    }
    if(num === 0) return 1
}
console.log(factorial(5));

// Time: O(n)
// Space: O(n)