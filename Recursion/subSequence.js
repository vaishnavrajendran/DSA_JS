const findSequence = (string) => {
    return find("", string);
}

const find = (pro, unpro) => {
    if (unpro.length === 0) {
        console.log(pro);
        return;
    }
    const first = unpro.charAt(0);
    const rest = unpro.slice(1);
    find(pro + first, rest);
    find(pro, rest);
}

findSequence('abc');