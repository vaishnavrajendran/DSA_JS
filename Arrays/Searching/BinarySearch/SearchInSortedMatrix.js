const searchInSortedMatrix = (matrix, target) => {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return [-1, -1];
    }

    const rows = matrix.length;
    const cols = matrix[0].length;

    let row = 0;
    let col = cols - 1;

    while (row < rows && col >= 0) {
        const current = matrix[row][col];

        if (current === target) {
            return [row, col];
        } else if (current < target) {
            row++;
        } else {
            col--;
        }
    }

    return [-1, -1];
};


const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
];

const target = 3;
const result = searchInSortedMatrix(matrix, target);

if (result[0] !== -1 && result[1] !== -1) {
    console.log(`Target ${target} found at row ${result[0]} and column ${result[1]}.`);
} else {
    console.log(`Target ${target} not found in the matrix.`);
}
