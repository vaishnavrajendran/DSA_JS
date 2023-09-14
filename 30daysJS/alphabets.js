function checkCase(char) {
    if(typeof char === 'number') return -1;
    const charCode = char.charCodeAt(0);  
    if (charCode >= 65 && charCode <= 90) {
      return 1; // Uppercase
    } else if (charCode >= 97 && charCode <= 122) {
      return 0; // Lowercase
    }
  }
  
  console.log(checkCase(9)); // Output: 1
  