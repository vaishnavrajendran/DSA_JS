// basic code
Array.prototype.myMap = function() {
    let mapReturn = []
    for(let i = 0; i<this.length; i++) {
        mapReturn.push(this[i])
    }
    return mapReturn;
}

let arr = [1,2,3,4];
console.log(arr.myMap())
