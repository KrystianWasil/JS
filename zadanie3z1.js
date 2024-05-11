function printNumbers(nr){
    let result = ''
    for (let i = 1; i <=nr; ++i) {
        result+=i+' '
    }
    return result
}

console.log(printNumbers(10))