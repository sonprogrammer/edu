// function sayHello(name, callback){
//     const words = 'hello my name is ' + name 
//     callback(words) //매개변수의 함수(콜백 함수 )호출
// }

// sayHello('son', (name)=>{console.log(name)})


// function sayHello(name, callback){
//     const words = 'hello my name is ' + name
//     callback(words)
// }

// sayHello('youngjin', function(name){ //함수이름이 없는 익명 함수
//     console.log(name)
// })

let add = 10; // 변수 add

function sum(x, y, callback) {
  callback(x + y); // 콜백함수 호출
}

// 이름 있는 콜백함수 작성
sum(1, 2, function add(result) {
  console.log(result); // 3
});

// 변수 add가 함수 add가 되어버린다.
console.log(add); // function add(result) {...}