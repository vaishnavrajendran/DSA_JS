const printPatern = (number) => {
    for (let i = 0; i < number; i++) {
        let stars = "";
        for (let j = 0; j <= i; j++) {
            stars = stars.concat('*')   //concat every time returns a new string so reassigning stars.concat to stars is important.
        }
        console.log(stars);
    }
}

printPatern(5)