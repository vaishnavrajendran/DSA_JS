/*           BubbleSort || ExchangeSort || SinkingSort                  */
// in every iteration the last element in the array gets sorted from the end.means last elements gets become bigger numbers  

const bubbleSort = (array) => {
    let isSwapped = false;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {   
            if (array[j + 1] < array[j]) {
                let temp = array[j+1]
                array[j+1] = array[j];
                array[j] = temp
                isSwapped = true;
            }
        }
        if(!isSwapped) {    //if already sorted
            console.log("Array is already sorted");
            break
        } 
    }
    return array;
}

// const array = [2, 45, 78, 22, 11, 23, 0]
const array = [1,2,3,4,5,6,7]
console.log(bubbleSort(array));