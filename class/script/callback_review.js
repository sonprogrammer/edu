// A(b())
// //콜백은 a라는 함수가 끝날때쯤 b라는 함수를 실행한다 


// const words = ['a', 'abc', 'abcdefg']

// const result = words.filter((word)=>word.length > 6) //(word)=>word.length > 6이 콜백임

// function callback(element){
//     return element.length > 6
// }
// console.log(result)


console.log('주문이 들어왔어요')

function orderCallBack(){
    console.log('결제 진행중')
    //아래와 같은걸 콜백 지옥이라함 callback hell
    setTimeout(()=>{
        console.log('결제완료') //4초뒤에 결제완료뜨고
        setTimeout(()=>{
            console.log('배달 시작') //결제완료 뜨고 4초뒤에 배달시작 뜸
            setTimeout(() => {
                console.log('배달 완료') // 배달시작 뜨고 3초뒤에 배달 완료 뜸 
                
            }, 3000)

        }, 4000)
    }, 4000); 
}

