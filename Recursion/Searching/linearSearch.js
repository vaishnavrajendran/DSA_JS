const linearSearch = (array, find) => {
    return search(array, find, 0, []);
}

const search = (array, find, index, allIndexArray) => {
    if (index === array.length) {
        return allIndexArray.length > 0 ? allIndexArray : -1;
    }

    if (array[index] === find) {
        allIndexArray.push(index);
    }

    return search(array, find, index + 1, allIndexArray); 
}
//logs multiple occurances
console.log(linearSearch([1, 2, 3, 4, 3, 6, 3], 3));

