// const o = {
//     name : 'kim',
//     changeMyName : function(name){this.name = name}

// }

// const o2 ={
//     name : 'song'
// }

// function callFuncWithArg(f, arg){
//     f(arg)
// }

// o.changeMyName.bind(o2)("sam")
// console.log('1번 - ', o2.name)
// callFuncWithArg(o.changeMyName, 'Dainel')
// console.log('2번 - ', o.name)
// o.changeMyName('sam')
// console.log('3번 - ', o.name)

const  yourName = {
    name : 'son',
    callName: function(){
        return this.name
    }
}

let callyou = yourName.callName()
you = callyou.bind(yourName)
console.log(you)