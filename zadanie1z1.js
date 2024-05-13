let a = 10;
console.log(a == 10) //true
console.log(a == "10") //true
console.log(a != 20) //true
console.log(a != 10) //false
console.log(a != "10") //false
console.log(a === 10) //true
console.log(a === "10") //false
console.log(a !== 10) //false
console.log(a !== "10") //true
// console.log("10"  > 10) //?

/* Operatory porównań róznią się od siebie uwzaględnianiem  typów, gdy uzywamy '=='to nie sprawdzamy typów, natomiast przy '===' poza wartościami porównywane są tez typy, w praktyce częściej uzywa się porównania '==='*/