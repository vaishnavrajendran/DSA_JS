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


function printStars(num) {
    printTriangle(num, 0, '');
}

const printTriangle = (r, c, stars) => {
    if (c < r) {
        stars = stars.concat('*');
        printTriangle(r, c + 1, stars);
    } else {
        console.log(stars);
        if (r > 0) {
            printTriangle(r - 1, 0, '');
        }
    }
}

printStars(5);


