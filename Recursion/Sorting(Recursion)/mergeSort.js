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

/* APPROACH 2 (sameArray manipulation) */

const mergeSortInPlace = (array, start = 0, end = array.length - 1) => {
    if (start < end) {
        let mid = Math.floor((start + end) / 2);
        mergeSortInPlace(array, start, mid);
        mergeSortInPlace(array, mid + 1, end);
        mergeArray(array, start, mid, end);
    }
}

const mergeArray = (array, start, mid, end) => {
    let leftSize = mid - start + 1;
    let rightSize = end - mid;

    let leftArray = new Array(leftSize);
    let rightArray = new Array(rightSize);

    for (let i = 0; i < leftSize; i++) {
        leftArray[i] = array[start + i];
    }

    for (let j = 0; j < rightSize; j++) {
        rightArray[j] = array[mid + 1 + j];
    }

    let i = 0, j = 0, k = start;

    while (i < leftSize && j < rightSize) {
        if (leftArray[i] <= rightArray[j]) {
            array[k++] = leftArray[i++];
        } else {
            array[k++] = rightArray[j++];
        }
    }

    while (i < leftSize) {
        array[k++] = leftArray[i++];
    }

    while (j < rightSize) {
        array[k++] = rightArray[j++];
    }
}

let arr = [10, 9, 12, 8, 19, 7];
mergeSortInPlace(arr);
console.log(arr);
