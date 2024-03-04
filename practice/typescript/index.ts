let name1 :string = 'son';

let member : string[] = ['son']

let members : {member1: string, member2: string} = { member1 : 'son', member2 : 'son' }

let hi = [123]


let maName : string = 'sonyoungjin'

let age : number = 28
let area : string = 'cheonan'

let song : {singer: string , song: string} = {singer: 'son', song: 'sonyoungjin'}

let project : {member:string[], days:number, started: boolean}



let answer : number | string = '123'

let answers : (number | string)[] = [1, '2', 3]

let objects : { a : string | number} = { a : 123}

let user: string = 'kim'
let age1: number | undefined = undefined
let married: boolean = false

let school :{score:number[], teacher: string, friend:string} = {score: [100, 93,84],teacher: 'phil', friend: 'john'}


function mul(x: number) : number{
    return x * 2 
}

mul(20)

function hello(name?: string) : void{
    if(name){
        console.log('hi'+name)
    }else{
        console.log('no name') 
    }
}

function count(x: number | string) : number{
    return x.toString().length
}

function marry(money: number, house: boolean, charm: string) : string | void{
    let score : number = 0
    score += money
    if(house){
        score += 500
    }
    if(charm === '상'){
        score += 100
    }
    if(score >= 600){
        return '결혼가능'
    }
}
console.log(marry(100,true, '상'))


function cleaning(a :(number | string)[]){
    let cleaned : number[] =[];

    a.forEach((b)=>{
        if(typeof b === 'string'){
            cleaned.push(parseFloat(b))
        }else{
            cleaned.push(b)
        }
    })
    return cleaned
}

console.log(cleaning([12, '3']))

function subject(a:{sub: string | string[]}): string{
    if(typeof a.sub === 'string'){
        return a.sub
    }else if(Array.isArray(a.sub)){
        return a.sub[a.sub.length - 1]
    }else{
        return 'x'
    }
}

console.log(subject({sub : ['enl', 'art']}))