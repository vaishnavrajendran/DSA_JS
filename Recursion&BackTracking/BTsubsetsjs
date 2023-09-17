//Backtracking algorithm
//Find all possible subsets of an array.
// [1, 2, 3]-----> [[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3], []]

function subsets(array) {
    let temp = [];
    let result = [];

    function recursiveCall(array, i) {
        if (i === array.length) {
            return result.push([...temp])
        }
        temp.push(array[i])
        recursiveCall(array, i + 1);
        temp.pop()
        recursiveCall(array, i + 1)
    }
    recursiveCall(array, 0)
    return result;
}

console.log(subsets([1, 2, 3]));