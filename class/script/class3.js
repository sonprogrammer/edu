//김씨만 출력하기
// function solution(data) {
//     let answer = []

//     let a = data.split(' ')
//     console.log(a)  //['도도새', '김철수', '안영희', '김준수', '엘리스']
//     for(let i = 0; i < a.length; i++){
//         if(a[i][0] === "김"){ //a[i][0]여기서 뒤에 [0]은 성은 첫번째 인덱스에 있으니깐
//             answer.push(a[i])
//         }
//     }
// return answer.join(' ')
// }

// console.log(solution("도도새 김철수 안영희 김준수 엘리스"))

//김씨만 출력하기(2본째 방법)
// function solution(data){
//     const students = data.split(' ');
//     const answer = [];

//     students.forEach(element =>{
//         if(element[0] === "김"){
//             answer.push(element)
//         }

//     })
//     return answer.join(' ')
// }

// console.log(solution("도도새 김철수 안영희 김준수 엘리스"))



//연속계산기
// 입력 124 7 +/-**
// function solution(data) {
//     let array = data.split(' ') //124, 7, +/-**
//     let ops = array[2].split('')    // +, /, -, *, *
//     let b = Number(array[1])  // 7
//     let a = Number(array[0])    //124
//     let sum = 0;
  
//     ops.forEach(element =>{
//         if(element === '+') a += b;
//         else if(element === '-') a -= b;
//         else if(element === '*') a *= b;
//         else if(element === '/') a = Math.floor(a/b);
        
//         sum += a;
  
//     })
  
//     return [a, sum].join(' ')
//   }


//약수의 약수
function solution(data) {
    let answer = []
    for(let i =1; i <= data; i++){
        let divisor = []
        if(data % i === 0){
            for(let j = 1; j <= i; j++){
                if(i % j === 0){
                    divisor.push(j)
                }
            }
            answer.push(divisor.join(' ')) //['1', '1 2', '1 2 4'......]
        }
    }
  return answer.join('\n');
}