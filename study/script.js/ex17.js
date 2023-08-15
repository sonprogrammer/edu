// a부터 b까지 반복하기
// function solution(a, b) {
//     const max_width = 15;
  
//     if (b > max_width) {
//       b = max_width;
//     }
  
//     let pyramid = "";
//     for (let i = a; i <= b; i++) {
//       let row = "*".repeat(i);
//       pyramid += row
//       if(i !== b){
//       pyramid += "\n";
//       }
//     }
  
//     return pyramid;
//   }
  
// function solution(a, b) {
//     const max_width = 15;
  
//     if (b > a + max_width - 1) {
//       b = a + max_width - 1;
//     }
  
//     let pyramid = "";
//     for (let i = a; i <= b; i++) {
//       let row = "*".repeat(i);
//       pyramid += row;
//       if (i !== b) {
//         pyramid += "\n";
//       }
//     }
  
//     return pyramid;
//   }
//   console.log(solution(4, 8));
  

//8갯수 찾기
// function sol(input){
//     let count = 0;
//     for(let i = 1; i <= input; i++){
//         let strNumber = i.toString()
//         count +=(strNumber.split('8').length - 1)
//     }
//     return count
// }

// console.log(sol(200))


// 양수는 양수끼리, 음수는 음수끼리
// function sol(input){
//     let a = []
//     let b = []
//     let number = input.split(' ').map(Number)

//     for(let num of number){
//     if(num >=0){
//         a.push(num)
//     }else{
//         b.push(num)
//     }
// }
//     return [a, b]
// }

// console.log(sol("-1 2 1 -2 7 3 -1 0"))

// function sol(input){
//     let red_pocket = []
//     let blue_pocket = []

//     let number = input.split(' ').map(Number)

//     for(let num of number){
//         if(num >= 0){
//             red_pocket.push(num)
//         }else{
//             blue_pocket.push(num)
//         }
//     }
//     return [red_pocket, blue_pocket]
// }

// console.log(sol("-1 2 1 -2 7 3 -11 0"))



function decipher(cipher) {
    const signal1 = {
      '0': 'e',
      '1': 'w'
    };
  
    const signal2 = {
      '0': 'e',
      '1': 'l'
    };
  
    let result = '';
    for (let i = 0; i < cipher.length; i += 5) {
      const signal = cipher.slice(i, i + 5); // 5자리 신호 추출
  
      const firstSignal = signal[0]; // 첫 번째 신호 (0 또는 1)
  
      let alphabet;
      if (firstSignal === '0') {
        alphabet = signal1[signal.slice(1)]; // signal1을 이용하여 알파벳 해석
      } else {
        alphabet = signal2[signal.slice(1)]; // signal2를 이용하여 알파벳 해석
      }
  
      if (alphabet) {
        result += alphabet;
      }
    }
  
    return result;
  }
  
  // 예시 암호문
  const cipher = '01011';
  console.log(decipher(cipher)); // 출력: "elice"
  