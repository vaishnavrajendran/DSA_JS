const insertionSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i+1; j > 0; j--) {
           if(array[j]>array[j-1]){
            let temp = array[j-1]
            array[j-1] = array[j]
            array[j] = temp 
           } else {
            break;
           }
        }
    }
    return array;
}

const array = [12, 9, 11, 27, 6, 3]
console.log(insertionSort(array));