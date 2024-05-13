function random(max) {
    return Math.floor(Math.random() * max)
}

let arr = []
for (i = 0; i < 10; i++) {
    arr.push(random(100))
}


console.log(arr) //podglad tablicy

arr.sort((a, b) => a - b)
console.log(arr) //posortowana tablica

console.log(arr.reduce((a, b) => a + b)) //suma elementów tablicy
console.log(arr.reduce((a, b) => a + b) / arr.length) //średnia elementów tablicy