/*
https://leetcode.com/problems/set-mismatch/description/
645. Set Mismatch       [Easy]
You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
You are given an integer array nums representing the data status of this set after the error.
Find the number that occurs twice and the number that is missing and return them in the form of an array.

Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]

Example 2:
Input: nums = [1,1]
Output: [1,2]

*/

const cyclicSort = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let moveTo = nums[i] - 1;
        if (nums[i] !== i + 1 && nums[i] <= nums.length && nums[moveTo] !== nums[i]) {
            [nums[i], nums[moveTo]] = [nums[moveTo], nums[i]]
            i--
        }
    }
    return nums;
}

const findErrorNums = function (nums) {
    const sortedArray = cyclicSort(nums)
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] !== i + 1) {
            return [sortedArray[i], i+1]
        }
    }   
    return -1
};

const nums = [1,1]
console.log(findErrorNums(nums));