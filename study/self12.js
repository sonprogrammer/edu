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
// for(let i = 2; i < 10; i++) {
//     for(let j = 1; j < 10; j++){
//         document.write(i +" x "+j +" = " + (i*j) + "<br>");
//     }

// }


// 문자열 길이

function addStringLength(a, b) {
    let lengthA = a.length;
    let lengthB = b.length;

    return lengthA + lengthB


  
};


var inputA = "abcdsafdasfasdf";
var inputB = "dfdsafasdfe";


module.exports = { inputs: [inputA, inputB], func: addStringLength }
