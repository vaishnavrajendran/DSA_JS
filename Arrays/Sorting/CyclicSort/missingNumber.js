/* COMES UNDER CYCLIC SORT APPROACH */
/*
https://leetcode.com/problems/missing-number/description/

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.  [EASY-GOOGLE]
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

*/

const missingNumber = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== i && array[i] <= array.length) {
            let moveTo = array[i]
            let temp = array[i]
            array[i] = array[moveTo]
            array[moveTo] = temp;
            i-- 
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== i) {
            return i;
        }
    }
    return array.length;
}

const array = [9, 6, 4, 2, 3, 5, 7, 0, 1]
console.log(missingNumber(array));