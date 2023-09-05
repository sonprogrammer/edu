// function increaseAndPrint(n, callback) {
//     setTimeout(() => {
//       const increased = n + 1;
//       console.log(increased);
//       if (callback) {
//         callback(increased); // 콜백함수 호출
//       }
//     }, 1000);
//   }
  
// //콜백 지옥
//   increaseAndPrint(0, n => {
//     increaseAndPrint(n, n => {
//       increaseAndPrint(n, n => {
//         increaseAndPrint(n, n => {
//           increaseAndPrint(n, n => {
//             console.log('끝!');
//           });
//         });
//       });
//     });
//   });

// function increaseAndPrint(n){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       const increased = n+1;
//       console.log(increased)
//       resolve(increased)
//     }, 1000)
//   })
// }

// increaseAndPrint(0)
//   .then((n) => increaseAndPrint(n))
//   .then((n) => increaseAndPrint(n))
//   .then((n) => increaseAndPrint(n))
//   .then((n) => increaseAndPrint(n)) //체이닝 기법
//   console.log(n)

//pending상태
// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
//     	resolve("처리 완료")
//     }, 5000)
// });
// console.log(promise); // Pending (대기) 상태


// function doSomething() {
//   return new Promise((resolve, reject) => {
//       resolve(100)
//   });
// }

// doSomething()
//     .then((value1) => {
//         const data1 = value1 + 50;
//         return data1
//     })
//     .then((value2) => {
//         const data2 = value2 + 50;
//         return data2
//     })
//     .then((value3) => {
//         const data3 = value3 + 50;
//         return data3
//     })
//     .then((value4) => {
//         console.log(value4); // 250 출력
//     })




// // 프로미스 객체와 전혀 연관없는 함수
// function getRandomNumber() {
//   const num = Math.floor(Math.random() * 10); // 0 ~ 9 사이의 정수
//   return num;
// }

// // Promise.resolve() 를 사용하여 프로미스 객체를 반환하는 함수
// function getPromiseNumber() {
//   const num = getRandomNumber(); // 일반 값
//   return Promise.resolve(num); // 프로미스 객체
// }

// // 핸들러를 이용하여 프로미스 객체의 값을 처리하는 함수
// getPromiseNumber()
//     .then((value) => {
//       console.log(`랜덤 숫자: ${value}`);
//     })
//     .catch((error) => {
//       console.error(error);
//     });




// 1. 서버 요청 API 프로미스 객체 생성 (fetch)
// const api_1 = fetch("https://jsonplaceholder.typicode.com/users");
// const api_2 = fetch("https://jsonplaceholder.typicode.com/users");
// const api_3 = fetch("https://jsonplaceholder.typicode.com/users");

// // 2. 프로미스 객체들을 묶어 배열로 구성
// const promises = [api_1, api_2, api_3];

// // 3. Promise.all() 메서드 인자로 프로미스 배열을 넣어, 모든 프로미스가 이행될 때까지 기다리고, 결과값을 출력
// Promise.all(promises)
//     .then((results) => {
//       // results는 이행된 프로미스들의 값들을 담은 배열.
//       // results의 순서는 promises의 순서와 일치.
//       console.log(results); // [users1, users2, users3]
//     })
//     .catch((error) => {
//       // 어느 하나라도 프로미스가 거부되면 오류를 출력
//       console.error(error);
//     });

// const promise = new Promise((resolve, reject) =>{
//   console.log('doing somegthing,,,,,')
//   setTimeout(() => {
//       // resolve('son')
//       reject(new Error('error')) //Error는 자바스크립트에서 제공하는 오브젝트중 하나이다  
//   }, 2000);
// })

// promise
//   .then(value =>{  //여기서 value는 위에서 resolve(즉 성공적으로 완료 했을때)나오는 값이다
//     console.log(value)  //출력 son
// })
//   .catch(error =>{
//     console.log(error)
//   })
//   .finally(()=>{
//     console.log('finally')
//   })


//   // promise 체이닝
//   const fetchNumber = new Promise((res, rej) =>{
//     setTimeout(() => {
//       res(1)
//     }, 1000);
//   })

//   fetchNumber 
//     .then(num => num * 2)  // 2
//     .then(num => num * 3) //3
//     .then(num => {
//       return new Promise((res, rej) => {
//         setTimeout(() => {
//           res(num - 1) // 6 - 1 = 5
//         }, 1000);
//       })
//     })
//     .then(num =>{console.log(num)}) //2초뒤에 5출력


// promise 체이닝 오류 처리
// const getHen = () =>
//   new Promise((res, rej) =>{
//     setTimeout(() => {
//       res('chicken')
//     }, 1000);
//   })

// const getEgg = hen =>
//   new Promise((res, rej)=>{
//     setTimeout(() => {
//       // res(`${hen} => Egg`)
//       rej(new Error(`error! ${hen} => egg`))
//     }, 1000);
//   })

// const cook = egg =>
//   new Promise((res, rej) =>{
//     setTimeout(() => {
//       res(`${egg} => fried`)
//     }, 1000);
//   })


// getHen()
//   .then(hen => getEgg(hen)) //then에서 받아오는 value를 getEgg함수에 전달해서 호출함
//   .catch(error => {
//     return 'bread'
//   })
//   .then(egg => cook(egg))
//   .then(meal => console.log(meal))
//   .catch(console.log) //Error: error! chicken => egg


class UserStorage{
  loginUser(id, password){
    return new Promise((res, rej) =>{
      setTimeout(() => {
        if(
          (id === 'son' && password === 'youngjin') ||
          (id === 'wow' && password === 'wow')
        ){ res(id)}
        else{rej(new Error('not found'))}
      }, 2000);
    })
  }

  getRoles(user){
    return new Promise((res, rej) =>{
      setTimeout(() => {
        if(user === 'son'){
          res({name: 'son', role: 'admin'})
        }else{
          rej(new Error('no access'))
        }
      }, 1000);
    })
  }
}

const userStorage = new UserStorage()
const id = prompt('enter your id')
const password = prompt('enter your password')

userStorage
  .loginUser(id, password) //id와 password가 잘되면은 아래로 간다
  .then(userStorage.getRoles)
  .then(user =>{
    alert(`hello ${user.name} you have a ${user.role}`)})
  .catch(alert(`not fofdfdfund`))


