// regular expressions = used to match things and build patterns. Pattern matching
// literal = what is between two slashes / /

// // Both lines of code below return the same thing:
// let regexOne = /ab+c/; // if ...
// let regExTwo = new RegExp("ab+c");

let regexOne = /abc/; // look for sequence abc in a string
console.log(regexOne.test("hi do you know your abc s")); //true
console.log(regexOne.test("slab craft")); //false

let digiEx = /9/;
console.log(digiEx.test("hi do you 99")); // true

let digiExTwo = /[0-9]/; //range from 0 to 9 *NEEDS SQUARE BRACKETS*
console.log(digiExTwo.test("hi do you 9977")); // true

let digiExThree = /0123456789/; //range from 0 to 9
console.log(digiExTwo.test("hi do you 9977"));

let letterExOne = /[a-z]/; // range from a to z all in lowercase
console.log(letterExOne.test("ALL UPPERCASE")); // false, cause uppercase

// (/\d/) //searching for any digit in string
// (/\w/) //any white space
// (/\s/) //oposites
// \D //any digit (UPPERCASE D)
// \W //(UPPERCASE W)
// \S //non white space (UPPERCASE S)

//searching for any digit in string
console.log((/\d/).test("abcd")); // false

// "+" means 1 or more
console.log((/[0-9]+/).test("a1d")); // false
// "*" means 0 or more (to indicate you dont care how many times it happens in a string)
console.log((/[0-9]*/).test("a1d")); // true
// "?" means 0 or 1 time
console.log((/[0-9]?/).test("333")); // true

// "?" means its optional. In this case, the "u" is optional
console.log((/neighbo?r/).test("neighbou")); // true

// Looking for sequence of 2 to 3 numbers anywhere in the string
console.log((/\d{2,3}/).test("neighbou")); // false

let date_pattern = /\d{1,2}-\d{1,2}-\d{4}/;
console.log((date_pattern).test("23-12-2004")); // true\

// first + sign refers only to the previous letter "0", while second + sign refers to everything i the parenthesis
let boo = /boo+(hoo)+/;
    console.log(boo.test("boooooooooohoo")); // true
    console.log(boo.test("booooooooooboo")); //false
    console.log(boo.test("hooboo")); //false because of sequence

// "^" means it has to be at the start of the string, while "$" means it is at the end of the string
let booTwo = /^boo+(hoo)+$/; //"boo" has to be at the start of the string and "hoo" has to be at the end
console.log(booTwo.test("boohoohoo"));

let match = /(\d)+/.exec("123"); // exec will tell you what it finds
console.log(match);

let fruitCount = /\d+ (apple|pear|orange)s?$/; // string has to end with one of these fruit, with optional s at the end
console.log(fruitCount.test("10 oranges")); // true

console.log("todayIsWednesday".replace("y","*")); // replace all "y" by "*"
// console.log("todayIsWednesday".replace(/y/g, "*")); // ???
// replace a word caracter by another word caracter and change the order. $2 $1 is part of replace expression to change order
console.log("apple pear banana".replace(/(\w+) (\w+)/, "$2 $1")); // returns pear apple banana. 


// tokenise means we dont want punctuation
let rePun = /[.;, ]/;
// split takes a delimiter (we set it as a space here)
// let splitR1 = ("test has won the day;").split(" ");
let splitR1 = ("test has won the day;").split(rePun);
    console.log(splitR1); // Returns: [ 'test', 'has', 'won', 'the', 'day', '' ]

let reSen = /[.?!]/;
let splitR2 = ("test has won the day.test has won the day.test has won the day.").split(reSen);
    console.log(splitR2); // returns: ['test has won the day','test has won the day', 'test has won the day', '' ]


