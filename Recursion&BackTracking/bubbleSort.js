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
