// 문자열 뒤집기

// function reverse(str){
//     let reverseStr = "";
//     for(let i = str.length - 1; i >= 0; i--){
//         reverseStr += str.charAt(i)
//     }
//     return reverseStr
// }


// document.write(reverse("Nice to meet you"));




// 구구단 
for(let i = 2; i < 10; i++) {
    let result;
    for(let j = 1; j < 10; j++){
        result += i +" x "+j +" = " + (i*j);
    }
    return result
}