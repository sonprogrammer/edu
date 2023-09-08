// var x = 1;

// function first(){
//     x = 2;
//     second()
//     function third(){
//         console.log(x)
//     }
// }

// function second(){
//     console.log(x)
// }


// first() //2
// second()//1
// // console.log(third()) //2

//**반복문과 비동기 함수 오류 */
// var i = 1
// for(var i = 0; i < 5; i++){
//     setTimeout(() => {
//         console.log(i)
//     }, i * 1000);
// }


//  let a = 'lia'
//     a = 'minsu'

// function hello(){
//     a = 'son'
//     function inner(){
//         a = 'bye'
//         return a
//     }
//     console.log(inner())
// }
// console.log(hello())

// *!스코프 좀 확실히 이해하자ㅠㅠ
let x = '전역 x'

function outer() { //**외부 함수 (outer scope) */
    var y = '지역 y'
    console.log(x)
    console.log(y)

    function inner() { //*내부 함수 스코프 (inner scope)
        var x = 'inner함수의 지역x'
        console.log(x)
        console.log(y)
    }
    inner()
}

outer()
console.log(x)
console.log(y)




// if(true){
//     let x = 20;
//     console.log('1', x)
//     console.log('2',x)
// }

// console.log('3', x)

// function test(){
//     var y = 50;
//     var z = 70
//     console.log('4',x)
//     console.log('5', y)
// }
// test()
// console.log('6', x)
// console.log('7', z)