
// let myPromise = new Promise(function(resolve, reject) {
//     resolve();
//   });

// function getData() {
//     return new Promise(function(resolve, reject){

//         var data = "javascript promise";
//         resolve(data)
//     });

//   }
//   getData().then(function (resolvedData) {
//     document.write(resolvedData);
//   });
  
//*Promise를 사용하는 함수 만들기
// function resolveWhenPositiveNumber(num){
//     return new Promise((res, rej) =>{
//         if(num > 0){
//             res(`resolve 결과 : ${num}은 양수입니다!`)
//         }else{
//             rej(`reject 결과 : ${num}은 음수입니다...`)
//         }
//     })
// }


//*fetch사용하여 json 데이터 가져오기

// const inputElem = document.querySelector('#inputColor')
// const buttonElem = document.querySelector('#buttonSubmit')
// const hexaCodeElem = document.querySelector('#hexaCode')

// function showHexaCode(e){
//     e.preventDefault(); //* 버튼을 누르면 바로 새로고침되어서 hexacode창에 아무것도 뜨자 마자 바로 새로 고침되서 사라진다(처음 창처럼된다)

//     const userInputColor = inputElem.value

//     fetch('data.json') //*data.json파일을 가져옴
//         .then((res) => res.json()) //* 응답데이터를 json형식으로 변환함
//         .then((datas) =>{ 
//             //* datas배열에서 find메서드를 사용하여 data.color가 userInputColor와 일치하는 항목을 찾음 
//             const foundData = datas.find(data => data.color === userInputColor)
//             hexaCodeElem.innerHTML = foundData.value
//             hexaCodeElem.style.color = foundData.value
//         })
// }

// buttonElem.addEventListener('click', showHexaCode)

// *! 위와 같은 동작이지만 async사용 해보기
// async function showHexaCode(e) {
//     // 새로고침 방지
//     e.preventDefault();
  
//     const userInputColor = inputElem.value;
  
//     // await를 반드시 fetch(), json() 앞에 붙여 주세요.
//     // 물론 res 대신 response 등으로 변수명은 바꾸어도 됩니다.
//     const res = await fetch('data.json'); 
    //*fetch함수를 이용하여 데이터를 가져오고 await를 사용하여 이 작업이 완료될 때까지 기다린다  
    //*fetch함수의 결과는 response객체인데, 이 객체에는 서버로부터 받은 응답 데이터와 응답 상태등이 
    //*포함되어 있다. 이 응 답객체를 res변수에 할당한다  
//     const datas = await res.json();
    //*res.json()메서드는 response객체에서 응답 데이터를 추출하고 json형식으로 파싱한다. 
    //*이 작업도 await를 사용하여 작업이 완료될 때 까지 기다린다. 파싱된 json데이터는 자바스크립트 객체로
    //*변환되고 이를 datas변수에 저장한다

    //*결과적으로 datas변수에는 data.json파일에서 파싱한 자바스크립트 객체가 저장되게 된다
    //*이후 코드에서 이 데이터를 활용할 수 있다 
  
//     // 배열의 요소 중, color 가, 사용자가 입력한 색과 일치하는 요소를 찾음.
//     const foundData = datas.find(data => data.color === userInputColor);
  
//     // 찾은 요소는 객체인데, 그 value값이 헥사코드임.
//     hexaCodeElem.innerHTML = foundData.value;
  
//     // 참고로, 아래 코드를 추가하면 색상도 반영됨 (채점과는 무관합니다).
//     hexaCodeElem.style.color = foundData.value;
//   }
  
//   const inputElem = document.querySelector('#inputColor');
//   const buttonElem = document.querySelector('#buttonSubmit');
//   const hexaCodeElem = document.querySelector('#hexaCode');
  
//   buttonElem.addEventListener('click', showHexaCode);


//*fetch 쓰기 2탄
// const passwordEle = document.querySelector('#password')
// const button = document.querySelector('#buttonSubmit')



// function makePassword(e){
//     e.preventDefault();

//     fetch('https://randomuser.me/api/?password=upper,lower,number')
//         .then((res) => res.json())
//         .then((data) =>{ 
//             const password = data.results[0].login.password
//                 *매개변수 data안에(fetch로 가져온 json파일) result라는 배열의 0번째 인덱스안에 있는
//             //*login이라는 객체안에 password를 const password로 설정함
//             passwordEle.textContent = password
//             //*json파일에서 가져온 password를 html의 passwordEle에 대채한다

//         })
// }

//*위와 같은 동작이지만 async/await사용하기
// const button = document.querySelector('#buttonSubmit')
// const showPassword = document.querySelector('#password')


// async function showHexaCode(e){
//     e.preventDefault();

//     const res = await fetch('https://randomuser.me/api/?password=upper,lower,number')
//     const data = await res.json();



//     const password = data.results[0].login.password

//     showPassword.textContent = password


// }

// button.addEventListener('click', showHexaCode)



// button.addEventListener('click', makePassword);


//*fetch사용해서 json데이터 가져오기(async/await)

// const select = document.querySelector('#selectEmployeeCode')
// const button = document.querySelector('#buttonSubmit')
// const emailElement = document.querySelector("#employeeEmail")

// async function getEmail(e){
//     e.preventDefault();

//     const selectCode = select.value;

//     const res = await fetch('employees.json')
//     const datas = await res.json();

//     const employees = datas.Employees;

//     const foundEmployee = employees.find((employee) =>{
//         return employee.employeeCode === selectCode;
//     })

//     if(foundEmployee){
//         emailElement.textContent = foundEmployee.emailAddress
//     }else{
//         emailElement.textContent = '해당 근로자가 없다'
//     }

// }

// button.addEventListener('click', getEmail)


//*fetch사용 하여 api호출하기(async/await)

// const button = document.querySelector('#buttonSubmit')
// const img = document.querySelector('#dogImage')

// async function showImg(e){
//     e.preventDefault();

//     const res = await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await res.json();

//     const Image = data.message;
//     img.src = Image
// }


// button.addEventListener('click', showImg)


// fetch("https://reqres.in/api/users", {
//   method: "POST",
//   headers: { "Content-type": "application/json" },
//   body: JSON.stringify({
//     name: "첫번째 참가자",
//   }),
// })
//   .then((res) => {
//     if (res.ok) {
//       console.log("success!");
//       return res.json();
//     } else {
//       console.log("failed");
//     }
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Error"));


// import "babel-polyfill";

// const startingMinutes = 10;
// let time = startingMinutes * 60;
// const countdownEl = document.getElementById("countdown");

// setInterval(updateCountdown, 1000);

// function updateCountdown() {
//   const minutes = Math.floor(time / 60);
//   let seconds = time % 60;
//   countdownEl.innerHTML = `${minutes}: ${seconds}`;

//   time--;

//   if (time == 590) {
//     let startTime = Date.now();
//     timeTest().then(() => {
//       let finishTime = Date.now();
//       let timeTaken = finishTime - startTime;
//       alert("Time taken in milliseconds: " + timeTaken);
//     });
//   }
// }

// function timeoutPromise(interval) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve("done");
//     }, interval);
//   });
// }

// async function timeTest() {
//   await timeoutPromise(3000);
// }


// import "babel-polyfill";
// //fetch()
// async function fetchImage() {
//   //1. fetch() 메서드를 호출하여 구글에 검색된 햄버거 이미지를 가져오고 변수에 저장하세요. 이때 await을 사용하세요
//   let response = await fetch(
//     "https://media.istockphoto.com/photos/cheeseburger-isolated-on-white-picture-id1157515115?k=20&m=1157515115&s=612x612&w=0&h=1-tuF1ovimw3DuivpApekSjJXN5-vc97-qBY5EBOUts="
//   );

//   const error = false;

//   if (!response.ok || error) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   } else {
//     document.write("here's the image");
//     return await response.blob();
//   }
// }
// // then() 블록을 사용하여 promise가 성공적인 실행에 응답합니다.
// // 반환된 응답을 받아 blob()을 실행하여 blob으로 변환합니다.
// fetchImage()
//   .then((blob) => {
//     // Blob 객체를 가리키는 객체 URL을 생성
//     let objectURL = URL.createObjectURL(blob);
//     // blob(이미지)을 표시할 <img> 요소를 만듭니다.
//     let image = document.createElement("img");
//     // <img>의 src를 객체 URL로 설정하여 이미지에 표시되도록 합니다.
//     image.src = objectURL;

//     // ADOM에 <img> 요소 추가
//     document.body.appendChild(image);
//   })
//   .catch((e) => console.log(e));



//비동기 3초 타이머 

// const clickBtn = () =>{
//   setTimeout(()=>{
//     console.log( '1초<br>')
//   }, 1000)
//   setTimeout(()=>{
//     console.log( '2초<br>')
//   }, 2000)
//   setTimeout(()=>{
//     console.log( '3초<br>')
//   }, 3000)
// }

// console.log(clickBtn())

// promise에서 입력 글자 길이, 읽을 글자수 비교 하기
// const countStr = (num) => {
//   const s = input1.value;

//   return new Promise((resolve, reject) => {
//     // Promise의 실행 결과를 배열에 담아 resolve나 reject로 전달하세요.
//     if (num > s.length) return reject([num, s]);
//     else return resolve([num, s.substr(0, num)]);
//   });
// };

// btn.addEventListener("click", () => {
//   countStr(input2.value)
//     // 전달받은 인자를 출력 형식에 맞춰서 출력하세요.
//     .then((param) => {
//       message.innerText = `앞에서 ${param[0]}글자는 ${param[1]}입니다.`;
//     })
//     .catch((param) => {
//       message.innerText = `${param[1]}의 길이가 ${param[0]}보다 짧습니다.`;
//     });
// });


// const number = document.querySelector('inputNumber')
// const print = document.querySelector('numberOfDates')
// const btn = document.querySelector('buttonSubmit')

// function countDate(e) { 
//   // 새로고침 방지
//   e.preventDefault()
  
//   const userInputNumber = inputElem.value 
  
//   fetch('coronaData.json')
//     .then(response => response.json())
//     .then(datas => { 
//       const foundDatas = datas.filter(data => data.new_cases >= userInputNumber)
//       //*! filter를 쓴이유는 userInputNumber이상인 모든 데이터 찾고 그 개수를 반환해야하기 때문
//       //*! find는 배열에 주어진 조건을 만족하는 첫번째 요소만 반환하고 검색을 종료한다 
//       resultElem.innerHTML = foundDatas.length
//     })
//   }

// btn.addEventListener('click', countDate)

import 'babel-polyfill';

const getPokemonData = async () => {
    let input = document.querySelector(".pokemon-input");
    let pokemonName = document.querySelector(".pokemon-name");
    
    // const res = await fetch(`https://${window.location.hostname}:8190/data`);
    const res = await fetch(`http://${window.location.hostname}:8090/data`);
    const data = await res.json();
    pokemonName.innerHTML = data.results[input.value].name;
}
var button = document.querySelector(".pokemon-button");
button.addEventListener("click", getPokemonData);

export default getPokemonData;
