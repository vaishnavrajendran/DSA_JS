function palindrome(num) {
    if (typeof num === 'number') num = num.toString().split("");
    if (num.length <= 1) {
        return true;
    } else {
        const lastNum = num.pop();
        const isSame = lastNum === num.shift();
        return isSame && palindrome(num);
    }
}

console.log(palindrome(121));