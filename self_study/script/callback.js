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

// let add = 10; // 변수 add

// function sum(x, y, callback) {
//   callback(x + y); // 콜백함수 호출
// }

// // 이름 있는 콜백함수 작성
// sum(1, 2, function add(result) {
//   console.log(result); // 3
// });

// // 변수 add가 함수 add가 되어버린다.
// console.log(add); // function add(result) {...}


//화살표 함수
// function sayHello(callback){
//     let name = 'youngjin'
//     callback(name)
// }

// sayHello((name) =>{
//     console.log('hello ' + name)
// })
//위와 같음
// function sayHello(name, callback1) {
//     const words = 'hello ' + name;
//     callback1(words);
// }
// sayHello("인파", function (name) { // 함수의 이름이 없는 익명 함수
// 	console.log(name); 
// });

//콜백함수를 별도의 함수로 정의
// function introduce (lastName, firstName, callback){
//     let fullName = lastName + firstName
//     callback(fullName)
// }

// function say_hello(name){
//     console.log('hi my name is ' + name)
// }
// function say_bye(name){
//     console.log('bye it was ' + name)
// }

// introduce('youngjin', 'son', say_hello)
// introduce('youngjin', 'park', say_bye)


//이벤트리스너의 콜백함수사용
// let button = document.getElementById('button')

// button.addEventListener('click', function(){
//     console.log('button clicked!!')
// })



//고차함수에서 콜백 사용
// 예시 : 배열의 각 요소를 두 배로 곱해서 새로운 배열을 생성하는 콜백 함수 
// let numbers = [1, 2, 3, 4, 5]; // 배열 선언 
// let doubled = []; // 빈 배열 선언 

// // numbers 배열의 각 요소에 대해 콜백 함수 실행 
// numbers.forEach(function (num) { 
//     doubled.push(num * 2); // 콜백 함수로 각 요소를 두 배로 곱해서 doubled 배열에 추가 
// }); 

// console.log(doubled); // [2, 4, 6, 8, 10]


//this를 사용한 콜백함수
// let userData = {
//     signUp: '2021-4-06 12:00:00',
//     name: 'Not Set',
//     setName: function(firstName, lastName) {
//         this.name = firstName + ' ' + lastName;
//     }
// }

// function getUserName(firstName, lastName, callback) {
//     callback(firstName, lastName);
// }

// getUserName('홍', '길동', userData.setName);

// console.log('1: ', userData.name); // Not Set
// console.log('2: ', window.name); // 홍 길동

// let userData = {
//     signUp: '2021-4-06 12:00:00',
//     name: 'Not Set',
//     setName: function(firstName, lastName) {
//         this.name = firstName + ' ' + lastName;
//     }
// }

// userData.setName('홍', '길동'); //userData.name을 홍길동으로 저장해놈 
// //만약 이게 콘솔 밑에줄에 들어가게 되면 userData.name은 Not Set이라 찍힌다  

// console.log(userData.name); // 홍 길동




//call, apply사용해보기
//call사용
// let userData = {
//     signUp: '2021-4-06 12:00:00',
//     name: 'Not Set',
//     setName: function(firstName, lastName) {
//         this.name = firstName + ' ' + lastName;
//     }
// }

// function getUserName(firstName, lastName, callback, data){
//     //userData를 받는 매개 변수 data를 추가
//     callback.call(data, firstName, lastName)
// }

// getUserName('son', 'youngjin',userData.setName, userData)
// //userData를 인수로 전달

// console.log(userData.name)//son youngjin출력

//apply사용
// let userData = {
//     signUp: '2021-4-06 12:00:00',
//     name: 'Not Set',
//     setName: function(firstName, lastName) {
//         this.name = firstName + ' ' + lastName;
//     }
// }
// function getUserName(firstName, lastName, callback, data){
//     callback.apply(data, [firstName, lastName])
// }
// getUserName('sodfdfdn', 'youngjin', userData.setName, userData)
// //이 입력은 선언이라 생각하면된다. 만약 콘솔 밑에 가게되면 콘솔엔 Not Set이 출력된다

// console.log(userData.name)