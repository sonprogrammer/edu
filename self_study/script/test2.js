function sol(submit){
    if(submit >= 50){
        console.log('우산을 챙긴다')
    }else{
        console.log('그냥 간다')
    }
}

sol(50)


form.addEventListener("submit", function (e) {
    e.preventDefault();
    let inputValue = parseInt(input.value) // input엘리먼트의 값을 가져옴
  if( inputValue >= 50){
        answer.textContent = "우산을 챙긴다."
    }else{
        answer.textContent = "그냥 간다."
    }
    form.reset()
});
