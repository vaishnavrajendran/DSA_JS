const orderAgnosticBinarySearch = (array, search) => {
    let start = 0;
    let end = array.length - 1;
    let isAscending = array[start] < array[end];

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] === search) return mid;

        if (isAscending) {
            if (search < array[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (search > array[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }

    return -1;
}

const array = [90, 81, 76, 70, 65];
const search = 65;
console.log(orderAgnosticBinarySearch(array, search));
