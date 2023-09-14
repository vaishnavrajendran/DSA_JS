// [1,1,1,2,2,3,3,4,5] => [1,2,3,4,5]

/* Approach 1 */

// const arr = [1,1,1,2,2,3,3,4,5];
// const newArr = new Set(arr);
// console.log("New Arr", Array.from(newArr));

/* Approach 2 (Two pointer method)*/

// function removeDuplicate(arr) {
//     let i = 0;
//     for (let j = 1; j < arr.length; j++) {
//         if(arr[i] !== arr[j])
//             i++;
//             arr[i] = arr[j]
//     }
//     return i+1;
// }
// const arr = [1,1,1,2,2,3,3,4,5];
// arr.length = removeDuplicate(arr)         //works only for sorted arrays
// console.log("Array is", arr);

/* Approach 3 */

function removeDuplicates(arr) {
    const uniqueArray = [];
    const seenElements = {};
  
    for (const element of arr) {
      if (!seenElements[element]) {
        uniqueArray.push(element);
        seenElements[element] = true;
      }
    }
  
    return uniqueArray;
  }
  
  const unsortedArray = [3, 1, 2, 2, 1, 4, 5, 4];
  const withoutDuplicates = removeDuplicates(unsortedArray);
  
  console.log(withoutDuplicates);  // Output: [3, 1, 2, 4, 5]
  