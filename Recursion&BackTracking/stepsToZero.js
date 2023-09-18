const stepsToZero = (number, count = 0) => {
    if(number === 0) return count
    if(number %2 === 0) {
        return stepsToZero(number/2, count+1)
    } else {
        return stepsToZero(number-1, count+1)
    }
}

console.log(stepsToZero(14, 0));
