const sumOfNumbers = (number) => {
    const remainder = Math.floor(number % 10);
    if (number < 10) return number;
    // in case of (number < 10), if we returned number.toString(). Type coersion will occur and we can avoid the commented line under
    // return remainder.toString().concat(sumOfNumbers(Math.floor(number / 10)))    // used to reverse number
    return remainder + sumOfNumbers(Math.floor(number / 10))
}

console.log(sumOfNumbers(123456)); //output : 1+2+3+4+5+6 = 21


/* reverse a number */
function reverseNumber(number, reversed = 0) {
    if (number === 0) return reversed;
    const remainder = number % 10;
    const newReversed = (reversed * 10) + remainder;
    return reverseNumber(Math.floor(number / 10), newReversed);
}

console.log(reverseNumber(123456)); // Output: 654321



