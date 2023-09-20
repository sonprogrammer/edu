
// function makeJson(inputA, inputB){
//     const obj ={
//         name: inputA,
//         age: inputB
//     }
//     return JSON.stringify(obj)
// }


// const inputA = "박태환"
// const inputB = 25

// console.log(makeJson('dudwls', 12))


// 입력받아 json만들기
const emailElem = document.querySelector("#inputEmail");
const nameElem = document.querySelector("#inputName");
const passwordElem = document.querySelector("#inputPassword");
const buttonElem = document.querySelector("#buttonSubmit");

function makeJsonAndAlert(e){

    e.preventDefault()
    
    const email = emailElem.value
    const name = nameElem.value
    const password = passwordElem.value

    const obj ={
        email: email,
        name: name,
        password: password,
    }
    const json = JSON.stringify(obj)
    alert(json)

}
buttonElem.addEventListener('click', makeJsonAndAlert)
