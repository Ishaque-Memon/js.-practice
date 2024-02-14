let score = "33"
// let score = undefined note: it is type
// let score = null note:it  represents the absence of an object value
// let score = ""
// let score = true
console.log(typeof score);  
console.log(typeof (score));
let value = 123
let a = BigInt(value)

console.log(typeof a);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// let valueInString = String(score)
// console.log(typeof valueInString);

//"33" => 33
//"33abc" => NaN Not a number

// let isloggedIn = undefined output : false
// let isloggedIn = null output : false
// let isloggedIn = "" output : false
// let isloggedIn = "haseeb" output: true
// let isloggedIn = 1 output : true

// let booleanisLoggedIN = Boolean(isloggedIn);

// console.log(booleanisLoggedIN);

// 1 => true , 0=> false in boolean

// *****************Basic Math Operations****************** //
// + => addition
// * => multiplication
// - => subtraction
// / => division
// ** => raise to the power
// % => use for reminder
// == => Equality
// 
let Value = 33
let negativeValue = -Value

console.log(negativeValue);

console.log(2*3);

let str1 = "haseeb"
let str2 = "meymon"
let str3 = str1 + str2

console.log(str3);


console.log("1"+2);
console.log(1+"2");
console.log("2"-2);
console.log(2-2*true);
console.log(3 + 5 * 2 % 2);
