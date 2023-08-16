// 문자열 뒤집기

// function reverse(str){
//     let reverseStr = "";
//     for(let i = str.length - 1; i >= 0; i--){
//         reverseStr += str.charAt(i)
//     }
//     return reverseStr
// }


// document.write(reverse("Nice to meet you"));




// 구구단 
// for(let i = 2; i < 10; i++) {
//     for(let j = 1; j < 10; j++){
//         document.write(i +" x "+j +" = " + (i*j) + "<br>");
//     }

// }


// 문자열 길이

// function addStringLength(a, b) {
//     let lengthA = a.length;
//     let lengthB = b.length;

//     return lengthA + lengthB


  
// };



// 공백제거하기
// function removeBlank(a){
//     let result = ""
//     for(let i = 0; i < a.length; i++){
//         if(a[i] !== " "){
//             result += a[i]
//         }
//     }
//     return result
// }


// 알파벳 순대로 나열하기
// function sortStringArray(a){
//     return a.sort()
// }

// // 알파벳 반대로 나열하기
// function sortStringArray(a){
//     return a.sort().reverse()
// }


// 소수합 구하기
// function sol(){
//     let answer = []
//     let sum =0
//     for(let i = 2; i <= 200; i++){
//         let isPrime = true
//         for(let j = 2; j < i; j++){
//             if(i % j == 0){
//                 isPrime = false
//                 break;
//             }
//         }
//         if(isPrime){
//             answer.push(i)
//             sum += i
//         }
//     }
//     return sum
// }

// document.write(sol())




// 짝수 찾아내기
// function EvenNumber(arr){
//     let result = [] 
//     for(let i = 0; i <= arr.length; i++){
//     if(arr[i] % 2 === 0){

//         result.push(arr[i])
//     }
// }
//     return result
// }



//각 자리수 반환 함수 만들기
// function getDigits(num) {
//     let result = [];
//     const strNum = String(num);  // 숫자를 문자열로 변환
//     for (let i = 0; i < strNum.length; i++) {
//         result.push(Number(strNum[i]));  // 각 자릿수를 숫자로 변환하여 배열에 추가
//     }
//     return result;
// }



// 자리수 배열을 숫자로 되돌리는 함수
// function makeNumberFromDigits(arr){
//     return Number(arr.join('')) //join메소드를 사용해 배열 요소를 결합하고 Number를 이용해 문자열을 숫자로 변환함
// }



//성인만 출력하기
function getOnlyAdults(array){
    let result = []
    for(let i = 0; i < array.length; i++){
    if(array[i].age>= 20){
            result.push(array[i].name)
    }
    }
    return result
}