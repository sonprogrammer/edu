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
const atm ={
    currentMoney: 10000,
    password: 93412,
    getCurrentMoney: function(){
        if(password === this.password){
        return this.currentMoney
        }else{
            console.log('check your password')
        }
        
   },
   depositMoney: function(password, put){
        if(password === this.password){
            return currentMoney += put
        }else{
            console.log('check your password')
        }
   },
   withdrawMoney: function(password, withdraw){
       if(password === this.password){
        currentMoney -= withdraw
       }else{
           console.log('check your password')
       }
   }
}
console.log(atm)
