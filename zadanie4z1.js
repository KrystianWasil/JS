function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let counter = 0

for (i = 0; i < 10;i++) {
    if (generateRandom(1,20) > 10) {
        counter++
    } 
}
console.log(counter >= 5 ? 'udalo sie' : 'niestety nie')