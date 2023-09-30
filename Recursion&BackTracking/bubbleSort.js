const bubbleSort = (array) => {
    return doSort(array, array.length, 0)
}

const doSort = (array, length, index) => {
    if (length > 0) {
        if (index < array.length - 1) {
            if (array[index] > array[index + 1]) {
                let temp = array[index]
                array[index] = array[index + 1]
                array[index + 1] = temp
            }
            doSort(array, length, index + 1)
        } else {
            doSort(array, length - 1, 0)
        }
    }
    return array
}

console.log(bubbleSort([21, 23, 12, 11, 14]));
