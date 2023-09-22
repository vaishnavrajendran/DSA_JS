/*

https://leetcode.com/problems/find-the-duplicate-number/description/
287. Find the Duplicate Number  [Medium-GOOGLE]  
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
There is only one repeated number in nums, return this repeated number.
You must solve the problem without modifying the array nums and uses only constant extra space.

Example 1:
Input: nums = [1,3,4,2,2]
Output: 2

Example 2:
Input: nums = [3,1,3,4,2]
Output: 3

*/

const cyclicSort = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let moveTo = nums[i] - 1;
        if(nums[i] !== i+1 && nums[moveTo] !== nums[i] && nums[i] <= nums.length) {
            [nums[i], nums[moveTo]] = [nums[moveTo], nums[i]]
            i--;
        }
    }
    return nums;
}

const findDuplicate = (nums) => {
    const sortedArray = cyclicSort(nums)
    for(let i = 0; i < sortedArray.length; i++){
        if(sortedArray[i] !== i+1){
            return sortedArray[i]
        }
    }
    return -1;
}

const nums1 = [2,5,9,6,9,3,8,9,7,1]
console.log(findDuplicate(nums1));
