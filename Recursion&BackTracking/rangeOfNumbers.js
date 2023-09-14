let arr = []
function range(start, end) {
    if(start<end){
        arr.push(start)
        return range(++start, end)
    }
    arr.push(end)
    return arr;
}

console.log(range(5, 11));
