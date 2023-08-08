// remind 3,6,9game
// function sol(input){
//     let result = []
//     for(let i = 1; i <= input; i++){
//         if ((i % 10) % 3 == 0 && i % 10 != 0 && Math.floor(i / 10) % 3 == 0 && Math.floor(i / 10) != 0) {
//             result.push("짝짝");
//         }
//         else if((i % 10) %3 == 0 && i % 10 != 0){
//             result.push("짝")
//         }else if((Math.floor(i/10) % 3 == 0 && Math.floor(i/10) != 0)){
//             result.push("짝")
//         }
//  // 짝짝이 나오려면 일의 숫자랑 십의자리 숫자가 3, 6, 9가 있어야함 

//         else{
//             result.push(i)
//         }
//     }
//     return result
    
// }

// console.log(sol(77))

// remind 약수 찾기
// function sol(input){
//     let result = []
//     for(let i =1; i <=input; i++){
//         if(input % i == 0){
//             result.push(i)
//         }
//     }
//     return result
// }

// 숫자 출력
// function sol(input){
//     let answer = []
//     for(let i = 1; i<=input; i++){
//         answer.push(i)
//     }
//     return answer;
// }

// 노동요 엘리스
// function sol(s){
//     let answer = []
//     for(let i = 0; i < s.length; i++){
//         if(s[i] === ''){
//             answer += '링디기디기\n'
//         }else if(s[i] === '.'){
//             answer += '딩딩딩\n'
//         }else{
//             answer += '링딩동 '
//         }
//     }
//     return answer
// }

// 음식 가격 계산하기
// function sol(){
//     let korean = 6300
//     let chiness = 6000
//     let p = 8500
//     return korean * 55 + chiness * 43 + p * 52;
// }

// 변수 비교하기
// function sol(){
//     let a = 10
//     let b = 10
    
//     let case1 = (a ==b)
//     let case2 = (a === b)
//     b = "10"
//     let case3 = (a == b)
//     let case4 = (a ===b)

//     return {case1, case2, case3, case4}
// }


// 변수 다루기
// function sol(){

//     let num = 123
//     num +=204
//     let str = 'he '
//     str += 'elice!'
//     return {num, str}
// }

// 소수의 합 구하기
function sol(input){
    let answer = []
    let sum = 0;    //sum변수를 선언하고 초기화함 , 소수들의 합이 저장되는 변수
    for(let i = 2; i <= input; i++){    
        let isPrime = true  //i가 소수이면 true
        for(let j = 2; j < i; j++){ //2부터 나누기 연산을 수행
            if(i % j == 0){     //i를 J로 나누어 나머지를 검사하여 나머지가 0이면 i는 소수가 아님 그러면 false로 설정후 반복문 종료
                isPrime = false //위조건이 충족하면 소수 아님
                break   //충족하면 반복문 종료, 뒤로 가도 이미 여기서 나눠졌기 때문에 2개이상의 약수가 존재한다판단되기 때문 
            }
        }
        if(isPrime){    //isPrime이 트루이면 
            answer.push(i)
            sum += i    //sum변수에 i를 더한다
        }
    }
    return answer
    // return sum
}
console.log(sol(21));
// function sol() {
//     var sum = 0;
  
//     for (var i = 1; i <= 200; i++) {
//       for (var j = 2; j <= i; j++) {
//         if (i % j == 0) {
//           break;
//         }
//       }
//       if (j == i) {
//         sum += j;
//       }
//     }
  
//     return sum; 
//   }
console.log(sol(21))

