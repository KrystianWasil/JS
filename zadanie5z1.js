function checkPalindrome(str) {
    return [...str].join('') === [...str].reverse().join('');
}

console.log(checkPalindrome('kajak kaja')) // false
console.log(checkPalindrome('kajak kajak')) // true