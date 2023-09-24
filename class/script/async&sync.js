// //비동기 처리 Asynchronous callback
// function printWithDelay(print, timeout) {
//     //2.`setTimeout`을 이용해서 비동기 처리 함수를 완성합니다.
//     setTimeout(() => {
//       console.log('async callback')   
//     },3000);
//   }

//   function printImmediately(print) {
//     print();
//   }



//   //동기처리
//   printImmediately(() => console.log("hello"));
// console.log(printWithDelay())

//*Settimeout
// function countDownThree() {

//         console.log(3);
//         setTimeout(() => console.log(2), 1000);
//         setTimeout(() => console.log(1), 2000);
//         setTimeout(() => console.log("끝"), 3000);
//     //*콜백 지옥
//     // setTimeout(() => {
//     //     console.log(3);
//     //     setTimeout(() => {
//     //         console.log(2);
//     //         setTimeout(() => {
//     //             console.log(1);
//     //             setTimeout(() => {
//     //                 console.log('끝');
//     //             }, 1000);
//     //         }, 1000);
//     //     }, 1000);
//     // });
// }

// console.log(countDownThree())

//*setTimeout2
// function printAfterNSeconds(n){
//     //*첫번째 방법
//     // setTimeout(() => {
//     //     console.log(`${n}초가 경과되었습니다.`)
//     // }, n * 1000)
//     //*두번째 방법
//     const text = `${n}초가 경과되었습니다.`
//     const delay = n * 1000;
//     setTimeout(() => {
//         console.log(text)
//     }, delay);
// }

// console.log(printAfterNSeconds(2))
//*여기서 계속 undefined가 뜨는 이유는 함수 자체가 값을 반환하지 않기 때문이다.


// const nameElem = document.querySelector("#inputName");
// const buttonElem = document.querySelector("#buttonSubmit");


// function alertName(e) {

//     e.preventDefault() //*!e.preventDefault()가 없으면 화면은 버튼 클릭시 새로고침된다.(예를들어 네이버 검색창에 입력하고 검색을 누르면 내가 검색했던 글이 삭제되는걸 말함 )
//     const name = nameElem.value
//     setTimeout(()=>{
//         alert(`입력된 이름 : ${name}`)
//     }, 2000)    
// }

// buttonElem.addEventListener('click', alertName)



// *clearTimeout = 일정 시간동안 반응이 없으면 이벤트하는것?

// const nameElem = document.querySelector('#inputName');

// let alertTimer;
// function stop_going() {
//   const name = nameElem.value;

//   if (alertTimer) {
//     clearTimeout(alertTimer);
//   }

//   alertTimer = setTimeout(() => {
//     alert(`입력된 이름은 : ${name}`);
//   }, 1000);
// }

// nameElem.addEventListener('input', stop_going);




let isInThrottle;
function increaseScoreDuringTyping() {
  if (isInThrottle) {
    return;
  }

  isInThrottle = true;

  // 타이머 세팅
  setTimeout(() => {
    const score = document.querySelector("#score");
    const newScore = parseInt(score.innerText) + 1;
    score.innerText = newScore;

    isInThrottle = false;
  }, 500);
}