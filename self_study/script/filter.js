//map과 filter의 차이
// let array = [0, 1, 2, 3, 4, 5]

// let filter = array.filter( c =>{
//     return c <= 2
// })

// console.log(filter)

// let map = array.map(c => c <=2)

// console.log(map)


//map과 filter의 차이2
// let array = [0, 1, 2, 3, 4, 5]

// let filter = array.filter(x => x*2) //
// console.log(filter)

// let map = array.map(x => x *2)
// console.log(map)


const animals = [
    {name: 'lion', size: 'big', isAggressive: true, weight: 200},
    {name: 'monkey', size: 'medium', isAggressive: true, weight: 30},
    {name: 'cat', size: 'small', isAggressive: false, weight: 10},
    {name: 'rat', size: 'small', isAggressive: false, weight: 2},
]

// for(let i = 0; i < 4; i++){
//     console.log(animals[i].name)
// }

// for(let animal of animals){ //animals의 값을 animal이라는 변수에 담는다
//     console.log(animal)
// }

// let i = 0;
// while(i < 10){
//     console.log(i)
//     i++
// }

//forEach
// animals.forEach(function(x, index) {
//     console.log(index)

// })

//*map
// const animalNames = animals.map(function(animal){
//     return `this animals's name is ${animal.name} and size is ${animal.size}`
// })
// console.log(animalNames)


//*filter
// const smallAinmal = animals.filter(function(무게){
//     return 무게.weight <= 20
// })
// console.log(smallAinmal)

// const smallAimals = animals.map(x => {return x.weight <= 20})
// console.log(smallAimals) //[ false, false, true, true ]


//*reduce
// const numbers = [1, 10, 11, 23, 73]

// const total = numbers.reduce((acc, cur)=>{
//     console.log(acc,cur)
//     return acc+cur
// }, 10)


const totalWeight = animals.reduce((acc, cur) =>{
    return acc + cur.weight
}, 0)


console.log(totalWeight)


