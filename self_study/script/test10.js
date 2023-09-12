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


