// const selectionSort = (array) => {
//     for (let i = 0; i < array.length - 1; i++) {
//         let minIndex = i
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[minIndex] > array[j]) {
//                 minIndex = j
//             }
//         }
//         if (i !== minIndex) {
//             let temp = array[i];
//             array[i] = array[minIndex]
//             array[minIndex] = temp
//         }
//     }
//     return array
// }

// console.log(selectionSort([21, 12, 14, 11, 9]));

// const selectionSort = (array) => {
//     return doSort(array, array.length, 0, 0);
// }

// const doSort = (array, len, elem, max) => {
//     if (len === 0) return array
//     if (elem < len) {
//         if (array[elem] > array[max]) {
//             doSort(array, len, elem + 1, elem)
//         } else {
//             doSort(array, len, elem + 1, max)
//         }
//     } else {
//         let temp = array[max]
//         array[max] = array[len - 1]
//         array[len - 1] = temp
//         doSort(array, len - 1, 0, 0)
//     }
//     return array
// }

// console.log(selectionSort([21, 12, 14, 11, 9]));

const selectionSort = (array) => {
    return doSort(array, array.length - 1, 0, 0)
}

const doSort = (array, length, index, max) => {
    if (length === 0) return array
    if (index <= length) {
        if (array[index] > array[max]) {
            max = index
        }
        return doSort(array, length, index + 1, max)
    }
    let temp = array[length]
    array[length] = array[max]
    array[max] = temp
    return doSort(array, length - 1, 0, 0)
}

console.log(selectionSort([21, 12, 14, 11, 25]));