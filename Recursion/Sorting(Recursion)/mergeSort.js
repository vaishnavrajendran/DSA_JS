/*Approach 1 returns new array */
// const mergeSort = (array) => {
//     if (array.length === 1) {
//         return array
//     }
//     let mid = Math.floor(array.length / 2)
//     let first = mergeSort(array.slice(0, mid))
//     let second = mergeSort(array.slice(mid, array.length))
//     return mergeArrays(first, second)
// }

// const mergeArrays = (first, second) => {
//     let i = 0, j = 0
//     let sortedArray = []
//     while (i < first.length && j < second.length) {
//         if (first[i] < second[j]) {
//             sortedArray.push(first[i])
//             i++
//         } else {
//             sortedArray.push(second[j])
//             j++
//         }
//     }

//     while (i < first.length) {
//         sortedArray.push(first[i])
//         i++
//     }

//     while (j < second.length) {
//         sortedArray.push(second[j])
//         j++
//     }

//     return sortedArray

// }

// console.log(mergeSort([10, 9, 12, 8, 19, 7]));

/* APPROACH 2 (sameArray manipulation) */

const mergeSort = (array, start = 0, end = array.length - 1) => {
    if (start >= end) return; // Base case: array of length 1 or empty

    const mid = Math.floor((start + end) / 2);

    mergeSort(array, start, mid);
    mergeSort(array, mid + 1, end);
    merge(array, start, mid, end);
}

const merge = (array, start, mid, end) => {
    const leftSize = mid - start + 1;
    const rightSize = end - mid;

    // Create temporary arrays for left and right halves
    const leftArray = new Array(leftSize);
    const rightArray = new Array(rightSize);

    // Copy data to temporary arrays
    for (let i = 0; i < leftSize; i++) {
        leftArray[i] = array[start + i];
    }
    for (let i = 0; i < rightSize; i++) {
        rightArray[i] = array[mid + 1 + i];
    }

    // Merge the two arrays back into the original array
    let i = 0, j = 0, k = start;
    while (i < leftSize && j < rightSize) {
        if (leftArray[i] <= rightArray[j]) {
            array[k++] = leftArray[i++];
        } else {
            array[k++] = rightArray[j++];
        }
    }

    // Copy remaining elements of leftArray, if any
    while (i < leftSize) {
        array[k++] = leftArray[i++];
    }

    // Copy remaining elements of rightArray, if any
    while (j < rightSize) {
        array[k++] = rightArray[j++];
    }
}

// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10];
mergeSort(arr);
console.log(arr); // Output: [3, 9, 10, 27, 38, 43, 82]
