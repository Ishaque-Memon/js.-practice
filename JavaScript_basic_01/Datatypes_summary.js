// Q how we stores data  in memory? what are the methods to store data.

// Datatypes => There are two methods which are responsible to store data in memory, which are divided into two types: 

// 1. Primitive Datatypes => call by value

// 2. Non-Primitive Datatypes => call by reference

// Primitive Datatypes are : call by value.

/* 1. Number
   2. Bigint
   3. Boolean
   4. string
   5. var
   6. const
   7. let
   8. automatically => we can declare variable to store the data in memory without declaring, name of datatype.
      note: By default it is var datatypes.
      suggestion: Not! better for good practicing.
   
    9. null
   10. undefined  
   11. Symbol => create unique values. To create an unique symbol/value for component.
*/
// Non-Primitive Datatypes are: call by reference.
/* 
    1. Objects => note: If you want to master Js,then master Objects it's mandatory and also master web Events / Browser Events for more 
                        Professional.
    2. Arrays
    3. Functions
*/

/* Return type of variables in JavaScript
1) Primitive Datatypes
Number => number
String  => string
Boolean  => boolean
null  => object
undefined  =>  undefined
Symbol  =>  symbol
BigInt  =>  bigint

2) Non-primitive Datatypes
Arrays  =>  object
Function  =>  function
Object  =>  object
*/

// JavaScript is Static Type language or Dynamic Type language?
/* 
JavaScript is a dynamically typed language. 
This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. 
You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean

On the other hand, statically typed languages require you to declare the variable's type explicitly, 
and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. 
Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.

*/
// Primitive datatype examples
const store = 100
const stored = 100.2
const isloggedIn = false

let id = Symbol('123')
let anotherId = Symbol('123')

console.log(id == anotherId)
console.log(id === anotherId)
console.log(typeof anotherId);

//Non-Primitive datatype examples. 

//array are create by declaring the varaible and assign the values in [] large bracses. for example
const student = ["haseeb", "ali", "abbas"];

console.log(student);
// objects are creates with curly bracses {} and assign to declaring the object name. for example

let myObj = {
 
   name: "haseeb",
   age: 21,


}
console.log(myObj.name, myObj.age);

// function are creates with function (){}, for example.

const myfunction = function(){
   console.log("I'm haseeb!");
}
// calling the function...
myfunction();

// another example of function

let person = function (){

   Name= "haseeb"
    Age = 21
    
   }
   // calling function...
   person();