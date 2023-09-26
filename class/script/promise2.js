
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


//*fetch 쓰기 2탄
const passwordEle = document.querySelector('#password')
const button = document.querySelector('#buttonSubmit')



function makePassword(e){
    e.preventDefault();

    fetch('https://randomuser.me/api/?password=upper,lower,number')
        .then((res) => res.json())
        .then((data) =>{ 
            const password = data.results[0].login.password
            // *매개변수 data안에(fetch로 가져온 json파일) result라는 배열의 0번째 인덱스안에 있는
            //*login이라는 객체안에 password를 const password로 설정함
            passwordEle.textContent = password
            //*json파일에서 가져온 password를 html의 passwordEle에 대채한다

        })
}



button.addEventListener('click', makePassword);