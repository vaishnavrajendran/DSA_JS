const sortedArray = (array, index) => {
    if(index === array.length -1 ) return true
    return (array[index]<array[index+1]) && sortedArray(array, index+1)
}

console.log(sortedArray([1,2,3,7,4,6,7], 0));