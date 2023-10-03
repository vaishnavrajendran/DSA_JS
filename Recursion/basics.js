function callUptoSpecific (start, end) {
    if (start === end) return end
        console.log(start);
        return callUptoSpecific(++start, end)
}
console.log(callUptoSpecific(0, 5));

