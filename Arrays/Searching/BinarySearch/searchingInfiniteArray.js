/*Assume it is an infinte array */
const infinteArraySearch = (array, target) => {
    let start = 0, end = 1;
    while (target > array[end]) {
        let temp = end + 1
        end = end + ((end - start + 1) * 2) //double the size of array every time both start and end should change
        start = temp
    }
    return binarySearch(array, start, end, target)
}

const binarySearch = (array, start, end, target) => {
    while (start <= end) {
        let mid = Math.floor(start + ((end - start) / 2))
        if (array[mid] === target) return mid;
        if (array[mid] > target) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return -1
}
const numbers = Array.from({ length: 100 }, (_, i) => i + 1); // creates an array upto 100
console.log(infinteArraySearch(numbers, 21));