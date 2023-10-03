const rotatedBinarySearch = (array, start, end, target) => {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === target) return mid;
    if (array[start] < array[mid]) {
        if (target > array[start] && target < array[mid]) {
            return rotatedBinarySearch(array, start, mid - 1, target)
        } else {
            return rotatedBinarySearch(array, mid + 1, end, target)
        }
    } else {
        if (target > array[mid] && target < array[end]) {
            return rotatedBinarySearch(array, mid + 1, end, target)
        } else {
            return rotatedBinarySearch(array, start, mid - 1, target)
        }
    }
}

const array = [6, 7, 8, 9, 0, 1, 2, 3, 5];
let start = 0, end = array.length - 1;
console.log(rotatedBinarySearch(array, start, end, 3));