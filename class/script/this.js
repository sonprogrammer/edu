// const circle = {
//     radius: 5,
//     getDiameter() {
//         console.log(this);
//     },
// };

// // circle.getDiameter(); //어떤 것이 출력될까요?


// var c1 = circle.getDiameter;
// c1(); 
// // c1()은 circle.getDiameter()이 아니라 console.log(this)이다. 여기서 this는 상위 객체를 
// // 가리키는데 가리키는 객체가 없으면 window객체를 가리키게 된다 console.log(this)에서 this는 객체가 없
// // 으므로 window객체를 가리킨다
// //  window객체이기때문에 전역객체를 가리킨다

// console.log(c1)// 이것은 return값이 없기 때문에 undefined라고 뜸



// 재귀
function fibo(n){
    if(n < 1){
        return n;
    }
    return fibo(n-1) + fibo(n - 2)
}

console.log(fibo(10))

