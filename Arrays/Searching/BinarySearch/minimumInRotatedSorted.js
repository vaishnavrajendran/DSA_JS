/*
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
153. Find Minimum in Rotated Sorted Array
Example 1:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

Example 3:
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
*/

const findPivotIndex = (nums) => {
    let start = 0, end = nums.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (mid < end && nums[mid] > nums[mid + 1]) return mid
        if (mid > start && nums[mid - 1] > nums[mid]) return mid - 1
        if (nums[0] > nums[mid]) {
            end = mid - 1
        }
        else {
            start = mid + 1
        }
    }
    return -1
}

const findMin = (nums) => {
    const pivotIndex = findPivotIndex(nums)
    return nums[pivotIndex + 1]
};

console.log(findMin([4,5,6,7,0,1,2]));