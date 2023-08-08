// function sol(){
//     return "\"i'm youngjinson\""
// }

// console.log(sol())

// function sol(){
//     return "400\nbus\nlike"
// }

// function sol(){
//     let num = 400;
//     let str = "bus"
//     let str1 = "like"

//     return num +"\t"+ str+"\t" + str1
// }

// function sol(){
//     let result = []
//     let num1 = 1 
//     let num2 = 2
//     let str1 = "1"
//     let str2 = "2"

//     result.push(num1 + num2)
//     result.push(str1 + str2)
//     return result
// }

// function sol(input){
//     let result
//     result = input.split("\n")
//     return result
//     console.log("elice,rabbit,cheshire,dood,hatter")
//     // let arr = "goodagoodabad".split("a")
//     // console.log(arr)
//     document.write("elice,rabbit,cheshire,dood,hatter")
// }

// function sol(input){
//     let answer = []
//     // answer = input.split(", ")
//     let str = input.toString()
//     let a = str.split(", ")
//     answer.push(typeof a)
//     answer.push(a[0])
//     return answer
// }



// function sol(money){
//     let a = money.split("500원")
//     return a
// }

// function sol(a) {

//     let ao = 'out'
//     function add(x, y){
//         let result = x + y
//         return result
//     }
//     console.log(result)
//     return add(a)
// }

// function sol(money){
//     let method
//     if(money >=1000){
//         method = "taxi"
//     }else if(money>=500){
//         method = "bus"
//     }else if(money>=300){
//         method = "subway"
//     }else{
//         method = "walk"
//     }
//     return method
// }

// function sol(input){
    // let a, b, c,d
    // let result
    // if((a<=b&&a==d&&b>c&&c < 6) || (a==b&&a==c &&a==d)){
    //     result = "true"
    // }else{
    //     result = 'false'
    // }
    // return result
//     let answer
//     let num = input.split(" ")
//     let a = num[0]
//     let b = num[1]
//     let c = num[2]
//     let d = num[3]
//     answer = (a<=b && a==d && b>c && c < 6) || (a==b && a==c && a==d)
//     return answer
// }

// 약수 출력하기
function sol(input){
    let answer = []
    for(let i = 1; i <= input; i++){
        if(input % i == 0){
            answer.push(i)
        }
    }
    return answer
}

// 3, 6, 9게임
function sol(input){
    let answer = []
    for(let i = 1; i <= 80; i++){
        if((i % 10) % 3 == 0 && i % 10 != 0){
            // i가 10으로 나눈 나머지가 3의 배수이다 === (i % 10) % 3 == 0
            // i가 10으로 나눈 나머지가 0이 아니다 === i % 10 != 0 
            // i % 10 != 0는 10의 배수가 아닌경우를 의미하고 일의 자리 숫자가 0이 아닌 경우를 의미함
            answer.push("짝")
        }else if(Math.floor((i / 10) % 3) == 0 && Math.floor(i / 10) != 0){
            // i를 10으로 나눈 몫이 3의 배수 이다 === Math.floor(i / 10) % 3) == 0
            // i를 10으로 나눈 몫이 0이 아니다 === Math.floor(i / 10) != 0
            // 즉 위에는 Math.floor을 했기 때문에 1부터 9까지의 Math.floor(i/10)의 값은 0이된다 고 말은 10의 자리 숫자를 확인하기위한것이다
            answer.push("짝")
        }
        else{
            answer.push(i)
        }
    }
    return answer
}

console.log(sol())



 