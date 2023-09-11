// const numbers = [1, 2, 3, 4, 5]

// // 일반 for문
// let result = 0; 
// for (i = 0; i < numbers.length; i++) { 
//    result += numbers[i]; 
// }
// console.log('for', result); // 15;

// //-----------------------------------------
// //*!initialValue를 제공 안했을 때
// const result1 = numbers.reduce((number1, number2)=>number1 + number2)
// //*!initialValue를 제공하지 않았음으로 배열의 첫번째요소를 사용한다 
// //*1, 2 => 3 3, 3 => 6  6, 4 => 10 10, 5 => 15 */
// console.log('reduce', result1)

// //*!initialValue를 제공했을 때
// const result3 = numbers.reduce((number1, number2)=> number1 + number2, 10)
// //*10,1 => 11 11,2=>13 13,3=>16 16,4 => 20 20, 5 => 25

// console.log('reduce2', result3)


// const numbers = [1, 2, 3, 4]

// const sumByPlus = numbers.reduce((num1, num2) => num1 + num2)
// const sumByMinus = numbers.reduce((num1, num2) => num1 - num2)
// const sumByMulti = numbers.reduce((num1, num2) => num1 * num2)

// console.log(sumByPlus)
// console.log(sumByMinus)
// console.log(sumByMulti)




// let res = [3, 2, 4, 7, 14].reduce(function (accumulator, currentValue, currentIndex, array) {
//     console.log(`accumulator : ${accumulator}`)
//     console.log(`currentValue : ${currentValue}`)
//     console.log(`currentIndex : ${currentIndex}`)
//     console.log("                            ")     
//     return accumulator + currentValue
// })

// console.log("res: ", res)



// let res = [2, 2, 2, 2, 2].reduce(function (accumulator, currentValue, currentIndex, array) {
//     console.log(`accumulator : ${accumulator}`)
//     console.log(`currentValue : ${currentValue}`)
//     console.log(`currentIndex : ${currentIndex}`)
//     console.log("                            ")     
//     return accumulator + currentValue
// })

// console.log("res: ", res)



// var initialValue = 0;
// var list = [
//     {x : 1},
//     {x : 2},
//     {x : 3},
// ]
// var sum = list.reduce((acc, cur)=>{
//     acc+cur.x
// },initialValue)

// console.log(sum)


// let peoples = [
//     {
//         name : 'alice',
//         age: 21
//     },
//     {
//         name : 'max',
//         age: 23
//     },
//     {
//         name : 'jane',
//         age: 20
//     }
// ]

// function groupBy(objectArray, property){
//     return objectArray.reduce(function(accumulator, currentObj){
//         let key = currentObj[property];
//         console.log(`key : ${key}`)
//         if(!accumulator[key]){
//             accumulator[key] = [];
//         }
//         accumulator[key].push(currentObj)
//         return accumulator;
//     }, {})
// }

// let groupedPeople = groupBy(peoples, 'age')
// console.log(`groupedPeople : ${JSON.stringify(groupedPeople)}`)



// let arr = [1, 2, 1, 2, 3, 4, 5, 3, 5, 3, 2, 1, 7, 6, 21]

// let result = arr.sort().reduce((acc,cur) =>{ //*! acc는 누적된 배열, cur는 현재요소
//     const length = acc.length;
//     if(length === 0 || acc[length - 1] != cur){
//         acc.push(cur)
//     }
//     return acc
// }, [])

// console.log(result)


//*filter를 reduce로 구현
console.log([2, 4, 5, 6, 8].filter(val => val % 2 === 0))//[2, 4, 6, 8]

console.log([2, 4, 5, 6, 8].reduce((acc, val)=>{
    if(val % 2 === 0)
        acc.push(val)
    
    return acc;
}, []))
