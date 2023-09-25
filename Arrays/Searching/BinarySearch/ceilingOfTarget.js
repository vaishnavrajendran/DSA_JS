/*   https://leetcode.com/problems/find-smallest-letter-greater-than-target/
You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.
Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.
 
Example 1:
Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

Example 2:
Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

Example 3:
Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
*/

const nextGreatestLetter = (letters, target) => {
    let start = 0, end = letters.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (letters[mid] <= target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    // return start < letters.length ? letters[start] : letters[0];
    /* The commented step can be replaced by using " return letters[start % letters.length] " */
    return letters[start % letters.length];
};

const letters = ["c", "f", "j"];
console.log(nextGreatestLetter(letters, "j"));
