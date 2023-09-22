/*
https://leetcode.com/problems/first-missing-positive/description/
41. First Missing Positive   [Hard - AMAZON]
Given an unsorted integer array nums, return the smallest missing positive integer.
You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

Example 1:
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.

Example 2:
Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.

Example 3:
Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
*/

const cyclicSort = (nums) => {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] > 0 && nums[i] <= nums.length) {
            let moveTo = nums[i] - 1;
            if (nums[moveTo] !== nums[i]) {
                [nums[i], nums[moveTo]] = [nums[moveTo], nums[i]];
            } else {
                i++;
            }
        } else {
            i++;
        }
    }
    return nums;
}

const firstMissingPostive = (nums) => {
    let sortedArray = cyclicSort(nums)
    for (let i = 0; i < sortedArray.length; i++) {
        if(sortedArray[i] !== i+1){
            return i+1;
        }
    }
    return -1;
}

const nums = [1,2,0];
console.log(firstMissingPostive(nums));