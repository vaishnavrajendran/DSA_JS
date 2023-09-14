let str = 'hello';
let str1 = 'olleh'

const anagram = function (str1, str2) {
    if(str1.length !== str2.length) throw new Error("Not anagram")
    const obj1 = new Object();
    const obj2 = new Object();
    for(i=0; i<str1.length; i++){
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
    }

    for(let key of str1) {
        if(obj1[key] !== obj2[key]) return false
    }
    return true
}

console.log(anagram(str,str1));