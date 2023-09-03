//lastIndexOf사용
// const str = 'Hello World';

// console.log(str.length)
// console.log(str.lastIndexOf('World')); // 6
// console.log(str.lastIndexOf('l'));     // 9 index9임
// console.log(str.lastIndexOf('o', 5));  // 4
// console.log(str.lastIndexOf('o', 8));  // 7
// console.log(str.lastIndexOf('l', 10)); // 9

// console.log(str.lastIndexOf('H', 0));  // 0
// console.log(str.lastIndexOf('W', 5));  // -1
// console.log(str.lastIndexOf('x', 8));  // -1


//replace사용
// const str = 'Hello world'

// console.log(str.replace('wo', 'so')) 


// // split사용
// const str = 'hello i am youngjin son'

// console.log(str.split(' ')) // 띄어쓰기를 기준으로 배열을 만듦 [ 'hello', 'i', 'am', 'youngjin', 'son' ]
// console.log(str.split(' ', 3)) // 여러개의 배열이 있어도 3이라는  제한을 걸어두어 앞에 있는 3개만 배열로 하여 반환함
// // [ 'hello', 'i', 'am' ]



// //trim사용
// const str = '   son    '
// console.log(str.trim())




//include
const str = 'hello world';

console.log(str.includes('hello')); // true
str.includes('hello', 0); // true
str.includes('hello', 2); // false

// String​.prototype​.indexOf 메소드로 대체할 수 있다.
str.indexOf('hello'); // 0









