// Number .toString //

const number = 4;
console.log("Before", number);

const num1 = String(15);
console.log(num1)
console.log(typeof num1);

// Number .toExponential //

let x = Math.pow(20, 10);
console.log(x);
console.log(x.toExponential (11));

// Number .toFixed //

const Number = 159.12357
console.log(Number);
console.log(Number.toFixed (2));


// String.includes //

let string = "hello world";
let substring = "hello";
console.log(string.includes(substring));


// String.slice //
const str = 'I love to play hockey.'
console.log(str.slice(0,9));
console.log(str.slice(10));

// .String.replace //
const p = 'I like to play hockey'
console.log(p.replace('hockey','soccer'));


// Extras (Longest Word) //

function longestWord(str) {
  let words = str.split(" ")
  let longestWord = "";

  for (let word of words) {
 if (word.length > longestWord.length) {
longestWord = word;
  }

}
return longestWord;
}

console.log(longestWord("i played a hockey game today"));
console.log(longestWord("I scored a hat-trick in the game"));
