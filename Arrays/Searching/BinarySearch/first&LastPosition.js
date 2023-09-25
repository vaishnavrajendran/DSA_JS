/*
34. Find First and Last Position of Element in Sorted Array  [Medium]
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]

*/

/* APPROACH 1 */

const searchRange = (nums, target) => {
    let start = 0, end = nums.length - 1;
    if (nums.length === 0) return [-1, -1];
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            let results = [mid, mid];
            let left = mid - 1, right = mid + 1;
            while (nums[left] === target) {
                results[0] = left;
                left--;
            }
            while (nums[right] === target) {
                results[1] = right;
                right++;
            }
            return results;
        }
        if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    
    return [-1, -1];
};

// console.log(searchRange([5,7,7,8,8,10], 8));


/* APPROACH 2 - TWO BINARY SEARCH's */

const searchRange1 = (nums, target) => {
    let first = binarySearch(nums, target, true);
    let last = binarySearch(nums, target, false);

    if (first > last) {
        return [-1, -1];
    }

    return [first, last];
}

const binarySearch = (nums, target, isFirst) => {
    let start = 0, end = nums.length - 1;
    let result = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] < target) {
            start = mid + 1;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            result = mid;
            if (isFirst) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }

    return result;
}

// Example usage:
const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
console.log(searchRange1(nums, target)); // Output: [3, 4]
