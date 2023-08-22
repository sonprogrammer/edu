//배달 주문이 들어왔어요 => 결제 => 결제 완료 => 배달 오더가 들어가고 => 배달or취소

console.log('주문이 들어왔어요')    //의도는 첫번째 출력

// function orderCallback(){
//     console.log('결제 진행중')  //의도는 두번째 출력
//     setTimeout(()=>{
//         console.log('결제완료') //의도는 세번째 출력
//     }, 3000)
// }

function orderCallback(print, timeout){
    setTimeout(print, timeout);
}

console.log('결제진행중')
orderCallback(()=> console.log('결제완료'), 2000);
console.log('배달시작')




// orderCallback();
// console.log('배달 시작')    //의도는 네번째 출력

// 첫번째 함수 주석처리한 것의 실제출력은 주문이 들어왔어요, 결제 진행중, 배달 시작, 결제완료 순으로 출력됨
// 이런걸 자바스크립트의 비동기성이라함 (asynchronous)

