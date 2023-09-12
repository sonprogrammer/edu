// const myDog = {
//     species: "요크셔테리어", 
//     age: 5,  
//     color: "black&gray",
//     getSpecies: function(){return this.species},
//     getAge: function() {
//       return this.age
//     },
//     getColor:  function(){return this.color },
//     changeSpecies: function(x){ this.species = x},
//     changeAge: function(newAge) {
//       this.age = newAge
//     },
//     changeColor: function(y){ this.color = y}     
//   }
  
// console.log(myDog.changeAge())  


// 지시사항에 따라 코드를 작성합니다.
// const atm ={
//     currentMoney: 10000,
//     password: 93412,
//     getCurrentMoney: function(){
//         if(password === this.password){
//         return this.currentMoney
//         }else{
//             console.log('check your password')
//         }
        
//    },
//    depositMoney: function(password, put){
//         if(password === this.password){
//             return this.currentMoney += put
//         }else{
//             console.log('check your password')
//         }
//    },
//    withdrawMoney: function(password, withdraw){
//        if(password === this.password){
//         return this.currentMoney -= withdraw
//        }else{
//            console.log('check your password')
//        }
//    }
// }
// console.log(atm)


//*forEach 사용 해보기
// var inputA = [{
//     name: "박태환",
//     age: 35
//   }, 
//   {
//     name: "유재석",
//     age: 49
//   },
//   {
//     name: "김강훈",
//     age: 12
//   },
//   {
//     name: "이지원",
//     age: 15
//   }]

// const makeNameList = (nameList)=>{
//     let result = ""
//     nameList.forEach((printName)=>{
//         result += `<li>${printName.name}</li>`
//     })
//     return result
// }
// console.log(makeNameList())


//*Map 사용 해보기
// let radius = [10, 30, 50, 7700];

// // let volumes = []; // 구의 부피를 저장할 배열
// // let volume = 0;
// // for (let i = 0; i < radius.length; i++) {
// //   volume = Math.floor((Math.PI * Math.pow(radius[i], 3) * 4) / 3);
// //   volumes.push(volume);
// // }
// // console.log(volumes);

// let newVolumes = radius.map((radius) => Math.floor(Math.pow(radius, 3) * 4/3 * Math.PI));
// console.log(newVolumes);


// *filter 사용 해보기

let shoppingCart = [
    {
      product: "자전거",
      qty: 1,
      price: 849.0,
    },
    {
      product: "에어팟",
      qty: 1,
      price: 249.0,
    },
    {
      product: "운동화",
      qty: 1,
      price: 90.99,
    },
    {
      product: "스웨터",
      qty: 2,
      price: 50.99,
    },
    {
      product: "양말",
      qty: 5,
      price: 5.99,
    },
  ];
  
  let total = shoppingCart.reduce((acu, product) =>{ //*!acu는 누적된 결과를 나타내고 product는 배열의 각 요소(제품)을 나타낸다
      return acu + product.qty * product.price
  }, 0) //*!초기값을 0으로 설정해야 계산이 시작 될 때 acu의 초기값이 0이다
  
  
  console.log(total);
  
