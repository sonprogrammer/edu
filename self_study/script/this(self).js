// var value = 1;

// var obj = {
//   value: 100,
//   foo: function() {
//     console.log("foo's this: ",  this);  // obj
//     console.log("foo's this.value: ",  this.value); // 100
//     function bar() { /* 내부함수 */
//       console.log("bar's this: ",  this); // window
//       console.log("bar's this.value: ", this.value); // undefined
//     }
//     bar();
//   }
// };

// obj.foo();

// let value = 1;

// let obj = {
//   value: 100,
//   foo: function() {
//     setTimeout(function() {  /* 콜백함수 */
//       console.log("callback's this: ",  this);  // window
//       console.log("callback's this.value: ",  this.value); // undefined
//     }, 100);
//   }
// };

// obj.foo();


// let value = 1;

// let obj = {
//     value: 100,
//     foo: function (){
//         let that = this;    //this === obj

//         console.log("foo's this: ", this) //obj
//         console.log("foo's this: value", this.value) //100

//         function bar(){
//             console.log("bar's this: ", this) //obj
//             console.log("bar's this: value", this.value) //100
//         }
//         bar()
//     }
// }
// obj.foo()


// 생성자 함수
// function Person(name) {
//     this.name = name;
//   }
  
//   var me = new Person();
//   me.name = 'lee'
//   console.log(me); // Person&nbsp;{name: "Lee"}
//   me.name = 'kim'
//   console.log(me); // Person&nbsp;{name: "kim"}
  
//   // new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수로 동작하지 않는다.
//   var you = Person('Kim');
//   console.log(you); // undefined


// let userData = {
//     signUp: '2020-10-06 15:00:00',
//     id: 'minidoo',
//     name: 'Not Set',
//     setName: function(firstName, lastName) {
//         this.name = firstName + ' ' + lastName;
//     }
// }

// function getUserName(firstName, lastName, callback) {
//     userData.setName( firstName, lastName);
// }

// getUserName('PARK', 'MINIDDO', userData.setName);
// //getusername함수를 호출하면서 park를 firstname에 minidoo를 lastname에 전달한다 
// //이를 통해 userdata.setname함수 내에서 this.name이 parkminiddo로 설정된다  

// console.log('1: ', userData.name); 
// console.log('2: ', window.name); // 빈칸. 왜냐하면 변수가 없으니까



// var name = "window name";

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.doSomething = function(callback) {
//   if(typeof callback == 'function') {
//     // --------- 1
//     callback()
//     // callback.bind(this)(); //이렇게 하면 this가 Person을 가리킴 
//   }
// };

// function foo() {
//   console.log(this.name); // --------- 2
// }

// var p = new Person('Lee');
// p.doSomething(foo);  // window name
