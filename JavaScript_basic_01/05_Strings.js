const name = 'haseeb'
const repoCount = 50

// console.log(name + repoCount + " value"); this syntax is common and not prefer to use...

console.log(`hello this me ${name} and my repoCount is ${repoCount}`); // always use backtick `` for displaying any message use ${} for variable injecting, also always know as string Interpolation.

//When String is called as a constructor (with "new" keyword), it creates a String object, which is not a primitive.
const gameName = new String('haseeb_meymon');

console.log(typeof gameName); //object => string object are not primitive
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); //creates strings message in uppercase 
console.log(gameName.charAt(5)); //finds the letters by giving postion.
console.log(gameName.indexOf('b')); //finds the position of giving letter.
 
const newString = gameName.substring(0, 6);
console.log(newString);
const anotherString = gameName.slice(-7);
console.log(anotherString);

const newStringOne = "  haseeb  "
console.log(newStringOne);
console.log(newStringOne.trim());

example = "https://haseeb.com/haseeb%20meymon"


console.log(example.replace('%20meymon', '-memon')); //=> replacing the value with method.
console.log(example.includes('ali')); //=> Finds the value of between single quotes in the "example" with method.
console.log(gameName.split('_'));

const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words[3]);

// Master the string first master the methods of strings.