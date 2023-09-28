/*
410. Split Array Largest Sum  [Hard-GOOGLE]
Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.
Return the minimized largest sum of the split.
A subarray is a contiguous part of the array.

Example 1:
Input: nums = [7,2,5,10,8], k = 2
Output: 18
Explanation: There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.

Example 2:
Input: nums = [1,2,3,4,5], k = 2
Output: 9
Explanation: There are four ways to split nums into two subarrays.
The best way is to split it into [1,2,3] and [4,5], where the largest sum among the two subarrays is only 9.
*/

function splitArray(nums, k) {
    // Define the binary search range (left and right)
    let left = Math.max(...nums);  // The minimum possible result is the largest number in nums
    let right = nums.reduce((acc, num) => acc + num, 0); // The maximum possible result is the sum of all elements

    // Define a helper function to check if it's possible to split the array into k subarrays
    function canSplit(maxSum) {
        let subarrays = 1;
        let currentSum = 0;

        for (let num of nums) {
            currentSum += num;

            if (currentSum > maxSum) {
                subarrays++;
                currentSum = num;

                if (subarrays > k) {
                    return false;
                }
            }
        }

        return true;
    }

    // Perform binary search to find the minimized largest sum
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (canSplit(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

// Example usage:
console.log(splitArray([7, 2, 5, 10, 8], 2)); // Output: 18
console.log(splitArray([1, 2, 3, 4, 5], 2)); // Output: 9