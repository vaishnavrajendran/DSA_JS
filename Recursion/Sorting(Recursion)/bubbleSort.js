/* using only recursion */
const bubbleSort = (array) => {
    return doSort(array, array.length, 0)
}

const doSort = (array, length, elem) => {
    if (length === 0) return array
    if (elem < length) {
        if (array[elem] > array[elem + 1]) {
            let temp = array[elem]
            array[elem] = array[elem + 1]
            array[elem + 1] = temp
        }
        return doSort(array, length, elem + 1)
    } else {
        return doSort(array, length - 1, 0)
    }
}

console.log(bubbleSort([21, 23, 12, 11, 14]));

/* while loop + recursion */
const bubbleSort1 = (array) => {
    return doSort1(array, array.length - 1, 0)
}

const doSort1 = (array, length, index) => {
    if (length === 0) return array;
    while (index < length) {
        if (array[index] > array[index + 1]) {
            let temp = array[index]
            array[index] = array[index + 1]
            array[index + 1] = temp
        }
        index++
    }
    if (index === length) return doSort1(array, length - 1, 0)
}

console.log(bubbleSort1([21, 23, 12, 11, 14]));