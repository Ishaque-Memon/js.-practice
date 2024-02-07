"use strict";  //Treat all Js code as newer version. 
//Note: With strict mode, you can not, for example, use undeclared variables.

//accountId = 2 just like this is undeclared variable

//var accountId = 2 This is correct way to declare an variable
//console.log(accountId);

// alert(3+3) Note: we are using nodejs, not browser

// let accountEmail = "hellog@gmail.com"

// accountEmail = "hellog@gmail.com"  //automatically shoulld
var accountEmail = "hig@gmail.com"
let state;

console.table([accountEmail])
//Total are 8 Datatypes in JavaScript which are primitive and non primitive
// =>Primitive Datatypes note: Primitive data types are immutable, meaning their values cannot be changed once assigned.

//number =>  2 to power 53
//bigint
//string => ""
// boolean =>true/false
//null => standalone value
//undefined
//symbol => unique

// Non-Primitive Datatype note: Non-primitive data types are mutable and can be modified. 
// Object
let a = BigInt(123456789)
console.log(typeof 2); //output: number
console.log(typeof ""); //output: string
console.log(typeof a); //output: bigint
console.log(typeof true); //output: boolean 
console.log(typeof true); //output: boolean 
console.log(typeof undefined); //output: undefined
console.log(typeof null); //output: object
console.log(typeof Object); //output: function

let x;
console.log(x); //output: undefined

function dosomething(){
    // return no value , output shows undefined type
}
let obj ={};
console.log(dosomething()); //output: undefined
console.log(obj.property);