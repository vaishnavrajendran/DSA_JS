function arrayMultiplication(array) {
    if (array.length === 0) {
        return 1;
    } else {
        return array[0] * arrayMultiplication(array.slice(1));
    }
}

console.log(arrayMultiplication([1, 2, 3, 4]));