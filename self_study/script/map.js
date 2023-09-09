// var numbers = [1, 2, 3, 4, 5, 6, 7]

// function multiplyTwo(number){
//     return number * 2;
// }
// var newNumber = numbers.map(multiplyTwo)
// console.log(newNumber)

// var numbers = [4,5, 234,4,5,1]

// var result = numbers.map(multiplyTwo)
// console.log(result)


// let students = [
//     {id: 1, name: 'son'},
//     {id: 2, name: 'par'},
//     {id: 3, name: 'in'},
//     {id: 4, name: 'kim'},
//     {id: 5, name: 'lee'},
// ]

// let arr = new Array()
// for(let obj of students){
//     arr.push(obj.name)
// }
// console.log('1', arr)

// let names = students.map(student => student.name + 1)
// console.log('2', names)

// const array1 = [1, 4, 9, 16]

// const twice = array1.map(x => x * 2)
// console.log(twice)



//*2차원 배열 접근
// let numbers= [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// let newNumber = numbers.map(array => array.map(x=> x * 2))
// console.log(newNumber)


// let prices={
//     banana: 1,
//     apple: 2,
//     meat: 3
// }

// let doublePrices = Object.entries(prices).map(([key, value])=> [key, value*2])


// console.log(doublePrices)


// const userList = [
//     {userId:"1", firstName:"Seungwon", lastName:"Go", yyyymmdd:"19770513", phone:"010-1111-1111", address:"Jeju"},
//     {userId:"2", firstName:"Jeremy", lastName:"Go", yyyymmdd:"19800103", phone:"010-1111-1112", address:"Seoul"},
//     {userId:"3", firstName:"James", lastName:"Go", yyyymmdd:"19821113", phone:"010-1111-1113", address:"Seoul"},
// ]; // DB에서 가져온 쿼리 정보를 객체 형태로 저장

// var mon = ["Jan", "Feb", "Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// const newUserList = userList.map(u => ({ // 그냥 u => { } 하면 함수가 되어버리니 괄호로 감싸서 객체를 리턴한다고 명시
//     userId:u.userId, //기존 데이터를 이용한 새로운 필드 추가
//     // firstName:u.firstName, 
//     // lastName:u.lastName, 
//     fullName:u.firstName+' '+u.lastName,
//     //yyyymmdd:u.yyyymmdd, 
//     year: u.yyyymmdd.substring(0,4),
//     month: u.yyyymmdd.substring(4,6),
//     day: u.yyyymmdd.substring(6,8),
//     usDataFormat: mon[parseInt(u.yyyymmdd.substring(4,6)) - 1] + " " + parseInt(u.yyyymmdd.substring(6,8)) + ", " + parseInt(u.yyyymmdd.substring(0,4)), 
//     //나라마다 년월일 오는 순서가 다르다. 이 키는 월년일 로 오게 한다.
//     phone:u.phone, 
//     address:u.address
// }));

// console.log(newUserList);




//*map과 forEach차이점

// const arr = [1, 2, 3, 4, 5]
// const mulArr = [];

// arr.forEach(x =>{
//     mulArr.push(x*3)
// })
// console.log(mulArr)
//forEach()는 결과로 array를 가지기 위해 Push를 통해 배열을 만들어줘야함

const arr = [1, 2, 3, 4, 5]

let mulArr = arr.map(x =>{ return x*3})

console.log(mulArr)