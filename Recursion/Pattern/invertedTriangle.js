/*

*****
****
***
**
*
*
**
***
****
*****

*/

function printStarts(num) {
    return printTriangle(num, 0, '')
}

const printTriangle = (c, r, stars) => {
    if (c === 0) return stars;
    while (r < c) {
        stars = stars.concat('*')
        r++
    }
    if (c === r) {
        console.log(stars);
        printTriangle(c - 1, 0, '')
        console.log(stars);
    }
}

printStarts(5)