const arr = [12,1,23,44,18,44, 44];
// function secLargest(arr) {
//     let largest = arr[0], sec = arr[1]; 
//     for(let i = 2; i<arr.length; i++){
//         if(arr[i] > largest ) {
//             sec = largest;
//             largest = arr[i];
//         } else if (arr[i] > sec && arr[i] !== largest){
//             sec = arr[i];
//         } 
//     }
//     return sec;
// }
// console.log("The sec largest is :", secLargest(arr));

// const sortedArr = arr.sort((a,b) => b-a);
// console.log(sortedArr.find(val => val<sortedArr[0]));