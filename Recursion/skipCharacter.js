/* Remove a from the string */
const removeAlphabet = (string, remove) => {
    if (string === '') return ''
    const firstChar = string[0];
    const restChars = string.slice(1)
    if (firstChar === remove) {
        return removeAlphabet(restChars, remove)
    } else {
        return firstChar + removeAlphabet(restChars, remove)
    }
}

console.log(removeAlphabet('abbaaacbua', 'a'));