console.log(2>1);   
console.log(2>=1);   
console.log(2<1);   
console.log(2==1);   
console.log(2!=1);   

console.log("2" > 1);
console.log("02" > 1);

let value = Number(null)

console.log (value);

console.log(value == 0);

// note: Avoid from these type of conversions may responsible for confusion, while understanding them!

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);

console.assert(undefined < 0);
console.assert(undefined == 0);
console.assert(undefined >= 0);
console.assert(undefined <= 0);

// "===" strictly check 

console.log("2" === 2);