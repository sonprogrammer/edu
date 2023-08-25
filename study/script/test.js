// console.log((callme()))
// var x = 10;

// console.log((callme()))
// // x = 1
// function callme(){
//     return x;
// }

// console.log((callme()))


// function varFor(){
//     var i =0;
//     for(i = 0; i < 5; ++i){
//         setTimeout(()=>{
//             console.log(i)
//         },1000)
//     }
// }
// function letFor(){
//     let i =0;
//     for( i = 0; i < 3; i++){
//         setTimeout(()=>{
//             console.log("i:", i)
//         },1000)
//     }
// }

// varFor()
// letFor()


var f4 = () => console.log('function4')//이러면 정상적으로 출력
f2()
// var f4 = () => console.log('function4')//이러면 undefined를 출력


// function f4(){
//     console.log('fucntion4')
// }

function f2(){
    console.log('function2')
    f4()
}