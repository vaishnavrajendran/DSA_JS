const searchMatrix = (array, target) => {
    let row = 0, column = array[0].length - 1;
    while (row < array[0].length && column >= 0) {
        if (array[row][column] === target) return [row, column]
        if (array[row][column] < target) {
            row++
        } else {
            column--
        }
    }
    return [-1, -1]
}

const array = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [28, 29, 37, 49],
    [33, 34, 38, 50]
]

console.log(searchMatrix(array, 34));