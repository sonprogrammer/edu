//자바스크립트의 내장 객체활용 해보기
// 밑에는 Date 생성자에 들어있는 내장 객체를 사용해서 getFullYear, getMonth, getDay를 사용함


const now = new Date(); //new는 date라는 생성자에 접근해서 무언가를 가져와보겠다는 것

console.log(now)
document.write(now)

console.log(typeof now)



console.log('getFullYear: ', now.getFullYear())

console.log('getMonth: ', now.getMonth())   //getMonth는 0부터 시작함(인덱스 기준)
console.log('getDay: ', now.getDay()) //getDay는 요일을 반환 0부터 시작 일요일부터 0임

// ////////////////////////////////////////////////////////

let park = {
    name : 'son',
    age : 27,
}

let lee ={
    name : 'par',
    age : 40
}


// 회원이 엄청 많아지면 위 같은 객체를 엄청 많이 만들어야함 -> 비효율적임 

// const birthday = new Date('August 19, 1997 23:15')
// const now = new Date();


function User(name, age, email){
    this.name = name;
    this.age = age;
    this.email = email;
}

console.log(park)
let newName = new User('park', 40)
let kim = new User('Kim', 30)
console.log(kim)

// console.log(newName)