function range(start, end) {
    if(end<start){
        return []
    } else {
        const numbers = range(start, end-1);
        numbers.push(end)
        return numbers;
    }

}

console.log(range(5, 11));
