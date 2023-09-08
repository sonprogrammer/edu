// function outerFunc() {
//     var x = 10;
//     var innerFunc = function () {   //여기서 innerFunc가 클로져이다  
//         console.log(x);
//     };
//     return innerFunc;
// }

// /**
//  *  함수 outerFunc를 호출하면 내부 함수 innerFunc가 반환된다.
//  *  그리고 함수 outerFunc의 실행 컨텍스트는 소멸한다.
//  */
// var inner = outerFunc();
// inner(); // 10



//**함수형 프로그래밍에서 클로저 활용 */
// function makeCounter(predicate) {
 
//     var counter = 0; // 카운트 상태를 유지하기 위한 자유 변수
    
//     // 클로저를 반환
//     return function () {
//       counter = predicate(counter);
//       return counter;
//     };
//   }
  
//   // 보조 함수
//   function increase(n) {
//     return ++n;
//   }
  
//   // 보조 함수
//   function decrease(n) {
//     return --n;
//   }
  
  
//   const increaser = makeCounter(increase);
//   /*
//   = function () {
//       counter = function increase(counter) {
//         return ++counter;
//       }
//       return counter;
//     };
//   */
  
//   console.log(increaser()); // 1
//   console.log(increaser()); // 2
  
//   // increaser 함수와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않는다.
//   const decreaser = makeCounter(decrease);
//   console.log(decreaser()); // -1
//   console.log(decreaser()); // -2


//**정보의 은닉 클로져 */
// function Counter(){
//     var counter = 0;

//     this.increase = function(){//*!클로져
//         return ++counter
//     }
//     this.decrease = function(){ //*!클로져
//         return --counter
//     }
//     this.getCounter = function(){
//         return counter
//     }
// }

// const counter = new Counter() //*!counter객체는 increase, decrease함수 두개만 갖는다

// console.log(counter.increase()) // 1출력 ++이니깐 counter는 0으로 초기화되어있고 0에서 1추가로 1임
// console.log(counter.getCounter()) // 1출력
// console.log(counter.decrease()) //0출력 => --니깐 1에서 0으로 바뀜
// console.log(counter.decrease()) //-1 출력 => --니깐 0에서 -1로 됨


//**자주 발생하는 클로저 실수 */
// var arr = []
// for(var i = 0; i < 5; i++){
//     arr[i] = function(){return i;}
// }
// for(var j = 0; j < arr.length; j++){
//     console.log(arr[j]())
// }
var i = 110;
for(var i = 0; i <= 5; i++){
}
console.log(i) //5출력