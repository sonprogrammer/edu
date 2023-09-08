function sort(num){
    let result 
    let number = num.split(' ')
    for(let i = 0; i < num.length; i++){
        if(i == 6 || num.length == 10 || num.length == 15 || num.length == 20){
            result += '\n'
        }
    }
    return number
}
console.log(sort('18 19 27 32 43 4 7 24 36 38 2 10 14 16 25 34 35 6 10 32 39 43 20 4 6 16 19 30 24'))






