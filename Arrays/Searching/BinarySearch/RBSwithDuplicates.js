/*  https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solutions/3519916/c-java-python-javascript-binary-search-intuition-approach-complexity-explained/
*/
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (target === nums[mid]) {
            return true;
        } else if (nums[start] < nums[mid]) {
            if (nums[start] <= target && nums[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else if (nums[mid] < nums[start]) {
            if (nums[end] >= target && nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else {
            start += 1;
        }
    }

    return false;
};