const skipString = (string, skip) => {
    if (string === '') return ''
    if (string.startsWith(skip)) {
        const skippedString = string.slice(skip.length)
        return skipString(skippedString, skip)
    }
    return string[0] + skipString(string.slice(1), skip)
}

console.log(skipString('sappletring', 'apple'));