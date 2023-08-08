// // n줄 입력받기
// function sol(input){
//     let answer = []
//     answer = input.split('\n')

//     return answer
// }


// 문자열 자르기
// function sol(input){
//     let answer = []
//     a = input.split(' ')
//     answer.push(typeof a)
//     answer.push(a[0])

//     return answer

// }
// console.log(sol('1'))


// 용돈 압수
// function sol(input){
//     let answer = []
//     let a = input.split('bd')
//     return a 
// }


//함수 만들고 호출하기 
// function sol(x, y){
//     return (x + y);
// }

// console.log(sol(1, 2))


// 조건에 맞는 암호
// (a <= b && a == d && b> c && c < 6) || (a == b && a == c && a == d)
// function sol(input){
//     let answer;

//     let num = input.split(' ')
//     let a = num[0]
//     let b = num[1]
//     let c = num[2]
//     let d = num[3]
//     answer = (a <= b && a == d && b> c && c < 6) || (a == b && a == c && a == d)

//     return answer
// }

// console.log(sol('2 2 2 9'))


// 약수 찾기
// function sol(input){
//     let answer = []
//     for(let i = 1; i<=input; i++){
//         if(input % i === 0){
//             answer.push(i)
//         }
//     }
//     return answer
// }

// console.log(sol(489))


// 3, 6, 9게임

// function sol(input){
//     let answer = []
//     for(let i = 1; i <= input; i++){
//         if((i % 10) % 3 ==0 && i % 10 != 0){
//             answer.push("짝")
//         }else if(Math.floor(i / 10) % 3 == 0 && Math.floor(i /10) != 0){
//             answer.push("짝")
//         }else{
//             answer.push(i)
//         }
//     }
//     return answer
// }

// console.log(sol(33))


// 숫자 출력
// function sol(input){
//     let answer = []
//     for(let i = 1; i <= input; i++){
//         answer.push(i)
//     }
//     return answer
// }

// console.log(sol(10))

// 노동용
// function sol(input){
//     let answer = []
//     for(let i = 0; i < input.length; i++){
//         if(input[i] === ' '){
//             answer += '링디기디기\n'
//         }else if(input[i] === '.'){
//             answer += '딩딩딩\n'
//         }
//     }
//     return answer
// }
// console.log(sol('나는 손 영진 이다.'))



// 변수다루기
// function sol(num, string){
//     num += 204
//     string +='elice!'
//     return {num, string}
// }
// console.log(sol('num:, string: '))


// 소수 합구하기
// function sol(input){
//     let answer 
//     let sum = 0;
//     for(let i = 2; i <= input; i++){
//         let isPrime = true
//         for(let j = 2; j < i; j++){
//             if(i % j == 0){
//                 isPrime = false
//                 break
//             }
//         }
//         if(isPrime){
//             sum += i
//         }
//     }
//     return sum
// }
// console.log(sol())

// function sol(input){
//     let answer 
//     if(input % 2 == 0){
//         answer = "\'even\'"
//     }else{
//         answer = '\"odd\"'
//     }
//     return input + ':' + answer

// }
// console.log(sol(11))


// 삼각형 각도 구하기
// function sol(input){

//     let angle = 0;
//     let totalAngle = 180
//     let a = input.split(' ')
//     let b = Number(a[0])
//     let c = Number(a[1])
//     angle = 180 - (b + c)
// if(b+c >=180){
//     return 0
// }

//     return angle
    
// }
// console.log(sol('10 140'))

// 배수 판별기 
// function solution(num) {
//     let answer = [];
//     if(num % 2 == 0){
//         answer += "2의 배수입니다.\n"
//     } if(num % 3 == 0){
//         answer += "3의 배수입니다.\n"
//     } if(num % 5 == 0){
//         answer += "5의 배수입니다.\n"
//       //   answer.join('\n')
//     } if(num % 7 == 0){
//         answer += "7의 배수입니다.\n"
//     }
//    return answer
//   }

// function solution(num) {
//     let answer = [];
//     if (num % 2 == 0) {
//         answer.push("2의 배수입니다.");
//     }
//     if (num % 3 == 0) {
//         answer.push("3의 배수입니다.");
//     }
//     if (num % 5 == 0) {
//         answer.push("5의 배수입니다.");
//     }
//     if (num % 7 == 0) {
//         answer.push("7의 배수입니다.");
//     }
//     if (answer.length >= 2) {

//         return answer.join("\n");
//     } else {
//         return answer;
//     }
// }

// console.log(solution(10));


// 가운데 숫자
// function sol(input){
//     let answer = ""
//     let num = input.slice(" ")

//     let middleIndex = Math.floor(num.length /2)
//     answer = Number(num[middleIndex])
//     return answer
// }

// console.log(sol())


//3,6,9다음 숫자 말하기
// function sol(input){
//     let answer =""
//     if((input+1) % 3 === 0){
//             answer += "짝"
            
//         }else{
//             answer += (input+1)
            
//         }
    
//     return answer
// }
// console.log(sol(4))


// 도도새
// function sol(input){
//     let count = 0;
//     for(let i = 0; i <= input.length; i++){
//         if(input[i] === "웩"){
//             count++
//         }
//     }
//     return count
// }
// console.log(sol())


// 제곱근과 합의 제곱 차구하기
// function sol(input){
//     let answer //합의 제곱
//     let count = 0 //input까지 합
//     let answer2 //제곱근
//     let count1 = 0
//     for(let i = 1; i <=input; i++){
//         count += i
//     }
//     for(let j = 1; j <= input; j++){
//         count1 += j*j
//     }
//     answer = count * count
//     answer2 = count1

//     return answer - answer2
// }

// console.log(sol(10))


// 마천루
// function sol(input){
//     let result = ''
//     for(let i = 1; i<=input; i++){
//         for(let j = 0; j < (i <= 5 ? i : 5); j++){
//             result += "*"
//         }
//         if(input != i){
//         result += "\n"
//         }
//     }
//     return result
// }
// console.log(sol(15))



// 음식이름받고 계산하기
// function sol(input){
//     let menuPrice = {"아메": 4100, "카페": 4600, "카라":5100}

//     let totalPrice = 0;
//     for(let i = 0; i <= input.length; i++){
//         let order = input[i]
//         if(menuPrice[order] !== undefined){
//             totalPrice +=menuPrice[order]
//         }
//     }
//     return totalPrice

// }

// console.log(sol())

// 반쪽 짜리 피라미드
// function sol(input){
//     let result =''
//     for(let i = 1; i <= input; i++){
//         for(let j = input; j > i; j--){
//             result += " "
//         }
//         for(let j = 1; j <= i; j++){
//             result += "*"
//         }
//         result += "\n"
//     }
//     return result
// }

// console.log(sol(3))



// 잘린 피라미드
// function sol(a, b){
//     let result = ''
//     for(let i = a; i <= b; i++){
//         result += "*".repeat(i)
        
//         if(i !== b){
//             result += "\n"
//         }
//     }
//     return result
// }

// console.log(sol(3, 7))

// 8갯수 찾기
// function sol(input){
//     let count = 0;
//     for(let i = 1; i<=input; i++){
//         let strNumber = i.toString()
//         count += (strNumber.split('8').length -1)
//     }
//     return count
// }

// console.log(sol(20))


// 끼리끼리
// function sol(input){
//     let red_pocket =[]
//     let blue_pocket = []

//     let num = input.split(' ').map(Number)

//     for(let num1 of num){
//         if(num1 >=0){
//             red_pocket.push(num1)
//         }else{
//             blue_pocket.push(num1)
//         }
//     }
//     return [red_pocket, blue_pocket]
// }

// console.log(sol('-1 2 1 -2 7 3 -1 0'))


// in the middle
// function sol(input){
//     let answer
//     let num = input.split(' ')
//     let middle = Math.floor(num.length /2)

//     answer = Number(num[middle])
//     return answer
// }

// console.log(sol('4 5 9'))

//angle
// function sol(input){
//     let answer
//     let angle = input.split(' ')

//     let a = Number(angle[0])
//     let b = Number(angle[1])

//     answer = 180 - (a+b)
//     return answer
// }

// console.log(sol('30 20'))


// 제곱근 합 제곱 차구하기

// function sol(input){
//     let answer = 0;
//     let count = 0;
//     let count1 = 0
//     for(let i =1; i <= input; i++){
//         count += i
//     }
//     for(let j = 1; j <=input; j++){
//         count1 += j*j
//     }

//     answer = count * count
//     return answer - count1
// }
// console.log(sol('10'))



//이름받고 계산
// function sol(input){
//     let menuPrice = {"a": 4100, "b": 5000, "c":6000}

//     let totalPrice = 0;
//     for(let i =0; i < input.length; i++){
//         let order = input[i]
//         if(menuPrice[order] !== undefined){
//             totalPrice += menuPrice[order]
//         }

//     }
//     return totalPrice
// }
// console.log(sol())



// 별만들기
// function sol(input){
//     let result = []
//     for(let i = 1; i <= input; i++){
//         for(let j = 0; j < (i <=5 ? i : 5); j++){
//             result += "*"
//         }
//         if(i !== input){
//             result += "\n"
//         }
//     }
//     return result
// }
// console.log(sol(7))

//반쪽짜리 피라미드
// function sol(input){
//     let answer = []
//     for(let i = 1; i <= input; i++){
//         for(let j = input; j > i; j--){
//             answer +=" "
//         }
//         for(let j = 0; j < i; j++){
//             answer += "*"
//         }
//         if(i !== input){
//             answer += "\n"
//         }
//     }
//     return answer
// }
// console.log(sol(5))

// 잘린피라미드
// function sol(a, b){
//     let answer = ""
//     for(let i = a; i <= b; i++){
//         let row = "*".repeat(i)
//         answer += row
//         if(i !== b){
//             answer +="\n"
//         }
        
//     }
//     return answer
// }
// console.log(sol(3 ,7))


// 8은 내꺼
// function sol(input){
//     let count = 0;
//     for(let i = 1; i<=input; i++){
//         let strNumber = i.toString()
//         count += (strNumber.split('8').length -1)
//     }
//     return count
// }
// console.log(sol(93))

//끼리끼리
// function sol(input){
//     let a = []
//     let b = []
//     let num = input.split(' ')

//     for(let num1 of num){
//         if(num1 >=0){
//             a.push(num1)
//         }else{
//             b.push(num1)
//         }
//     }
//     return [a, b]
// }
// console.log(sol('-1 2 1 -2 7 3 -1 0'))

// function sol(input){
//     let menuPrice = {"a": 4100, "b": 5000, "c": 6000}

//     let totalPrice = 0;
//     for(let i = 0; i <=input.length; i++){
//         let order = input[i]
//         if(menuPrice[order] !==undefined){
//             totalPrice += menuPrice[order]
//         }
//     }
//     return totalPrice
// }

// console.log(sol("a"))


// function sol(input){
//     let answer = ''
//     for(let i = 1; i <= input; i++){
//         for(let j = input; j > i; j--){
//             answer += " "
//         }
//         for(let j = 0; j <i; j++){
//             answer += "*"
//         }
//         if(i !== input){
//             answer += "\n"
//         }
//     }
//     return answer
// }
// console.log(sol(3))


// function sol(a, b){
//     let answer = ''
//     for(let i =a; i <= b; i++){
//         let row = "*".repeat(i)
//         answer += row
//     if(i !== b){
//         answer += "\n"
//     }
// }
//     return answer
// }
// console.log(sol(4, 8))

// function sol(input){
//     let count = 0;
//     for(let i = 1; i <= input; i++){
//         let strNumber = i.toString()
//         count += (strNumber.split('8').length - 1)
//     }
//     return count
// }
// console.log(sol(92))


// function solution(price, bargain) {
//     let totalPrice = price;
  
//     for (let i = 0; i <= bargain.length; i++) {
//       totalPrice += bargain[i];
//     }
  
//     if (totalPrice < price / 2 || totalPrice >= price) {
//       return "흥정 실패";
//     } else {
//       return totalPrice;
//     }
//   }
  
//   console.log(solution(10000, [-1000, -2000, 1000, -500]));



// function calculate(input) {
//     let values = input.split(" "); // 입력 문자열을 공백으로 분리하여 배열로 변환
//     let result = 0; // 초기 결과값은 0으로 설정
//     let result1 = 0;
  
//     for (let i = 0; i < values.length; i++) {
//       let current = values[i]; // 현재 배열 요소
//       let operator = values[i + 1]; // 다음 배열 요소 (연산자)
  
//       if (!isNaN(current)) {
//         // 현재 요소가 숫자인지 확인
//         current = parseInt(current); // 숫자로 변환
//       } else {
//         continue; // 숫자가 아니면 다음 요소로 건너뜀
//       }
  
//       if (operator === "*/") {
//         // 연산자가 '*/'인 경우
//         let nextValue = parseInt(values[i + 2]); // 다음 다음 요소를 숫자로 변환
//         if (operator === "*") {
//           current *= nextValue; // '*' 연산 수행
//         } else if (operator === "/") {
//           current /= nextValue; // '/' 연산 수행
//         }
//         i += 2; // 다음 다음 요소까지 처리했으므로 인덱스 2 증가
//       } else if (operator === "+") {
//         // 연산자가 '+'인 경우
//         current += parseInt(values[i + 2]); // 다음 다음 요소를 숫자로 변환하여 더함
//         i += 2; // 다음 다음 요소까지 처리했으므로 인덱스 2 증가
//       }
  
//       result = current; // 현재 연산 결과를 최종 결과값으로 설정
//     }
  
//     console.log(result); // 최종 결과값 출력
//     console.log(result + 11); // 최종 결과값과 11을 더한 값을 출력
//   }
  
//   calculate("1 2 */++"); // 출력: 5, 16
  


// 132 28 */++ 
// 첫번째 숫자랑 두번째랑 연산자대로 연산후 그 결과를 두번째 숫자와 두번째연산자 연산후 그결과를 연산자순서대로 값을 반환함
// 각 연산 값의 모든 합을 두번째에 값을 넣어줌

// function sol(input){
//     let answer = ''; //첫번째 값
//     let answer2 = '';    //두번째 값 

//     let values = input.split(' ')
//     let a = Number(values[0])
//     let b = Number(values[1])
//     let c = values[2].split('')

//     // console.log(c[2])
//     for(let i = 0; i < c.length; i++){
//         if(c[i] === "*"){
//             answer += a * b;
//         }else if(c[i] === "/"){
//             answer = a /b;
//         }else if(c[i] === '+'){
//             answer = a + b;
//         }else{
//             answer = a - b;
//         }

//     }
//     return answer
// }
//  console.log(sol('132 28 */++ '))


// function sol(input){
//     let answer = []
//     for(let i = 1; i<=input; i++){
//         if((i % 10) % 3 == 0 && i % 10 != 0){
//             answer.push("짝")
//         }else if((i / 10) % 3 == 0 && i / 10 != 0){
//             answer.push("짝")
//         }else{
//             answer.push(i) 
//         }
//     }
//     return answer
// }
// console.log(sol(33))


// function sol(input){
//     let answer = ''
//     for(let i = 1; i<=input; i++){
//         for(let j = input; j > i; j++){
//             answer += " "
//         }
//         for(let i = 0; j < i; j++){
//             answer += "*"
//         }
//             answer += '\n'
        
//     }
//     return answer
// }

// console.log(sol(5))

// function sol(input){
//     let count = 0;
//     for(let i = 1; i<=input; i++){
//         let strNumber = i.toString()
//         count += (strNumber.split('8').length -1)
//     }
//     return count
// }
// console.log(sol(93))

// function sol(input){
//     let answer = []
//     a = input.split(' ')
//     answer.push(typeof a)
//     answer.push(a[0])

//     return answer

// }
// console.log(sol('10 2'))



// function sol(input){
//     let answer = ''
//     for(let i = 1; i<=input; i++){
//         for(let j = input; j > i; j++){
//             answer += " "
//         }
//         for(let i = 0; j < i; j++){
//             answer += "*"
//         }
//             answer += '\n'
        
//     }
//     return answer
// }



// function sol(input){
//     let answer;

//     let num = input.split(' ')
//     let a = num[0]
//     let b = num[1]
//     let c = num[2]
//     let d = num[3]
//     answer = (a <= b && a == d && b> c && c < 6) || (a == b && a == c && a == d)

//     return answer
// }

// console.log(sol('2 2 2 9'))

// function sol(input){
//     let answer = []
//     for(let i = 1; i <= input; i++){
//         for(let j = input; j > i; j--){
//             answer +=" "
//         }
//         for(let j = 0; j < i; j++){
//             answer += "*"
//         }
//         if(i !== input){
//             answer += "\n"
//         }
//     }
//     return answer
// }
// console.log(sol(5))


function solution(price, bargain) {
    let totalPrice = price;
  
    for (let i = 0; i <= bargain.length; i++) {
      totalPrice += bargain[i];
    }
  
    if (totalPrice < price / 2 || totalPrice >= price) {
      return "흥정 실패";
    } else {
      return totalPrice;
    }
  }
  
  console.log(solution(10000, [-1000, -2000, 1000, -500]));