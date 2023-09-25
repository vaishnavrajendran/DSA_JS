/*

https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
448. Find All Numbers Disappeared in an Array  [EASY-GOOGLE]
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]

*/

const cyclicSort = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let moveTo = nums[i] - 1;
        if (nums[i] !== i + 1 && nums[i] <= nums.length && nums[moveTo] !== nums[i]) {
            let temp = nums[i];
            nums[i] = nums[moveTo];
            nums[moveTo] = temp;
            i--;
        }
    }
    return nums;
}

const findDisappearedNumbers = (nums) => {
    const sortedArray = cyclicSort(nums)
    let missingArray = [];
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] !== i + 1) {
            missingArray.push(i + 1)
        }
    }
    return missingArray;
}

const nums1 = [4, 3, 2, 7, 8, 2, 3, 1]
const nums2 = [1, 1]
console.log(findDisappearedNumbers(nums1));
console.log(findDisappearedNumbers(nums2));