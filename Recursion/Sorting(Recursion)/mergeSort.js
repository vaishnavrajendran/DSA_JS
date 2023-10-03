/*Approach 1 returns new array */
const mergeSort = (array) => {
    if (array.length === 1) {
        return array
    }
    let mid = Math.floor(array.length / 2)
    let first = mergeSort(array.slice(0, mid))
    let second = mergeSort(array.slice(mid, array.length))
    return mergeArrays(first, second)
}

const mergeArrays = (first, second) => {
    let i = 0, j = 0
    let sortedArray = []
    while (i < first.length && j < second.length) {
        if (first[i] < second[j]) {
            sortedArray.push(first[i])
            i++
        } else {
            sortedArray.push(second[j])
            j++
        }
    }

    while (i < first.length) {
        sortedArray.push(first[i])
        i++
    }

    while (j < second.length) {
        sortedArray.push(second[j])
        j++
    }

    return sortedArray

}

console.log(mergeSort([10, 9, 12, 8, 19, 7]));
