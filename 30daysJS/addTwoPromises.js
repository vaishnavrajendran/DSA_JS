var addTwoPromises = async function (promise1, promise2) {
    promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
    promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
    return new Promise.all([(promise1, promise2)]).then((p1, p2) => {
        return p1+p2
    })
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log); // 4