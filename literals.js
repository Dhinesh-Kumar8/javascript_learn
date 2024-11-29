console.log('hello,world');
console.log("hello,world");
console.log(`hello,world`);
let greet = "hello";
let place = "world3";
let grade = '1200A'
console.log(`${greet} + ${place} = ${grade}!`);

//ES5 String

let noMultiLine = "No multi-line string in E65";
console.log("did you know? " + noMultiLine);

let multi =`
    using ES5
    baackticks,
    multi-line
    string are
    possible!
`;

console.log(multi);

/*ES6 variable interpolation*/

let first = 'he said, "I am a string!"';
let second = `"would man make mistake", I am a string!`;
console.log(`${first} - and convert.${second}`);