// const chicken = document.querySelector('p'); 
// chicken.innerText = " 양념치킨";

const classcheck = document.querySelector('.content')
classcheck.innerHTML += '<h2>올해 최고의 치킨</h2>';

const all = document.querySelectorAll('p');
console.log(typeof(all))

all.forEach(param=>{
    param.innerText += ' 양념치킨' 
    //+=는 기존의 글이 사라지지않고 뒤에 양념치킨이 이어지게 만들기위해서 쓴거다
})

const alphabes = ['a', 'b','c'];
alphabes.forEach(val =>{
    classcheck.innerHTML += `<p>${val}</p>`
})


// function NormalFunc(test){
//     console.log()
// }
// ===
// NormalFunc1 = (test) =>{

// }


// innerText
// innerHTML 






// console.log(chicken)