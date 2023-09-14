// example arr = [11,12,1,3]
function firstIndex(n, i) { return i === 0; } // [11]
function greaterThan10(n) { return n > 10; }  // [11,12]
function plusOne(n) { return n + 1 }          // [12,13,2,4]


const arr = [11, 20, -1, 2]
var map = function (arr, fn) {
    // const filteredArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //   const element = arr[i];
    //   const shouldInclude = fn(element, i);
    //   if (shouldInclude) {
    //     filteredArr.push(element);
    //   }
    // }
    // return filteredArr;

    /* Efficient */
    const filteredArr = []
    let j=0
    for(let i =0;i<arr.length;i++){
      if(fn(arr[i],i)){
          filteredArr[j] = arr[i] 
          j++
      }
    }
    return filteredArr
}

console.log(map(arr, firstIndex));
console.log(map(arr, greaterThan10));
console.log(map(arr, plusOne));