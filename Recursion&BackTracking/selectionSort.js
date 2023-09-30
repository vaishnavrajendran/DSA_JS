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

const selectionSort = (array) => {
    return doSort(array, array.length, 0, 0);
}

const doSort = (array, r, c, max) => {
    if (r === 0) return array;
    if (c < r) {
        if (array[c] > array[max]) {
            doSort(array, r, c + 1, c);
        } else {
            doSort(array, r, c + 1, max);
        }
    } else {
        let temp = array[max];
        array[max] = array[r - 1];
        array[r - 1] = temp;
        doSort(array, r - 1, 0, 0);
    }
    return array;
}

console.log(selectionSort([21, 12, 14, 11, 9]));