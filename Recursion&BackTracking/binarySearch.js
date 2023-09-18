const sortedArray = [10, 22, 56, 71, 170, 200]
let find = 170;

const binarySearch = (sortedArray, start, end, find) => {
    if (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (sortedArray[mid] === find) return mid;
        if (sortedArray[mid] > find) {
            return binarySearch(sortedArray, start, mid - 1, find);
        } else {
            return binarySearch(sortedArray, mid + 1, end, find);
        }
    }
    return -1;
}

console.log(binarySearch(sortedArray, 0, sortedArray.length - 1, find));
