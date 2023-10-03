function reverse(str){
    let split = str;
    if(typeof str === 'string') split = str.split("");
    if(split.length === 1) return split;
    let popped = split.pop(); 
    let reversed = popped.concat(reverse(split))
    return reversed;
} 

/* 2nd Approach */

function reverse(str) {
    if(str.length === 1) return str;
    return reverse(str.substr(1)) + str.charAt(0)
}

console.log(reverse('helloo'));