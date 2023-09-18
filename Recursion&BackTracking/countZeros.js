const countZeros = (number) => {
    let count = 0;
    return helper(number, count)
}

const helper = (number, count) => {
    if (number === 0) return count + 1;
    if (number < 10 && number !== 0) return count
    let lastDigit = number % 10;
    let newNumber = Math.floor(number / 10)
    if (lastDigit === 0) {
        return helper(newNumber, count + 1)
    } else {
        return helper(newNumber, count)
    }
}

console.log(countZeros(100001));


/* Approach 2 */
const countZeros1 = (number, count = 0) => {
    let str = number.toString();

    if (str.length === 1) {
        if (str === '0') {
            count += 1;
        }
    }

    if (str.charAt(0) === '0') {
        count += 1;
    }

    if (str.length > 1) {
        return countZeros(str.substr(1), count);
    }

    return count;
}

// console.log(countZeros1(10001)); // Output: 3
