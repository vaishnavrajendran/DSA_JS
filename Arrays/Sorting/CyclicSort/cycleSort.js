/* in all cases of range 1 to N use cyclic sort */

const cycleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        if(array[i] !== i+1){
            let moveIndex = array[i]-1
            let temp = array[i]
            array[i] = array[moveIndex]
            array[moveIndex] = temp;
            i--;
        } 
    }
    return array;
}

const array = [2, 1, 4, 3, 5]
console.log(cycleSort(array));