/* Approach 1 */

// function rotate(arr,leng) {
//     let len = 0;
//     while (leng>len) {
//         arr.unshift(arr[arr.length-len-1])
//         arr.pop()
//         len++
//     }
//     return arr;
// }

// console.log("Rotated Number", rotate([1,2,3,4,5],3))

/* Approach 2 */

// function rotateArrayByKSteps(arr, k) {
//     if (k === 0 || arr.length === 0) {
//       return arr;
//     }
//     const n = arr.length;
//     k = k % n;
//     const rotatedPart = arr.splice(-k);
//     arr.unshift(...rotatedPart);
//     return arr;
//   }
  
//   const originalArray = [1, 2, 3, 4, 5];
//   const k = 3;
//   const rotatedArray = rotateArrayByKSteps(originalArray, k);
//   console.log(rotatedArray); // Output: [3, 4, 5, 1, 2]

/* Approach 3 */

// function rotate(arr, k) {  
//   reverse(arr,0,arr.length-1)
//   reverse(arr,0,k-1)
//   reverse(arr,k,arr.length-1)
//   return arr;
// }

// function reverse(arr, left, right) {
//   while(left<right) {
//     let temp = arr[left];
//     arr[left++] = arr[right];
//     arr[right--] = temp;
//   }
// }

// console.log("Rotated Array:", rotate([1,2,3,4,5,6], 3));