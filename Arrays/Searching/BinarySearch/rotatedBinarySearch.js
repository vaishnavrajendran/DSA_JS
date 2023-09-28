// leetcode 33 [Medium]  
/* APPROACH 1 */  //Both will not work for array with duplicate elements
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

console.log(rotatedBinarySearch([3, 5, 1, 3, 3], 5));

/* APPROACH 2 (more efficient)*/
const findMaxIndex = function (array, start, end) {
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (mid < end && array[mid] > array[mid + 1]) return mid;
        if (mid > start && array[mid] < array[mid - 1]) return mid - 1;
        if (array[mid] <= array[start]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1
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
    //Find pivot
    let maxIndex = findMaxIndex(array, start, end)
    if (array[maxIndex] === target) return maxIndex;
    if (maxIndex === -1) {
        return binarySearch(array, start, end, target)
    }
    if (target >= array[start]) {
        return binarySearch(array, start, maxIndex - 1, target)
    } else {
        return binarySearch(array, maxIndex + 1, end, target)
    }
}

console.log(search([3, 5, 1], 3));