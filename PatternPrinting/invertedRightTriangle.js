/*
    *****
    ****
    ***
    **
    *
*/

const invertedTriangle = (number) => {
    for (let i = number; i > 0; i--) {
        let stars = '';
        for (let j = 1; j <= i; j++) {
            stars = stars.concat('*')
        }
        console.log(stars);
    }
}

invertedTriangle(5)