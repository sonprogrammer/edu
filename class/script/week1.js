// const student = {
//     name: "elice",
//     age: 7,
//     address: "England",
//     favorite: ["rabbit", "blue", "ribbon"],
//   };
  
//   /* 지시사항 1번: 학생 이름 */
//   console.log('학생 이름: ' + student.name)
  
//   /* 지시사항 2번: 학생이 좋아하는 것들 */
//   console.log('학색이 좋아하는 것들' + student.favorite.join(', '))



// function checkSign (n){
//     if(n > 0){
//         return "positive"
//     }else if(n < 0){
//         return "negative"
//     }else{
//         return "zero"
//     }
// }

//*최댓값 구하기 
// var getMaxNumber = function (arr) {
//     var len = arr.length;
  
//     var max = arr[0];
  
//     for (i = 1; i < len; i++) if (max < arr[i]) max = arr[i];
  
//     return max;
//   };



//*reset()써보기
form.addEventListener("submit", function (e) {
    e.preventDefault()
  
    let rain = input.value
  
    if(rain >= 50){
        answer.innerHTML = '우산을 챙긴다.'
    }else{
        answer.innerHTML = '그냥 간다.'
    }
    form.reset() //* 입력 창을 초기화 시켜줌
  });