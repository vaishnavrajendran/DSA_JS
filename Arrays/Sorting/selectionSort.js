const selectionSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j
            }
        }
        if (i !== minIndex) {
            let temp = array[i];
            array[i] = array[minIndex]
            array[minIndex] = temp
        }
    }
    return array;
}

const array = [12, 32, 11, 8, 27, 9]
console.log(selectionSort(array));