function checkPalindrome(str) {
    return [...str].join('') === [...str].reverse().join('');
}

console.log(checkPalindrome('kajak kaja')) // false
console.log(checkPalindrome('kajak kajak')) // true
const strr = 'kocham pwio'
console.log([...strr].reverse().join(''))// true