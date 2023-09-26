/* APPROACH 1 (more preffered in my case)*/ 
const rotatedBinarySearch = (array, target) => {
    let start = 0, end = array.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (array[mid] === target) return mid;
        if (array[start] <= array[mid]) {
            if (target < array[mid] && target >= array[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (target > array[mid] && target <= array[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
}

console.log(rotatedBinarySearch([5, 1, 3], 5));

/* APPROACH 2 (more edge cases to be managed) */
const findMaxIndex = function (array, start, end) {
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (array[mid] < array[mid + 1]) {
            start = mid + 1
        } else {
            end = mid
        }
    }
    return start
}

const binarySearch = (sortedArray, start, end, find) => {
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (sortedArray[mid] === find) return mid;
        if (sortedArray[mid] > find) {
            end = mid - 1;
        } else {
            start = mid + 1
        }
    }
    return -1;
}

const search = (array, target) => {
    let start = 0, end = array.length - 1;
    let maxIndex = findMaxIndex(array, start, end)
    const firstArrayValue = binarySearch(array, start, maxIndex, target);
    const secondArrayValue = binarySearch(array, maxIndex + 1, end, target)
    return firstArrayValue !== -1 ? firstArrayValue : secondArrayValue
}

console.log(search([5, 1, 3], 5));