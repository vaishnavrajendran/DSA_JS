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

console.log(rotatedBinarySearch([5, 6, 7, 8, 1, 2, 3, 4], 3));