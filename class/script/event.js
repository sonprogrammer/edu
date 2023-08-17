const box = document.querySelector('.box')
const btn = document.getElementById('login')


// 자바스크립트 이벤트
box.addEventListener('mousemove', e=>{ 
    // console.log(e) //mousemove라는 이벤트의 변화하는 걸 보여줌
    // console.log(e.offsetX, e.offsetY) //x,y값 좌표가 찍힘(consol창에서 볼수 있음 )
    box.textContent = `x pos = ${e.offsetX}, y pos = ${e.offsetY}`
});

box.addEventListener('click', e=>{
    console.log('mouse click')
    box.classList.remove('box')
    box.classList.add('boxclick')
})
//위같은경우는 클릭하면 boxclick의 클래스로 설정된 css설정이 먹힘


btn.addEventListener('click', e=>{
    box.classList.remove('boxclick')
    box.classList.add('box')
})
//위는 박스를 눌렀을 때 빨간색되었던걸 버튼을 누르면 다시 box css가 적용된다  