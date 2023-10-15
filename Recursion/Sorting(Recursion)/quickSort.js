function quickSort(array, left = 0, right = array.length - 1) {
    if (array.length > 1) {
        const pivot = findPivot(array, left, right)
        console.log("pivot", pivot);
        console.log("array>", array);
        if (left < pivot - 1) {
            quickSort(array, left, pivot - 1)
        }
        if (right > pivot) {
            quickSort(array, pivot, right)
        }
    }
    return array
}

function findPivot(array, start, end) {
    let i = start;
    let j = end;
    let mid = array[Math.floor((start + end) / 2)]
    while (i <= j) {
        while (array[i] < mid) {
            i++
        }

        while (mid < array[j]) {
            j--
        }

        if (i <= j) {
            [array[i], array[j]] = [array[j], array[i]]
            i++
            j--
        }
    }
    return i
}

console.log(quickSort([10, 9, 12, 8, 19, 7]));