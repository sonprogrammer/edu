
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
                // *매개변수 data안에(fetch로 가져온 json파일) result라는 배열의 0번째 인덱스안에 있는
//             //*login이라는 객체안에 password를 const password로 설정함
//             passwordEle.textContent = password
//             //*json파일에서 가져온 password를 html의 passwordEle에 대채한다

//         })
// }



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



