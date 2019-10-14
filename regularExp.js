// Regular expression can be put in 2 ways
//  wrap it around froward slashes /\w{3}/
//other is create a instance of RegExp var a = new RegExp("/\w{3}/")

// Link for the whole regular expressions
// https://blog.bitsrc.io/a-beginners-guide-to-regular-expressions-regex-in-javascript-9c58feb27eb4

let re = /\w{3}/;

re.test("it returns true or false"); // true
re.test("do"); // false

"it will gives the index of the three letter word".search(re); // 3
"war".search(re); // 0
"do".search(re); // -1
"I do nothing".search(re); // 5

// exec returns the Array
re.exec("hi dome");
// [0: "dom"
// groups: undefined
// index: 3
// input: "hi dome"
// length: 1]

// Flags
// i for case insensitive
// g for global

var a = /abc/;
a.test("Abc"); // returns false without case insensitive flag

var a = new RegExp("abc", "i");
var a = /abc/i;

a.test("Abc"); // returns true
a.test("avdc"); // returns false

var regexGlobal = new RegExp("abc", "g");
console.log(regexGlobal.test("abc abc")); // returns true

// Characters groups
// character set[xyz]

var regex = /[bt]ear/;
console.log(regex.test("tear")); // returns true
console.log(regex.test("bear")); // return true
console.log(regex.test("fear")); // return false

// Adding the caret ^ symbol infront of character set reverses the above case
// Negated character

var regex = /[^bt]ear/;
console.log(regex.test("tear")); // returns false
console.log(regex.test("bear")); // return false
console.log(regex.test("fear")); // return true

//Ranges[a-z] [A-Z] [0-9] or some random range [d-i]
var regex = /[a-z]ear/;
// returns true forall words ending in ear unlike above 2 cases
console.log(regex.test("tear")); // returns true
console.log(regex.test("bear")); // return true
console.log(regex.test("fear")); // return true
