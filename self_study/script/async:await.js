// //프로미스 -> async/await로 바꾸기
// // 프로미스 객체 반환 함수
// function delay(ms) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         console.log(`${ms} 밀리초가 지났습니다.`);
//         resolve()
//       }, ms);
//     });
//   }
//   // 기존 Promise.then() 형식
// // function main() {
// //     delay(1000)
// //         .then(() => {
// //           return delay(2000);
// //         })
// //         .then(() => {
// //           return Promise.resolve('끝');
// //         })
// //         .then(result => {
// //           console.log(result);
// //         });
// //   }
  
// //   // 메인 함수 호출
// //   main();

//async/await 방식
// async function main(){
//     console.time()
//     await delay(1000)
//     await delay(2000)
//     const result = await Promise.resolve('끝')
//     console.log(result)

//     console.timeEnd()

// }
// main()

// async function func1(){
//     return 1;
// }
// const data = func1()
// console.log(data) //Promise{1}출력 



// function getApple(){
//     return new Promise( (resolve, reject) => {
//       setTimeout(() => resolve("apple"), 1000);
//     })
//   }
  
//   function getBanana(){
//     return new Promise( (resolve, reject) => {
//       setTimeout(() => resolve("banana"), 1000);
//     })
//   }

//   async function getFruites(){

//     let getApplePromise = getApple(); // async함수를 미리 논블록킹으로 실행한다. 
//     let getBananaPromise = getBanana(); // async함수를 미리 논블록킹으로 실행한다. 
    
//     // 이렇게 하면 각각 백단에서 독립적으로 거의 동시에 실행되게 된다.
//     console.log(getApplePromise)
//     console.log(getBananaPromise)
    
//     let a = await getApplePromise; // 위에서 받은 프로미스객체 결과 변수를 await을 통해 꺼낸다.
//     let b = await getBananaPromise; // 위에서 받은 프로미스객체 결과 변수를 await을 통해 꺼낸다.
    
//     console.log(`${a} and ${b}`); // 본래라면 1초+1초 를 기다려야 하는데, 위에서 1초기다리는 함수를 바로 연속으로 비동기로 불려왔기 때문에, 대충 1.01초만 기다리면 처리된다.
//   }


// async써보기
// async function fetchUser(){
//     // do network request in 10 secs.....
//     // return new Promise((res, rej)=>{
//         //  res('son')
//         return 'son'
//     // })
// }
// const user = fetchUser()
// user.then(console.log)
// console.log(user)


// await 
function delay(ms){
    return new Promise (res => setTimeout(res, ms))
}
async function getApple(){
    await delay(2000)

    return 'apple'
}
async function getBanana(){
    await delay(2000)
    return 'banana'
}
// 위 바나나랑 같은 의미
// function getBanana(){
//     return delay(3000)
//         .then(() => 'banana')
// }

//아래는 promise사용
// function pickFruits(){
//     return getApple()
//         .then(apple =>{
//             return getBanana()
//                 .then(banana => `${apple} + ${banana}`)
//         })
// }

// async사용 위 promise랑 같은 뜻
async function pickFruits(){ 
    const apple = await getApple()
    const banana = await getBanana()
    return `${apple} + ${banana}`
}
pickFruits().then(console.log) // 6초뒤에 출력 

// useful promise apis
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '))
}
pickAllFruits().then(console.log)
//원래는 1초있다가 apple이 끝나고 그리고 1초후(총2초후)에 banana가 끝나서 그때 둘다 출력됨
//위처럼 해주면 1초후에 출력됨


function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);

}
pickOnlyOne().then(console.log)
