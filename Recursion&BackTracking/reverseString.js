function reverse(str){
    let split = str;
    if(typeof str === 'string') split = str.split("");
    if(split.length === 1) return split;
    let popped = split.pop(); 
    let reversed = popped.concat(reverse(split))
    return reversed;
} 
console.log(reverse('helloo'));